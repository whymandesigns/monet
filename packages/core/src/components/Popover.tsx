import * as React from 'react';
import { Popover as BasePopover } from '@base-ui/react/popover';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import { CloseIcon } from '../icons';

export interface PopoverContentProps extends BasePopover.Positioner.Props {
  /** Props forwarded to the popup inside the positioner. */
  popupProps?: BasePopover.Popup.Props;
}

/** Portal + Positioner + Popup, which carry no meaning apart from each other. */
const Content = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ className, children, popupProps, ...props }, ref) {
    return (
      <BasePopover.Portal>
        <BasePopover.Positioner
          ref={ref}
          sideOffset={8}
          {...props}
          className={cx<BasePopover.Positioner.State>('monet-Popover-positioner', className)}
        >
          <BasePopover.Popup
            {...popupProps}
            className={cx<BasePopover.Popup.State>('monet-Popover-popup', popupProps?.className)}
          >
            {children}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    );
  },
);

const Dismiss = React.forwardRef<HTMLButtonElement, BasePopover.Close.Props>(
  function PopoverDismiss({ className, children, 'aria-label': ariaLabel, ...props }, ref) {
    return (
      <BasePopover.Close
        ref={ref}
        aria-label={ariaLabel ?? 'Close'}
        {...props}
        className={cx<BasePopover.Close.State>('monet-Popover-dismiss', className)}
      >
        {children ?? <CloseIcon />}
      </BasePopover.Close>
    );
  },
);

export const Popover = {
  /** Renders no element of its own; passed straight through. */
  Root: BasePopover.Root,
  Trigger: skin(BasePopover.Trigger, 'monet-Popover-trigger'),
  Content,
  Title: skin(BasePopover.Title, 'monet-Popover-title'),
  Description: skin(BasePopover.Description, 'monet-Popover-description'),
  Close: skin(BasePopover.Close, 'monet-Popover-close'),
  Dismiss,
  Arrow: skin(BasePopover.Arrow, 'monet-Popover-arrow'),
  /** Unwrapped primitives for layouts the sugar above doesn't cover. */
  Portal: BasePopover.Portal,
  Backdrop: skin(BasePopover.Backdrop, 'monet-Popover-backdrop'),
  Positioner: skin(BasePopover.Positioner, 'monet-Popover-positioner'),
  Popup: skin(BasePopover.Popup, 'monet-Popover-popup'),
  Viewport: skin(BasePopover.Viewport, 'monet-Popover-viewport'),
  createHandle: BasePopover.createHandle,
};
