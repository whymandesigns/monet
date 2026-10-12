import * as React from 'react';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';

export interface MenuContentProps extends BaseMenu.Positioner.Props {
  popupProps?: BaseMenu.Popup.Props;
}

const Content = React.forwardRef<HTMLDivElement, MenuContentProps>(function MenuContent(
  { className, children, popupProps, ...props },
  ref,
) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        ref={ref}
        sideOffset={6}
        {...props}
        className={cx<BaseMenu.Positioner.State>('monet-Menu-positioner', className)}
      >
        <BaseMenu.Popup
          {...popupProps}
          className={cx<BaseMenu.Popup.State>('monet-Menu-popup', popupProps?.className)}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
});

export const Menu = {
  Root: BaseMenu.Root,
  Trigger: skin(BaseMenu.Trigger, 'monet-Menu-trigger'),
  Content,
  List: skin(BaseMenu.List, 'monet-Menu-list'),
  Item: skin(BaseMenu.Item, 'monet-Menu-item'),
  LinkItem: skin(BaseMenu.LinkItem, 'monet-Menu-item'),
  CheckboxItem: skin(BaseMenu.CheckboxItem, 'monet-Menu-item'),
  CheckboxItemIndicator: skin(BaseMenu.CheckboxItemIndicator, 'monet-Menu-itemIndicator'),
  RadioGroup: skin(BaseMenu.RadioGroup, 'monet-Menu-radioGroup'),
  RadioItem: skin(BaseMenu.RadioItem, 'monet-Menu-item'),
  RadioItemIndicator: skin(BaseMenu.RadioItemIndicator, 'monet-Menu-itemIndicator'),
  Group: skin(BaseMenu.Group, 'monet-Menu-group'),
  GroupLabel: skin(BaseMenu.GroupLabel, 'monet-Menu-groupLabel'),
  Separator: skin(BaseMenu.Separator, 'monet-Menu-separator'),
  SubmenuRoot: BaseMenu.SubmenuRoot,
  SubmenuTrigger: skin(BaseMenu.SubmenuTrigger, 'monet-Menu-item'),
  Arrow: skin(BaseMenu.Arrow, 'monet-Menu-arrow'),
  /** Searchable menus: wrap in FilterProvider and render Input inside the popup. */
  FilterProvider: BaseMenu.FilterProvider,
  Input: skin(BaseMenu.Input, 'monet-Menu-input'),
  Clear: skin(BaseMenu.Clear, 'monet-Menu-clear'),
  Empty: skin(BaseMenu.Empty, 'monet-Menu-empty'),
  useFilter: BaseMenu.useFilter,
  Portal: BaseMenu.Portal,
  Backdrop: skin(BaseMenu.Backdrop, 'monet-Menu-backdrop'),
  Positioner: skin(BaseMenu.Positioner, 'monet-Menu-positioner'),
  Popup: skin(BaseMenu.Popup, 'monet-Menu-popup'),
  Viewport: skin(BaseMenu.Viewport, 'monet-Menu-viewport'),
  createHandle: BaseMenu.createHandle,
};

/** Groups sibling Menu.Roots into a single menu bar. */
export const Menubar = skin(BaseMenubar, 'monet-Menubar');
