import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import { ChevronDownIcon, CloseIcon } from '../icons';

export interface ComboboxContentProps extends BaseCombobox.Positioner.Props {
  popupProps?: BaseCombobox.Popup.Props;
}

const Content = React.forwardRef<HTMLDivElement, ComboboxContentProps>(
  function ComboboxContent({ className, children, popupProps, ...props }, ref) {
    return (
      <BaseCombobox.Portal>
        <BaseCombobox.Positioner
          ref={ref}
          sideOffset={6}
          {...props}
          className={cx<BaseCombobox.Positioner.State>('monet-Combobox-positioner', className)}
        >
          <BaseCombobox.Popup
            {...popupProps}
            className={cx<BaseCombobox.Popup.State>('monet-Combobox-popup', popupProps?.className)}
          >
            {children}
          </BaseCombobox.Popup>
        </BaseCombobox.Positioner>
      </BaseCombobox.Portal>
    );
  },
);

const Icon = React.forwardRef<HTMLSpanElement, BaseCombobox.Icon.Props>(function ComboboxIcon(
  { className, children, ...props },
  ref,
) {
  return (
    <BaseCombobox.Icon
      ref={ref}
      {...props}
      className={cx<BaseCombobox.Icon.State>('monet-Combobox-icon', className)}
    >
      {children ?? <ChevronDownIcon />}
    </BaseCombobox.Icon>
  );
});

const Clear = React.forwardRef<HTMLButtonElement, BaseCombobox.Clear.Props>(
  function ComboboxClear({ className, children, 'aria-label': ariaLabel, ...props }, ref) {
    return (
      <BaseCombobox.Clear
        ref={ref}
        aria-label={ariaLabel ?? 'Clear'}
        {...props}
        className={cx<BaseCombobox.Clear.State>('monet-Combobox-clear', className)}
      >
        {children ?? <CloseIcon />}
      </BaseCombobox.Clear>
    );
  },
);

export const Combobox = {
  Root: BaseCombobox.Root,
  Label: skin(BaseCombobox.Label, 'monet-Combobox-label'),
  InputGroup: skin(BaseCombobox.InputGroup, 'monet-Combobox-inputGroup'),
  Input: skin(BaseCombobox.Input, 'monet-Combobox-input'),
  Trigger: skin(BaseCombobox.Trigger, 'monet-Combobox-trigger'),
  Icon,
  Clear,
  Value: skin(BaseCombobox.Value, 'monet-Combobox-value'),
  Chips: skin(BaseCombobox.Chips, 'monet-Combobox-chips'),
  Chip: skin(BaseCombobox.Chip, 'monet-Combobox-chip'),
  ChipRemove: skin(BaseCombobox.ChipRemove, 'monet-Combobox-chipRemove'),
  Content,
  List: skin(BaseCombobox.List, 'monet-Combobox-list'),
  Row: skin(BaseCombobox.Row, 'monet-Combobox-row'),
  Item: skin(BaseCombobox.Item, 'monet-Combobox-item'),
  ItemIndicator: skin(BaseCombobox.ItemIndicator, 'monet-Combobox-itemIndicator'),
  Group: skin(BaseCombobox.Group, 'monet-Combobox-group'),
  GroupLabel: skin(BaseCombobox.GroupLabel, 'monet-Combobox-groupLabel'),
  Separator: skin(BaseCombobox.Separator, 'monet-Combobox-separator'),
  Empty: skin(BaseCombobox.Empty, 'monet-Combobox-empty'),
  Status: skin(BaseCombobox.Status, 'monet-Combobox-status'),
  Collection: BaseCombobox.Collection,
  Portal: BaseCombobox.Portal,
  Backdrop: skin(BaseCombobox.Backdrop, 'monet-Combobox-backdrop'),
  Positioner: skin(BaseCombobox.Positioner, 'monet-Combobox-positioner'),
  Popup: skin(BaseCombobox.Popup, 'monet-Combobox-popup'),
  Arrow: skin(BaseCombobox.Arrow, 'monet-Combobox-arrow'),
  useFilter: BaseCombobox.useFilter,
  createItems: BaseCombobox.createItems,
};

/** Combobox's free-text sibling: suggestions, but any value is allowed. */
export const Autocomplete = {
  Root: BaseAutocomplete.Root,
  InputGroup: skin(BaseAutocomplete.InputGroup, 'monet-Combobox-inputGroup'),
  Input: skin(BaseAutocomplete.Input, 'monet-Combobox-input'),
  Trigger: skin(BaseAutocomplete.Trigger, 'monet-Combobox-trigger'),
  Icon: skin(BaseAutocomplete.Icon, 'monet-Combobox-icon'),
  Clear: skin(BaseAutocomplete.Clear, 'monet-Combobox-clear'),
  Value: skin(BaseAutocomplete.Value, 'monet-Combobox-value'),
  List: skin(BaseAutocomplete.List, 'monet-Combobox-list'),
  Row: skin(BaseAutocomplete.Row, 'monet-Combobox-row'),
  Item: skin(BaseAutocomplete.Item, 'monet-Combobox-item'),
  Group: skin(BaseAutocomplete.Group, 'monet-Combobox-group'),
  GroupLabel: skin(BaseAutocomplete.GroupLabel, 'monet-Combobox-groupLabel'),
  Separator: skin(BaseAutocomplete.Separator, 'monet-Combobox-separator'),
  Empty: skin(BaseAutocomplete.Empty, 'monet-Combobox-empty'),
  Status: skin(BaseAutocomplete.Status, 'monet-Combobox-status'),
  Collection: BaseAutocomplete.Collection,
  Portal: BaseAutocomplete.Portal,
  Backdrop: skin(BaseAutocomplete.Backdrop, 'monet-Combobox-backdrop'),
  Positioner: skin(BaseAutocomplete.Positioner, 'monet-Combobox-positioner'),
  Popup: skin(BaseAutocomplete.Popup, 'monet-Combobox-popup'),
  Arrow: skin(BaseAutocomplete.Arrow, 'monet-Combobox-arrow'),
  useFilter: BaseAutocomplete.useFilter,
};
