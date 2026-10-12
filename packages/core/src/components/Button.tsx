import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import { cx } from '../utils/cx';
import type { Size, Tone } from '../utils/types';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonProps extends BaseButton.Props {
  /** Visual weight. Themes key off `[data-variant]`. @default 'solid' */
  variant?: ButtonVariant;
  /** Colour role. Themes key off `[data-tone]`. @default 'neutral' */
  tone?: Tone;
  /** @default 'md' */
  size?: Size;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(function Button(
  { variant = 'solid', tone = 'neutral', size = 'md', className, ...props },
  ref,
) {
  return (
    <BaseButton
      ref={ref}
      data-variant={variant}
      data-tone={tone}
      data-size={size}
      {...props}
      className={cx<BaseButton.State>('monet-Button', className)}
    />
  );
});
