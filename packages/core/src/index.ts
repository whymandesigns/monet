/*
 * Every Base UI component, wrapped. Components that render a single element are
 * exported directly; the rest are namespace objects matching Base UI's anatomy.
 *
 * Two conventions apply throughout:
 *
 *   `Content`   assembles the portal/positioning chain that has no meaning
 *               apart from the popup it wraps. Components where Base UI already
 *               exports a part called `Content` (Drawer, NavigationMenu, Toast)
 *               keep the raw anatomy instead.
 *   `Dismiss`   the × in a popup's corner, as distinct from `Close`, which is
 *               a dismissing action positioned by normal flow.
 */

export { Accordion, Collapsible } from './components/Collapsible';
export { AlertDialog } from './components/AlertDialog';
export type { AlertDialogContentProps } from './components/AlertDialog';
export { Avatar } from './components/Avatar';
export type { AvatarRootProps } from './components/Avatar';
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';
export { Checkbox, CheckboxGroup, CheckboxRoot, CheckboxIndicator } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';
export { Autocomplete, Combobox } from './components/Combobox';
export type { ComboboxContentProps } from './components/Combobox';
export { ContextMenu } from './components/ContextMenu';
export type { ContextMenuContentProps } from './components/ContextMenu';
export { Dialog } from './components/Dialog';
export type { DialogContentProps } from './components/Dialog';
export { Drawer } from './components/Drawer';
export { Field, Fieldset, Form } from './components/Field';
export { Input } from './components/Input';
export type { InputProps } from './components/Input';
export { Menu, Menubar } from './components/Menu';
export type { MenuContentProps } from './components/Menu';
export { NavigationMenu } from './components/NavigationMenu';
export { NumberField, OTPField } from './components/NumberField';
export type { NumberFieldRootProps } from './components/NumberField';
export { Popover } from './components/Popover';
export type { PopoverContentProps } from './components/Popover';
export { PreviewCard } from './components/PreviewCard';
export type { PreviewCardContentProps } from './components/PreviewCard';
export { Meter, Progress } from './components/Progress';
export { Radio, RadioGroup, RadioRoot, RadioIndicator } from './components/Radio';
export type { RadioProps } from './components/Radio';
export { ScrollArea } from './components/ScrollArea';
export { Select } from './components/Select';
export type {
  SelectTriggerProps,
  SelectContentProps,
  SelectItemProps,
} from './components/Select';
export { Separator } from './components/Separator';
export { Slider } from './components/Slider';
export { Switch, SwitchRoot, SwitchThumb } from './components/Switch';
export type { SwitchProps } from './components/Switch';
export { Tabs } from './components/Tabs';
export { Toast } from './components/Toast';
export { Toggle, ToggleGroup } from './components/Toggle';
export type { ToggleProps } from './components/Toggle';
export { Toolbar } from './components/Toolbar';
export { Tooltip } from './components/Tooltip';
export type { TooltipContentProps } from './components/Tooltip';

/* Behavioural providers and composition helpers, re-exported unchanged. */
export { DirectionProvider, useDirection } from '@base-ui/react/direction-provider';
export { CSPProvider } from '@base-ui/react/csp-provider';
export { useRender } from '@base-ui/react/use-render';
export { mergeProps } from '@base-ui/react/merge-props';

export { CheckIcon, ChevronDownIcon, CloseIcon, IndeterminateIcon } from './icons';

export { cx } from './utils/cx';
export type { ClassName } from './utils/cx';
export { skin } from './utils/skin';
export type { Size, Tone, Variant } from './utils/types';
