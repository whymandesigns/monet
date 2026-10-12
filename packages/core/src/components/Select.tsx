import * as React from 'react';
import { Select as BaseSelect } from '@base-ui/react/select';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import { CheckIcon, ChevronDownIcon } from '../icons';
import type { Size } from '../utils/types';

export interface SelectTriggerProps extends BaseSelect.Trigger.Props {
  /** @default 'md' */
  size?: Size;
  /** Shown when nothing is selected. */
  placeholder?: React.ReactNode;
}

export interface SelectContentProps extends BaseSelect.Positioner.Props {
  /** Props forwarded to the popup element inside the positioner. */
  popupProps?: BaseSelect.Popup.Props;
}

export interface SelectItemProps extends BaseSelect.Item.Props {}

/**
 * Trigger renders Value and Icon inline — the three are always used together.
 * Reach for the re-exported primitives below when you need to break that up.
 */
const Trigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  function SelectTrigger({ size = 'md', placeholder, className, children, ...props }, ref) {
    return (
      <BaseSelect.Trigger
        ref={ref}
        data-size={size}
        {...props}
        className={cx<BaseSelect.Trigger.State>('monet-Select-trigger', className)}
      >
        <BaseSelect.Value className="monet-Select-value" placeholder={placeholder} />
        <BaseSelect.Icon className="monet-Select-icon">
          {children ?? <ChevronDownIcon />}
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
    );
  },
);

/**
 * Portal + Positioner + Popup: the wrapper chain that has no meaning apart
 * from the popup. Items go inside an explicit `Select.List`, matching Base UI's
 * anatomy and the `Content` of every other popup in the system.
 */
const Content = React.forwardRef<HTMLDivElement, SelectContentProps>(
  function SelectContent({ className, children, popupProps, ...props }, ref) {
    return (
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          ref={ref}
          sideOffset={6}
          {...props}
          className={cx<BaseSelect.Positioner.State>('monet-Select-positioner', className)}
        >
          <BaseSelect.Popup
            {...popupProps}
            className={cx<BaseSelect.Popup.State>('monet-Select-popup', popupProps?.className)}
          >
            {children}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    );
  },
);

const List = skin(BaseSelect.List, 'monet-Select-list');

const Item = React.forwardRef<HTMLElement, SelectItemProps>(function SelectItem(
  { className, children, ...props },
  ref,
) {
  return (
    <BaseSelect.Item
      ref={ref}
      {...props}
      className={cx<BaseSelect.Item.State>('monet-Select-item', className)}
    >
      <BaseSelect.ItemText className="monet-Select-itemText">{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="monet-Select-itemIndicator">
        <CheckIcon />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
});

const Group = React.forwardRef<HTMLDivElement, BaseSelect.Group.Props>(
  function SelectGroup({ className, ...props }, ref) {
    return (
      <BaseSelect.Group
        ref={ref}
        {...props}
        className={cx<BaseSelect.Group.State>('monet-Select-group', className)}
      />
    );
  },
);

const GroupLabel = React.forwardRef<HTMLDivElement, BaseSelect.GroupLabel.Props>(
  function SelectGroupLabel({ className, ...props }, ref) {
    return (
      <BaseSelect.GroupLabel
        ref={ref}
        {...props}
        className={cx<BaseSelect.GroupLabel.State>('monet-Select-groupLabel', className)}
      />
    );
  },
);

export const Select = {
  /** Renders no element of its own; passed straight through. */
  Root: BaseSelect.Root,
  Trigger,
  Content,
  List,
  Item,
  Group,
  GroupLabel,
  /** Unwrapped primitives for layouts the sugar above doesn't cover. */
  Portal: BaseSelect.Portal,
  Positioner: BaseSelect.Positioner,
  Popup: BaseSelect.Popup,
  Value: BaseSelect.Value,
  Icon: BaseSelect.Icon,
  ItemText: BaseSelect.ItemText,
  ItemIndicator: BaseSelect.ItemIndicator,
  Separator: BaseSelect.Separator,
};
