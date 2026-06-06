import { FeatureLike } from 'ol/Feature';
import FeatureFormat from 'ol/format/Feature';

export class FormatComponent {
  public instance: FeatureFormat<FeatureLike>;
  public componentType = 'format';
}
