import * as React from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import { cx } from '../utils/cx';
import type { Size } from '../utils/types';

/** `size` is re-purposed as a design-system scale, shadowing the native attribute. */
export interface InputProps extends Omit<BaseInput.Props, 'size'> {
  /** @default 'md' */
  size?: Size;
}

export const Input = React.forwardRef<HTMLElement, InputProps>(function Input(
  { size = 'md', className, ...props },
  ref,
) {
  return (
    <BaseInput
      ref={ref}
      data-size={size}
      {...props}
      className={cx<BaseInput.State>('monet-Input', className)}
    />
  );
});
