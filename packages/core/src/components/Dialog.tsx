import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { cx } from '../utils/cx';
import { CloseIcon } from '../icons';

export interface DialogContentProps extends BaseDialog.Popup.Props {
  /** Props forwarded to the backdrop. Pass `null` to omit it. */
  backdropProps?: BaseDialog.Backdrop.Props | null;
  /** Props forwarded to the scrollable viewport that centres the popup. */
  viewportProps?: BaseDialog.Viewport.Props;
}

/** Portal + Backdrop + Viewport + Popup, assembled in the order Base UI expects. */
const Content = React.forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent({ className, backdropProps, viewportProps, ...props }, ref) {
    return (
      <BaseDialog.Portal>
        {backdropProps !== null && (
          <BaseDialog.Backdrop
            {...backdropProps}
            className={cx<BaseDialog.Backdrop.State>(
              'monet-Dialog-backdrop',
              backdropProps?.className,
            )}
          />
        )}
        <BaseDialog.Viewport
          {...viewportProps}
          className={cx<BaseDialog.Viewport.State>(
            'monet-Dialog-viewport',
            viewportProps?.className,
          )}
        >
          <BaseDialog.Popup
            ref={ref}
            {...props}
            className={cx<BaseDialog.Popup.State>('monet-Dialog-popup', className)}
          />
        </BaseDialog.Viewport>
      </BaseDialog.Portal>
    );
  },
);

const Title = React.forwardRef<HTMLHeadingElement, BaseDialog.Title.Props>(
  function DialogTitle({ className, ...props }, ref) {
    return (
      <BaseDialog.Title
        ref={ref}
        {...props}
        className={cx<BaseDialog.Title.State>('monet-Dialog-title', className)}
      />
    );
  },
);

const Description = React.forwardRef<HTMLParagraphElement, BaseDialog.Description.Props>(
  function DialogDescription({ className, ...props }, ref) {
    return (
      <BaseDialog.Description
        ref={ref}
        {...props}
        className={cx<BaseDialog.Description.State>('monet-Dialog-description', className)}
      />
    );
  },
);

/**
 * A dismissing action, normally composed with a Button via `render`. It carries
 * no appearance of its own — whatever it renders supplies that.
 */
const Close = React.forwardRef<HTMLButtonElement, BaseDialog.Close.Props>(
  function DialogClose({ className, ...props }, ref) {
    return (
      <BaseDialog.Close
        ref={ref}
        {...props}
        className={cx<BaseDialog.Close.State>('monet-Dialog-close', className)}
      />
    );
  },
);

/** The × in the popup's corner. Distinct from Close, which is positioned by flow. */
const Dismiss = React.forwardRef<HTMLButtonElement, BaseDialog.Close.Props>(
  function DialogDismiss({ className, children, 'aria-label': ariaLabel, ...props }, ref) {
    return (
      <BaseDialog.Close
        ref={ref}
        aria-label={ariaLabel ?? 'Close'}
        {...props}
        className={cx<BaseDialog.Close.State>('monet-Dialog-dismiss', className)}
      >
        {children ?? <CloseIcon />}
      </BaseDialog.Close>
    );
  },
);

const Trigger = React.forwardRef<HTMLButtonElement, BaseDialog.Trigger.Props>(
  function DialogTrigger({ className, ...props }, ref) {
    return (
      <BaseDialog.Trigger
        ref={ref}
        {...props}
        className={cx<BaseDialog.Trigger.State>('monet-Dialog-trigger', className)}
      />
    );
  },
);

export const Dialog = {
  /** Renders no element of its own; passed straight through. */
  Root: BaseDialog.Root,
  Trigger,
  Content,
  Title,
  Description,
  Close,
  Dismiss,
  /** Unwrapped primitives for layouts the sugar above doesn't cover. */
  Portal: BaseDialog.Portal,
  Backdrop: BaseDialog.Backdrop,
  Viewport: BaseDialog.Viewport,
  Popup: BaseDialog.Popup,
};
