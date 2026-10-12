import * as React from 'react';
import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';

export interface AlertDialogContentProps extends BaseAlertDialog.Popup.Props {
  /** Props forwarded to the backdrop. Pass `null` to omit it. */
  backdropProps?: BaseAlertDialog.Backdrop.Props | null;
  viewportProps?: BaseAlertDialog.Viewport.Props;
}

/**
 * Same anatomy as Dialog, but it cannot be dismissed by clicking away or
 * pressing Escape — the user has to choose one of the actions inside.
 */
const Content = React.forwardRef<HTMLDivElement, AlertDialogContentProps>(
  function AlertDialogContent({ className, backdropProps, viewportProps, ...props }, ref) {
    return (
      <BaseAlertDialog.Portal>
        {backdropProps !== null && (
          <BaseAlertDialog.Backdrop
            {...backdropProps}
            className={cx<BaseAlertDialog.Backdrop.State>(
              'monet-Dialog-backdrop',
              backdropProps?.className,
            )}
          />
        )}
        <BaseAlertDialog.Viewport
          {...viewportProps}
          className={cx<BaseAlertDialog.Viewport.State>(
            'monet-Dialog-viewport',
            viewportProps?.className,
          )}
        >
          <BaseAlertDialog.Popup
            ref={ref}
            {...props}
            className={cx<BaseAlertDialog.Popup.State>('monet-Dialog-popup', className)}
          />
        </BaseAlertDialog.Viewport>
      </BaseAlertDialog.Portal>
    );
  },
);

export const AlertDialog = {
  Root: BaseAlertDialog.Root,
  Trigger: skin(BaseAlertDialog.Trigger, 'monet-Dialog-trigger'),
  Content,
  Title: skin(BaseAlertDialog.Title, 'monet-Dialog-title'),
  Description: skin(BaseAlertDialog.Description, 'monet-Dialog-description'),
  Close: skin(BaseAlertDialog.Close, 'monet-Dialog-close'),
  Portal: BaseAlertDialog.Portal,
  Backdrop: skin(BaseAlertDialog.Backdrop, 'monet-Dialog-backdrop'),
  Viewport: skin(BaseAlertDialog.Viewport, 'monet-Dialog-viewport'),
  Popup: skin(BaseAlertDialog.Popup, 'monet-Dialog-popup'),
  createHandle: BaseAlertDialog.createHandle,
};
