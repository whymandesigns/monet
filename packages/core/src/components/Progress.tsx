import { Progress as BaseProgress } from '@base-ui/react/progress';
import { Meter as BaseMeter } from '@base-ui/react/meter';
import { skin } from '../utils/skin';

export const Progress = {
  Root: skin(BaseProgress.Root, 'monet-Progress'),
  Label: skin(BaseProgress.Label, 'monet-Progress-label'),
  Track: skin(BaseProgress.Track, 'monet-Progress-track'),
  Indicator: skin(BaseProgress.Indicator, 'monet-Progress-indicator'),
  Value: skin(BaseProgress.Value, 'monet-Progress-value'),
};

/** Same anatomy as Progress, for a static measurement rather than a task. */
export const Meter = {
  Root: skin(BaseMeter.Root, 'monet-Meter'),
  Label: skin(BaseMeter.Label, 'monet-Meter-label'),
  Track: skin(BaseMeter.Track, 'monet-Meter-track'),
  Indicator: skin(BaseMeter.Indicator, 'monet-Meter-indicator'),
  Value: skin(BaseMeter.Value, 'monet-Meter-value'),
};
