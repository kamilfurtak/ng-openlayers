import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';
import Circle from 'ol/style/Circle.js';
import Text from 'ol/style/Text.js';
import { MapComponent } from '../map.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { StyleComponent } from './style.component';
import { StylesComponent } from './styles.component';
import { StyleFillComponent } from './fill.component';
import { StyleStrokeComponent } from './stroke.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { StyleIconComponent } from './icon.component';

@Component({
  selector: 'aol-style-lifecycle-test',
  imports: [
    MapComponent,
    LayerVectorComponent,
    StyleComponent,
    StylesComponent,
    StyleFillComponent,
    StyleStrokeComponent,
    StyleCircleComponent,
    StyleTextComponent,
    StyleIconComponent,
  ],
  template: `
    <aol-map width="300px" height="200px">
      <aol-layer-vector>
        @if (showStyle) {
          <aol-style [zIndex]="zIndex">
            @if (showPaint) {
              <aol-style-fill [color]="color" />
              <aol-style-stroke [color]="color" [width]="width" [lineDash]="dash" />
            }
            @if (showCircle) {
              <aol-style-circle [radius]="radius">
                @if (showPaint) {
                  <aol-style-fill [color]="color" />
                  <aol-style-stroke [color]="color" [width]="width" />
                }
              </aol-style-circle>
            }
            @if (showText) {
              <aol-style-text [text]="label" textBaseLine="top" [rotateWithView]="rotateWithView">
                @if (showPaint) {
                  <aol-style-fill [color]="textColor" />
                  <aol-style-stroke [color]="color" [width]="width" />
                }
              </aol-style-text>
            }
          </aol-style>
        }
      </aol-layer-vector>
      <aol-layer-vector>
        <aol-style>
          @if (showIcon) {
            <aol-style-icon
              [src]="iconSrc"
              [anchor]="anchor"
              [opacity]="opacity"
              [rotation]="rotation"
              [scale]="scale"
              [rotateWithView]="rotateWithView"
              crossOrigin="anonymous"
            />
          }
        </aol-style>
      </aol-layer-vector>
      <aol-layer-vector>
        @if (showStyles) {
          <aol-styles><aol-style [zIndex]="1" /><aol-style [zIndex]="2" /></aol-styles>
        }
      </aol-layer-vector>
    </aol-map>
  `,
})
class StyleHostComponent {
  @Input() showStyle = true;
  @Input() showStyles = true;
  @Input() showPaint = true;
  @Input() showCircle = true;
  @Input() showText = true;
  @Input() showIcon = true;
  @Input() zIndex = 3;
  @Input() color = '#123456';
  @Input() textColor = '#123456';
  @Input() radius = 7;
  @Input() width = 2;
  @Input() dash = [2, 3];
  @Input() label = 'Initial';
  @Input() rotateWithView = false;
  @Input() iconSrc = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"/>';
  @Input() anchor: [number, number] = [0.5, 1];
  @Input() opacity = 1;
  @Input() rotation = 0;
  @Input() scale = 1;
}

describe('Declarative style lifecycle', () => {
  let fixture: ComponentFixture<StyleHostComponent>;
  let layers: LayerVectorComponent[];
  let style: Style;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [StyleHostComponent] });
    fixture = TestBed.createComponent(StyleHostComponent);
    fixture.detectChanges();
    layers = fixture.debugElement.queryAll(By.directive(LayerVectorComponent)).map((node) => node.componentInstance);
    style = layers[0].instance.getStyle() as Style;
  });
  afterEach(() => fixture.destroy());

  it('attaches paint to the closest style, circle and text without overwriting sibling paint', () => {
    const circle = style.getImage() as Circle;
    const text = style.getText();
    expect(style.getFill().getColor()).toBe('#123456');
    expect(circle.getFill().getColor()).toBe('#123456');
    expect(text.getFill().getColor()).toBe('#123456');
    expect(style.getFill()).not.toBe(circle.getFill());
    expect(text.getFill()).not.toBe(circle.getFill());
    expect(style.getStroke().getWidth()).toBe(2);
    expect(circle.getStroke().getWidth()).toBe(2);
    expect(text.getStroke().getWidth()).toBe(2);
    expect(text.getTextBaseline()).toBe('top');
  });

  it('updates style, circle, text and paint in place and invalidates the rendered layer', () => {
    const circle = style.getImage() as Circle;
    const text = style.getText();
    const fill = text.getFill();
    const changed = spyOn(layers[0].instance, 'changed').and.callThrough();
    fixture.componentRef.setInput('zIndex', 8);
    fixture.componentRef.setInput('radius', 12);
    fixture.componentRef.setInput('color', '#abcdef');
    fixture.componentRef.setInput('textColor', '#abcdef');
    fixture.componentRef.setInput('width', 4);
    fixture.componentRef.setInput('dash', [5, 6]);
    fixture.componentRef.setInput('label', 'Updated');
    fixture.componentRef.setInput('rotateWithView', true);
    fixture.detectChanges();
    expect(layers[0].instance.getStyle()).toBe(style);
    expect(style.getZIndex()).toBe(8);
    expect(style.getImage()).toBe(circle);
    expect(circle.getRadius()).toBe(12);
    expect(style.getText()).toBe(text);
    expect(text.getText()).toBe('Updated');
    expect(text.getRotateWithView()).toBeTrue();
    expect(text.getFill()).toBe(fill);
    expect(fill.getColor()).toBe('#abcdef');
    expect(style.getStroke().getWidth()).toBe(4);
    expect(style.getStroke().getLineDash()).toEqual([5, 6]);
    expect(changed).toHaveBeenCalled();
  });

  it('invalidates the layer when only a nested text fill or circle radius changes', () => {
    const revision = layers[0].instance.getRevision();
    fixture.componentRef.setInput('textColor', '#fedcba');
    fixture.detectChanges();
    expect(style.getText().getFill().getColor()).toBe('#fedcba');
    expect(layers[0].instance.getRevision()).toBeGreaterThan(revision);
    const circleRevision = layers[0].instance.getRevision();
    fixture.componentRef.setInput('radius', 15);
    fixture.detectChanges();
    expect(layers[0].instance.getRevision()).toBeGreaterThan(circleRevision);
  });

  it('removes and reattaches conditional fill and stroke children at every nesting level', () => {
    const circle = style.getImage() as Circle;
    const text = style.getText();
    fixture.componentRef.setInput('showPaint', false);
    fixture.detectChanges();
    for (const host of [style, circle, text]) {
      expect(host.getFill()).toBeNull();
      expect(host.getStroke()).toBeNull();
    }
    fixture.componentRef.setInput('showPaint', true);
    fixture.detectChanges();
    for (const host of [style, circle, text]) {
      expect(host.getFill().getColor()).toBe('#123456');
      expect(host.getStroke().getWidth()).toBe(2);
    }
  });

  it('preserves externally replaced paint when old child components are destroyed', () => {
    const fill = new Fill({ color: 'red' });
    const stroke = new Stroke({ color: 'blue' });
    style.setFill(fill);
    style.setStroke(stroke);
    fixture.componentRef.setInput('showPaint', false);
    fixture.detectChanges();
    expect(style.getFill()).toBe(fill);
    expect(style.getStroke()).toBe(stroke);
  });

  it('detaches conditional image and text styles and keeps replacement owners intact', () => {
    fixture.componentRef.setInput('showCircle', false);
    fixture.componentRef.setInput('showText', false);
    fixture.detectChanges();
    expect(style.getImage()).toBeNull();
    expect(style.getText()).toBeNull();
    fixture.componentRef.setInput('showCircle', true);
    fixture.componentRef.setInput('showText', true);
    fixture.detectChanges();
    const image = new Circle({ radius: 2 });
    const text = new Text({ text: 'External' });
    style.setImage(image);
    style.setText(text);
    fixture.componentRef.setInput('showCircle', false);
    fixture.componentRef.setInput('showText', false);
    fixture.detectChanges();
    expect(style.getImage()).toBe(image);
    expect(style.getText()).toBe(text);
  });

  it('updates icon properties in place, replaces changed URLs, and clears removed icons', () => {
    const component = fixture.debugElement.query(By.directive(StyleIconComponent))
      .componentInstance as StyleIconComponent;
    const icon = component.instance;
    fixture.componentRef.setInput('opacity', 0.4);
    fixture.componentRef.setInput('rotation', 0.5);
    fixture.componentRef.setInput('scale', 2);
    fixture.componentRef.setInput('rotateWithView', true);
    fixture.detectChanges();
    expect(component.instance).toBe(icon);
    expect(icon.getOpacity()).toBe(0.4);
    expect(icon.getRotation()).toBe(0.5);
    expect(icon.getScale()).toBe(2);
    expect(icon.getRotateWithView()).toBeTrue();
    fixture.componentRef.setInput(
      'iconSrc',
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"/>'
    );
    fixture.detectChanges();
    expect(component.instance).not.toBe(icon);
    expect(component.instance.getOpacity()).toBe(0.4);
    expect((layers[1].instance.getStyle() as Style).getImage()).toBe(component.instance);
    fixture.componentRef.setInput('showIcon', false);
    fixture.detectChanges();
    expect((layers[1].instance.getStyle() as Style).getImage()).toBeNull();
  });

  it('removes a single style and a style collection without retaining stale render styles', () => {
    fixture.componentRef.setInput('showStyle', false);
    fixture.componentRef.setInput('showStyles', false);
    fixture.detectChanges();
    expect(layers[0].instance.getStyle()).not.toBe(style);
    expect(Array.isArray(layers[2].instance.getStyle())).toBeFalse();
  });

  it('does not clear a replacement layer style when the former owner is destroyed', () => {
    const replacement = new Style({ zIndex: 10 });
    layers[0].instance.setStyle(replacement);
    layers[2].instance.setStyle(replacement);
    fixture.componentRef.setInput('showStyle', false);
    fixture.componentRef.setInput('showStyles', false);
    fixture.detectChanges();
    expect(layers[0].instance.getStyle()).toBe(replacement);
    expect(layers[2].instance.getStyle()).toBe(replacement);
  });
});
