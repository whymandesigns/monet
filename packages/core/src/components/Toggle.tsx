import * as React from 'react';
import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import type { Size, Tone, Variant } from '../utils/types';

export interface ToggleProps extends BaseToggle.Props {
  /** @default 'ghost' */
  variant?: Variant;
  /** @default 'neutral' */
  tone?: Tone;
  /** @default 'md' */
  size?: Size;
}

/** A button that stays pressed. Themes style it off `[data-pressed]`. */
export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(
  { variant = 'ghost', tone = 'neutral', size = 'md', className, ...props },
  ref,
) {
  return (
    <BaseToggle
      ref={ref}
      data-variant={variant}
      data-tone={tone}
      data-size={size}
      {...props}
      className={cx<BaseToggle.State>('monet-Toggle', className)}
    />
  );
});

export const ToggleGroup = skin(BaseToggleGroup, 'monet-ToggleGroup');
