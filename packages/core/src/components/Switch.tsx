import * as React from 'react';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { cx } from '../utils/cx';
import type { Size, Tone } from '../utils/types';

export interface SwitchProps extends BaseSwitch.Root.Props {
  /** Colour role. Themes key off `[data-tone]`. @default 'neutral' */
  tone?: Tone;
  /** @default 'md' */
  size?: Size;
}

/** Renders Root and Thumb together; a switch is meaningless without a thumb. */
export const Switch = React.forwardRef<HTMLElement, SwitchProps>(
  function Switch({ tone = 'neutral', size = 'md', className, ...props }, ref) {
    return (
      <BaseSwitch.Root
        ref={ref}
        data-tone={tone}
        data-size={size}
        {...props}
        className={cx<BaseSwitch.Root.State>('monet-Switch', className)}
      >
        <BaseSwitch.Thumb className="monet-Switch-thumb" />
      </BaseSwitch.Root>
    );
  },
);

export const SwitchRoot = BaseSwitch.Root;
export const SwitchThumb = BaseSwitch.Thumb;
