import * as React from 'react';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import type { Size, Tone } from '../utils/types';

export interface RadioProps extends BaseRadio.Root.Props {
  /** @default 'neutral' */
  tone?: Tone;
  /** @default 'md' */
  size?: Size;
}

/** Root and Indicator together; a radio is meaningless without its dot. */
export const Radio = React.forwardRef<HTMLElement, RadioProps>(function Radio(
  { tone = 'neutral', size = 'md', className, ...props },
  ref,
) {
  return (
    <BaseRadio.Root
      ref={ref}
      data-tone={tone}
      data-size={size}
      {...props}
      className={cx<BaseRadio.Root.State>('monet-Radio', className)}
    >
      <BaseRadio.Indicator className="monet-Radio-indicator" />
    </BaseRadio.Root>
  );
});

export const RadioRoot = skin(BaseRadio.Root, 'monet-Radio');
export const RadioIndicator = skin(BaseRadio.Indicator, 'monet-Radio-indicator');
export const RadioGroup = skin(BaseRadioGroup, 'monet-RadioGroup');
