import * as React from 'react';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import { CheckIcon, IndeterminateIcon } from '../icons';
import type { Size, Tone } from '../utils/types';

export interface CheckboxProps extends BaseCheckbox.Root.Props {
  /** Colour role. Themes key off `[data-tone]`. @default 'neutral' */
  tone?: Tone;
  /** @default 'md' */
  size?: Size;
  /** Replaces the default indicator glyph. */
  children?: React.ReactNode;
}

/**
 * Renders Root and Indicator together, since a checkbox is never useful
 * without its indicator. Pass `children` to supply your own glyph, or compose
 * `CheckboxRoot` / `CheckboxIndicator` directly for full control.
 */
export const Checkbox = React.forwardRef<HTMLElement, CheckboxProps>(
  function Checkbox({ tone = 'neutral', size = 'md', className, children, ...props }, ref) {
    return (
      <BaseCheckbox.Root
        ref={ref}
        data-tone={tone}
        data-size={size}
        {...props}
        className={cx<BaseCheckbox.Root.State>('monet-Checkbox', className)}
      >
        <BaseCheckbox.Indicator
          className="monet-Checkbox-indicator"
          render={(indicatorProps, state) => (
            <span {...indicatorProps}>
              {children ??
                (state.indeterminate ? <IndeterminateIcon /> : <CheckIcon />)}
            </span>
          )}
        />
      </BaseCheckbox.Root>
    );
  },
);

export const CheckboxRoot = skin(BaseCheckbox.Root, 'monet-Checkbox');
export const CheckboxIndicator = skin(BaseCheckbox.Indicator, 'monet-Checkbox-indicator');

export const CheckboxGroup = skin(BaseCheckboxGroup, 'monet-CheckboxGroup');
