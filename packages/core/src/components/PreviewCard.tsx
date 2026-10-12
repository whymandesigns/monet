import * as React from 'react';
import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';

export interface PreviewCardContentProps extends BasePreviewCard.Positioner.Props {
  popupProps?: BasePreviewCard.Popup.Props;
}

const Content = React.forwardRef<HTMLDivElement, PreviewCardContentProps>(
  function PreviewCardContent({ className, children, popupProps, ...props }, ref) {
    return (
      <BasePreviewCard.Portal>
        <BasePreviewCard.Positioner
          ref={ref}
          sideOffset={8}
          {...props}
          className={cx<BasePreviewCard.Positioner.State>(
            'monet-PreviewCard-positioner',
            className,
          )}
        >
          <BasePreviewCard.Popup
            {...popupProps}
            className={cx<BasePreviewCard.Popup.State>(
              'monet-PreviewCard-popup',
              popupProps?.className,
            )}
          >
            {children}
          </BasePreviewCard.Popup>
        </BasePreviewCard.Positioner>
      </BasePreviewCard.Portal>
    );
  },
);

export const PreviewCard = {
  Root: BasePreviewCard.Root,
  Trigger: skin(BasePreviewCard.Trigger, 'monet-PreviewCard-trigger'),
  Content,
  Arrow: skin(BasePreviewCard.Arrow, 'monet-PreviewCard-arrow'),
  Portal: BasePreviewCard.Portal,
  Backdrop: skin(BasePreviewCard.Backdrop, 'monet-PreviewCard-backdrop'),
  Positioner: skin(BasePreviewCard.Positioner, 'monet-PreviewCard-positioner'),
  Popup: skin(BasePreviewCard.Popup, 'monet-PreviewCard-popup'),
  Viewport: skin(BasePreviewCard.Viewport, 'monet-PreviewCard-viewport'),
  createHandle: BasePreviewCard.createHandle,
};
