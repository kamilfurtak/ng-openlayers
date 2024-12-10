import { MVT } from 'ol/format';
import { FeatureLike } from 'ol/Feature';

export class FormatComponent {
  public instance: MVT<FeatureLike>;
  public componentType = 'format';
}
