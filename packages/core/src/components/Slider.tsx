import { Slider as BaseSlider } from '@base-ui/react/slider';
import { skin } from '../utils/skin';

export const Slider = {
  Root: skin(BaseSlider.Root, 'monet-Slider'),
  Label: skin(BaseSlider.Label, 'monet-Slider-label'),
  Value: skin(BaseSlider.Value, 'monet-Slider-value'),
  Control: skin(BaseSlider.Control, 'monet-Slider-control'),
  Track: skin(BaseSlider.Track, 'monet-Slider-track'),
  Indicator: skin(BaseSlider.Indicator, 'monet-Slider-indicator'),
  Thumb: skin(BaseSlider.Thumb, 'monet-Slider-thumb'),
};
