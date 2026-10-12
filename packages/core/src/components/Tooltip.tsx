import * as React from 'react';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';

export interface TooltipContentProps extends BaseTooltip.Positioner.Props {
  popupProps?: BaseTooltip.Popup.Props;
}

const Content = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  function TooltipContent({ className, children, popupProps, ...props }, ref) {
    return (
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner
          ref={ref}
          sideOffset={6}
          {...props}
          className={cx<BaseTooltip.Positioner.State>('monet-Tooltip-positioner', className)}
        >
          <BaseTooltip.Popup
            {...popupProps}
            className={cx<BaseTooltip.Popup.State>('monet-Tooltip-popup', popupProps?.className)}
          >
            {children}
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    );
  },
);

export const Tooltip = {
  /** Share one Provider high in the tree so hovering between tooltips is instant. */
  Provider: BaseTooltip.Provider,
  Root: BaseTooltip.Root,
  Trigger: skin(BaseTooltip.Trigger, 'monet-Tooltip-trigger'),
  Content,
  Arrow: skin(BaseTooltip.Arrow, 'monet-Tooltip-arrow'),
  Portal: BaseTooltip.Portal,
  Positioner: skin(BaseTooltip.Positioner, 'monet-Tooltip-positioner'),
  Popup: skin(BaseTooltip.Popup, 'monet-Tooltip-popup'),
  Viewport: skin(BaseTooltip.Viewport, 'monet-Tooltip-viewport'),
  createHandle: BaseTooltip.createHandle,
};
