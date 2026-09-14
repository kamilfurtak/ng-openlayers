import { FeatureLike } from 'ol/Feature.js';
import FeatureFormat from 'ol/format/Feature.js';

export class FormatComponent {
  public instance: FeatureFormat<FeatureLike>;
  public componentType = 'format';
}
