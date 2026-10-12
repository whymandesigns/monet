import * as React from 'react';
import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';

export interface ContextMenuContentProps extends BaseContextMenu.Positioner.Props {
  popupProps?: BaseContextMenu.Popup.Props;
}

const Content = React.forwardRef<HTMLDivElement, ContextMenuContentProps>(
  function ContextMenuContent({ className, children, popupProps, ...props }, ref) {
    return (
      <BaseContextMenu.Portal>
        <BaseContextMenu.Positioner
          ref={ref}
          {...props}
          className={cx<BaseContextMenu.Positioner.State>('monet-Menu-positioner', className)}
        >
          <BaseContextMenu.Popup
            {...popupProps}
            className={cx<BaseContextMenu.Popup.State>('monet-Menu-popup', popupProps?.className)}
          >
            {children}
          </BaseContextMenu.Popup>
        </BaseContextMenu.Positioner>
      </BaseContextMenu.Portal>
    );
  },
);

/** Shares the Menu skin; only the trigger behaviour differs. */
export const ContextMenu = {
  Root: BaseContextMenu.Root,
  Trigger: skin(BaseContextMenu.Trigger, 'monet-ContextMenu-trigger'),
  Content,
  Item: skin(BaseContextMenu.Item, 'monet-Menu-item'),
  LinkItem: skin(BaseContextMenu.LinkItem, 'monet-Menu-item'),
  CheckboxItem: skin(BaseContextMenu.CheckboxItem, 'monet-Menu-item'),
  CheckboxItemIndicator: skin(
    BaseContextMenu.CheckboxItemIndicator,
    'monet-Menu-itemIndicator',
  ),
  RadioGroup: skin(BaseContextMenu.RadioGroup, 'monet-Menu-radioGroup'),
  RadioItem: skin(BaseContextMenu.RadioItem, 'monet-Menu-item'),
  RadioItemIndicator: skin(BaseContextMenu.RadioItemIndicator, 'monet-Menu-itemIndicator'),
  Group: skin(BaseContextMenu.Group, 'monet-Menu-group'),
  GroupLabel: skin(BaseContextMenu.GroupLabel, 'monet-Menu-groupLabel'),
  Separator: skin(BaseContextMenu.Separator, 'monet-Menu-separator'),
  SubmenuRoot: BaseContextMenu.SubmenuRoot,
  SubmenuTrigger: skin(BaseContextMenu.SubmenuTrigger, 'monet-Menu-item'),
  Arrow: skin(BaseContextMenu.Arrow, 'monet-Menu-arrow'),
  Portal: BaseContextMenu.Portal,
  Backdrop: skin(BaseContextMenu.Backdrop, 'monet-Menu-backdrop'),
  Positioner: skin(BaseContextMenu.Positioner, 'monet-Menu-positioner'),
  Popup: skin(BaseContextMenu.Popup, 'monet-Menu-popup'),
};
