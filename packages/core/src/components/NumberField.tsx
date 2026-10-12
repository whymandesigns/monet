import * as React from 'react';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { OTPField as BaseOTPField } from '@base-ui/react/otp-field';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import type { Size } from '../utils/types';

export interface NumberFieldRootProps extends BaseNumberField.Root.Props {
  /** @default 'md' */
  size?: Size;
}

const Root = React.forwardRef<HTMLDivElement, NumberFieldRootProps>(
  function NumberFieldRoot({ size = 'md', className, ...props }, ref) {
    return (
      <BaseNumberField.Root
        ref={ref}
        data-size={size}
        {...props}
        className={cx<BaseNumberField.Root.State>('monet-NumberField', className)}
      />
    );
  },
);

export const NumberField = {
  Root,
  Group: skin(BaseNumberField.Group, 'monet-NumberField-group'),
  Decrement: skin(BaseNumberField.Decrement, 'monet-NumberField-step'),
  Input: skin(BaseNumberField.Input, 'monet-NumberField-input'),
  Increment: skin(BaseNumberField.Increment, 'monet-NumberField-step'),
  /** Drag-to-change region; pair with ScrubAreaCursor for the pointer-lock cursor. */
  ScrubArea: skin(BaseNumberField.ScrubArea, 'monet-NumberField-scrubArea'),
  ScrubAreaCursor: skin(BaseNumberField.ScrubAreaCursor, 'monet-NumberField-scrubAreaCursor'),
};

export const OTPField = {
  Root: skin(BaseOTPField.Root, 'monet-OTPField'),
  Input: skin(BaseOTPField.Input, 'monet-OTPField-input'),
};
