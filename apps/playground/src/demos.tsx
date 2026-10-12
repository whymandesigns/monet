import * as React from 'react';
import {
  Accordion,
  AlertDialog,
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapsible,
  Combobox,
  ContextMenu,
  Dialog,
  Drawer,
  Field,
  Fieldset,
  Form,
  Input,
  Menu,
  Menubar,
  Meter,
  NavigationMenu,
  NumberField,
  OTPField,
  Popover,
  PreviewCard,
  Progress,
  Radio,
  RadioGroup,
  ScrollArea,
  Select,
  Separator,
  Slider,
  Switch,
  Tabs,
  Toast,
  Toggle,
  ToggleGroup,
  Toolbar,
  Tooltip,
  CheckIcon,
  ChevronDownIcon,
} from '@monet/react';
import type { Size, Tone, Variant } from '@monet/react';

const VARIANTS: Variant[] = ['solid', 'outline', 'ghost'];
const TONES: Tone[] = ['neutral', 'accent', 'danger'];
const SIZES: Size[] = ['sm', 'md', 'lg'];

const FRUITS = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Cherry', 'Fig', 'Quince'];

export interface Section {
  id: string;
  title: string;
  note?: string;
  render: () => React.ReactNode;
}

export const SECTIONS: Section[] = [
  {
    id: 'button',
    title: 'Button',
    note: 'variant × tone, sizes, disabled',
    render: () => (
      <>
        {VARIANTS.map((variant) => (
          <div className="pg-row" key={variant}>
            <span className="pg-label">{variant}</span>
            {TONES.map((tone) => (
              <Button key={tone} variant={variant} tone={tone}>
                {tone}
              </Button>
            ))}
            <Button variant={variant} disabled>
              disabled
            </Button>
          </div>
        ))}
        <div className="pg-row">
          <span className="pg-label">sizes</span>
          {SIZES.map((size) => (
            <Button key={size} size={size} tone="accent">
              {size}
            </Button>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'toggle',
    title: 'Toggle & ToggleGroup',
    note: 'buttons that stay pressed',
    render: () => (
      <div className="pg-row">
        <Toggle aria-label="Bold" defaultPressed>
          B
        </Toggle>
        <Toggle aria-label="Italic">I</Toggle>
        <Toggle aria-label="Underline" variant="outline">
          U
        </Toggle>
        <Toggle disabled>off</Toggle>
        <ToggleGroup defaultValue={['left']}>
          <Toggle value="left">Left</Toggle>
          <Toggle value="center">Center</Toggle>
          <Toggle value="right">Right</Toggle>
        </ToggleGroup>
      </div>
    ),
  },
  {
    id: 'form',
    title: 'Form, Fieldset & Field',
    note: 'labels, descriptions and validation wired by Base UI',
    render: () => (
      <Form
        className="pg-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Fieldset.Root>
          <Fieldset.Legend>Account</Fieldset.Legend>

          <Field.Root name="email" validationMode="onBlur">
            <Field.Label>Email</Field.Label>
            <Input placeholder="you@example.com" required type="email" />
            <Field.Description>We only use this to send receipts.</Field.Description>
            <Field.Error />
          </Field.Root>

          <Field.Root>
            <Field.Label>
              <Checkbox name="terms" />
              Accept the terms
            </Field.Label>
          </Field.Root>
        </Fieldset.Root>

        <div className="pg-row">
          <Button type="submit" tone="accent">
            Submit
          </Button>
          <Button type="reset" variant="ghost">
            Reset
          </Button>
        </div>
      </Form>
    ),
  },
  {
    id: 'checkbox',
    title: 'Checkbox, Radio & Switch',
    note: 'sizes, tones and states',
    render: () => (
      <>
        <div className="pg-row">
          <span className="pg-label">checkbox</span>
          {SIZES.map((size) => (
            <Checkbox key={size} size={size} defaultChecked />
          ))}
          <Checkbox indeterminate />
          <Checkbox disabled />
          <Checkbox tone="accent" defaultChecked />
        </div>
        <div className="pg-row">
          <span className="pg-label">radio</span>
          <RadioGroup defaultValue="b">
            <div className="pg-row">
              <Radio value="a" />
              <Radio value="b" />
              <Radio value="c" tone="accent" />
              <Radio value="d" disabled />
            </div>
          </RadioGroup>
        </div>
        <div className="pg-row">
          <span className="pg-label">switch</span>
          {SIZES.map((size) => (
            <Switch key={size} size={size} defaultChecked />
          ))}
          <Switch />
          <Switch disabled defaultChecked />
          <Switch tone="accent" defaultChecked />
        </div>
        <div className="pg-row">
          <span className="pg-label">group</span>
          <CheckboxGroup defaultValue={['a']}>
            <label className="pg-inline">
              <Checkbox name="a" value="a" /> Oils
            </label>
            <label className="pg-inline">
              <Checkbox name="b" value="b" /> Watercolour
            </label>
          </CheckboxGroup>
        </div>
      </>
    ),
  },
  {
    id: 'input',
    title: 'Input, NumberField & OTPField',
    render: () => (
      <>
        <div className="pg-row">
          {SIZES.map((size) => (
            <div className="pg-field" key={size}>
              <Input size={size} placeholder={size} />
            </div>
          ))}
          <div className="pg-field">
            <Input placeholder="disabled" disabled />
          </div>
        </div>
        <div className="pg-row">
          <NumberField.Root defaultValue={3} min={0} max={10}>
            <NumberField.ScrubArea>
              <span className="pg-muted">Drag me</span>
              <NumberField.ScrubAreaCursor />
            </NumberField.ScrubArea>
            <NumberField.Group>
              <NumberField.Decrement>−</NumberField.Decrement>
              <NumberField.Input />
              <NumberField.Increment>+</NumberField.Increment>
            </NumberField.Group>
          </NumberField.Root>

          <OTPField.Root defaultValue="12" length={5}>
            {Array.from({ length: 5 }, (_, index) => (
              <OTPField.Input
                key={index}
                aria-label={index === 0 ? 'Verification code' : `Character ${index + 1} of 5`}
              />
            ))}
          </OTPField.Root>
        </div>
      </>
    ),
  },
  {
    id: 'select',
    title: 'Select',
    note: 'portalled popup with enter/exit transitions',
    render: () => (
      <div className="pg-row">
        <Select.Root defaultValue="oils">
          <Select.Trigger placeholder="Pick a medium" />
          <Select.Content>
            <Select.List>
              <Select.Group>
                <Select.GroupLabel>Wet</Select.GroupLabel>
                <Select.Item value="oils">Oils</Select.Item>
                <Select.Item value="watercolour">Watercolour</Select.Item>
                <Select.Item value="gouache">Gouache</Select.Item>
              </Select.Group>
              <Select.Group>
                <Select.GroupLabel>Dry</Select.GroupLabel>
                <Select.Item value="pastel">Pastel</Select.Item>
                <Select.Item value="charcoal" disabled>
                  Charcoal (out of stock)
                </Select.Item>
              </Select.Group>
            </Select.List>
          </Select.Content>
        </Select.Root>

        <Select.Root>
          <Select.Trigger size="sm" placeholder="Small" />
          <Select.Content>
            <Select.List>
              <Select.Item value="a">Option A</Select.Item>
              <Select.Item value="b">Option B</Select.Item>
            </Select.List>
          </Select.Content>
        </Select.Root>
      </div>
    ),
  },
  {
    id: 'combobox',
    title: 'Combobox & Autocomplete',
    note: 'filtered lists; Combobox commits a value, Autocomplete suggests one',
    render: () => (
      <div className="pg-row">
        <div className="pg-field">
        <Combobox.Root items={FRUITS}>
          <Combobox.InputGroup>
            <Combobox.Input placeholder="Choose a fruit" />
            <Combobox.Clear />
            <Combobox.Icon />
          </Combobox.InputGroup>
          <Combobox.Content>
            <Combobox.Empty>No fruit found.</Combobox.Empty>
            <Combobox.List>
              {(item: string) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        </div>

        <div className="pg-field">
        <Autocomplete.Root items={FRUITS}>
          <Autocomplete.InputGroup>
            <Autocomplete.Input placeholder="Type anything" />
          </Autocomplete.InputGroup>
          <Autocomplete.Portal>
            <Autocomplete.Positioner sideOffset={6}>
              <Autocomplete.Popup>
                <Autocomplete.Empty>No suggestions.</Autocomplete.Empty>
                <Autocomplete.List>
                  {(item: string) => (
                    <Autocomplete.Item key={item} value={item}>
                      {item}
                    </Autocomplete.Item>
                  )}
                </Autocomplete.List>
              </Autocomplete.Popup>
            </Autocomplete.Positioner>
          </Autocomplete.Portal>
        </Autocomplete.Root>
        </div>
      </div>
    ),
  },
  {
    id: 'menu',
    title: 'Menu, Menubar & ContextMenu',
    render: () => (
      <>
        <div className="pg-row">
          <Menu.Root>
            <Menu.Trigger>
              Actions <ChevronDownIcon />
            </Menu.Trigger>
            <Menu.Content>
              <Menu.List>
                <Menu.Item>Duplicate</Menu.Item>
                <Menu.Item>Export…</Menu.Item>
                <Menu.Separator />
                <Menu.Group>
                  <Menu.GroupLabel>Danger</Menu.GroupLabel>
                  <Menu.Item>Delete</Menu.Item>
                </Menu.Group>
                <Menu.Separator />
                <Menu.CheckboxItem defaultChecked>
                  <Menu.CheckboxItemIndicator>
                    <CheckIcon />
                  </Menu.CheckboxItemIndicator>
                  Show grid
                </Menu.CheckboxItem>
                <Menu.SubmenuRoot>
                  <Menu.SubmenuTrigger>More…</Menu.SubmenuTrigger>
                  <Menu.Content>
                    <Menu.List>
                      <Menu.Item>Nested one</Menu.Item>
                      <Menu.Item>Nested two</Menu.Item>
                    </Menu.List>
                  </Menu.Content>
                </Menu.SubmenuRoot>
              </Menu.List>
            </Menu.Content>
          </Menu.Root>

          <Menubar>
            {['File', 'Edit', 'View'].map((label) => (
              <Menu.Root key={label}>
                <Menu.Trigger>{label}</Menu.Trigger>
                <Menu.Content>
                  <Menu.List>
                    <Menu.Item>{label} one</Menu.Item>
                    <Menu.Item>{label} two</Menu.Item>
                  </Menu.List>
                </Menu.Content>
              </Menu.Root>
            ))}
          </Menubar>
        </div>

        <ContextMenu.Root>
          <ContextMenu.Trigger className="pg-dropzone">
            Right-click anywhere in this box
          </ContextMenu.Trigger>
          <ContextMenu.Content>
            <ContextMenu.Item>Cut</ContextMenu.Item>
            <ContextMenu.Item>Copy</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Paste</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </>
    ),
  },
  {
    id: 'navigation-menu',
    title: 'NavigationMenu',
    note: 'the popup resizes between items using --popup-width/height',
    render: () => (
      <NavigationMenu.Root>
        <NavigationMenu.List>
          {[
            { label: 'Product', links: ['Overview', 'Pricing', 'Changelog'] },
            { label: 'Company', links: ['About', 'Careers'] },
          ].map((item) => (
            <NavigationMenu.Item key={item.label}>
              <NavigationMenu.Trigger>
                {item.label}
                <NavigationMenu.Icon>
                  <ChevronDownIcon />
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content>
                {item.links.map((link) => (
                  <NavigationMenu.Link key={link} href="#">
                    {link}
                  </NavigationMenu.Link>
                ))}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>

        <NavigationMenu.Portal>
          <NavigationMenu.Positioner sideOffset={8}>
            <NavigationMenu.Popup>
              <NavigationMenu.Viewport />
            </NavigationMenu.Popup>
          </NavigationMenu.Positioner>
        </NavigationMenu.Portal>
      </NavigationMenu.Root>
    ),
  },
  {
    id: 'dialog',
    title: 'Dialog, AlertDialog & Drawer',
    note: 'backdrop, viewport and focus management',
    render: () => (
      <div className="pg-row">
        <Dialog.Root>
          <Dialog.Trigger render={<Button variant="outline">Dialog</Button>} />
          <Dialog.Content>
            <Dialog.Title>Discard changes?</Dialog.Title>
            <Dialog.Description>
              This painting has unsaved changes. Discarding them cannot be undone.
            </Dialog.Description>
            <Dialog.Dismiss />
            <div className="pg-row pg-row--end">
              <Dialog.Close render={<Button variant="ghost">Cancel</Button>} />
              <Dialog.Close render={<Button tone="danger">Discard</Button>} />
            </div>
          </Dialog.Content>
        </Dialog.Root>

        <AlertDialog.Root>
          <AlertDialog.Trigger render={<Button variant="outline">Alert</Button>} />
          <AlertDialog.Content>
            <AlertDialog.Title>Delete this gallery?</AlertDialog.Title>
            <AlertDialog.Description>
              Every painting in it will be removed. There is no undo, and clicking
              away will not dismiss this.
            </AlertDialog.Description>
            <div className="pg-row pg-row--end">
              <AlertDialog.Close render={<Button variant="ghost">Keep it</Button>} />
              <AlertDialog.Close render={<Button tone="danger">Delete</Button>} />
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>

        <Drawer.Root>
          <Drawer.Trigger render={<Button variant="outline">Drawer</Button>} />
          <Drawer.Portal>
            <Drawer.Backdrop />
            <Drawer.Viewport>
              <Drawer.Popup>
                <Drawer.Content>
                  <Drawer.Title>Filters</Drawer.Title>
                  <Drawer.Description>
                    Slides in from the edge and can be swiped away.
                  </Drawer.Description>
                  <Drawer.Close render={<Button variant="outline">Done</Button>} />
                </Drawer.Content>
              </Drawer.Popup>
            </Drawer.Viewport>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    ),
  },
  {
    id: 'popover',
    title: 'Popover, Tooltip & PreviewCard',
    render: () => (
      <div className="pg-row">
        <Popover.Root>
          <Popover.Trigger render={<Button variant="outline">Popover</Button>} />
          <Popover.Content>
            <Popover.Title>Palette</Popover.Title>
            <Popover.Description>
              Anchored to its trigger, dismissed by clicking away.
            </Popover.Description>
            <Popover.Dismiss />
          </Popover.Content>
        </Popover.Root>

        <Tooltip.Root>
          <Tooltip.Trigger render={<Button variant="outline">Hover me</Button>} />
          <Tooltip.Content>Inverted, so it reads as an annotation</Tooltip.Content>
        </Tooltip.Root>

        <PreviewCard.Root>
          <PreviewCard.Trigger href="#" className="pg-link">
            @monet
          </PreviewCard.Trigger>
          <PreviewCard.Content>
            <div className="pg-row">
              <Avatar.Root>
                <Avatar.Fallback>MO</Avatar.Fallback>
              </Avatar.Root>
              <div>
                <strong>Monet</strong>
                <div className="pg-muted">Opens on hover, after a delay.</div>
              </div>
            </div>
          </PreviewCard.Content>
        </PreviewCard.Root>
      </div>
    ),
  },
  {
    id: 'tabs',
    title: 'Tabs',
    note: 'the underline slides using --active-tab-left/width',
    render: () => (
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="tokens">Tokens</Tabs.Tab>
          <Tabs.Tab value="themes">Themes</Tabs.Tab>
          <Tabs.Tab value="locked" disabled>
            Locked
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="overview">Structure and behaviour, no CSS.</Tabs.Panel>
        <Tabs.Panel value="tokens">Primitives, semantic roles, per-component vars.</Tabs.Panel>
        <Tabs.Panel value="themes">Values only — never a component selector.</Tabs.Panel>
      </Tabs.Root>
    ),
  },
  {
    id: 'accordion',
    title: 'Accordion & Collapsible',
    note: 'height animated from the variable Base UI publishes',
    render: () => (
      <>
        <Accordion.Root>
          {['What is this?', 'How do themes work?'].map((title, index) => (
            <Accordion.Item key={title} value={index}>
              <Accordion.Header>
                <Accordion.Trigger>
                  {title}
                  <ChevronDownIcon />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>
                <div className="pg-panel">
                  A design system split so behaviour and appearance never share a file.
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <Collapsible.Root>
          <Collapsible.Trigger>
            Show details <ChevronDownIcon />
          </Collapsible.Trigger>
          <Collapsible.Panel>
            <div className="pg-panel">One panel, no grouping.</div>
          </Collapsible.Panel>
        </Collapsible.Root>
      </>
    ),
  },
  {
    id: 'progress',
    title: 'Progress, Meter & Slider',
    render: () => (
      <>
        <Progress.Root value={62} className="pg-narrow">
          <Progress.Label>Uploading</Progress.Label>
          <Progress.Value />
          <Progress.Track>
            <Progress.Indicator />
          </Progress.Track>
        </Progress.Root>

        <Progress.Root value={null} className="pg-narrow">
          <Progress.Label>Indeterminate</Progress.Label>
          <Progress.Track>
            <Progress.Indicator />
          </Progress.Track>
        </Progress.Root>

        <Meter.Root value={38} className="pg-narrow">
          <Meter.Label>Disk used</Meter.Label>
          <Meter.Value />
          <Meter.Track>
            <Meter.Indicator />
          </Meter.Track>
        </Meter.Root>

        <Slider.Root defaultValue={40} className="pg-narrow">
          <Slider.Label>Opacity</Slider.Label>
          <Slider.Value />
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>

        <Slider.Root defaultValue={[20, 70]} className="pg-narrow">
          <Slider.Label>Range</Slider.Label>
          <Slider.Value />
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </>
    ),
  },
  {
    id: 'avatar',
    title: 'Avatar, ScrollArea & Toolbar',
    render: () => (
      <>
        <div className="pg-row">
          {SIZES.map((size) => (
            <Avatar.Root key={size} size={size}>
              <Avatar.Fallback>MO</Avatar.Fallback>
            </Avatar.Root>
          ))}
          <Avatar.Root>
            <Avatar.Image src="https://picsum.photos/seed/monet/80" alt="" />
            <Avatar.Fallback>MO</Avatar.Fallback>
          </Avatar.Root>
        </div>

        <ScrollArea.Root className="pg-scroll">
          <ScrollArea.Viewport>
            <ScrollArea.Content>
              {FRUITS.concat(FRUITS).map((fruit, index) => (
                <div key={`${fruit}-${index}`} className="pg-scroll-row">
                  {fruit}
                </div>
              ))}
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar>
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>

        <Toolbar.Root>
          <Toolbar.Group>
            <Toolbar.Button render={<Toggle aria-label="Bold">B</Toggle>} />
            <Toolbar.Button render={<Toggle aria-label="Italic">I</Toggle>} />
          </Toolbar.Group>
          <Toolbar.Separator />
          <Toolbar.Input render={<Input size="sm" placeholder="Search" />} />
          <Toolbar.Separator />
          <Toolbar.Link href="#">Help</Toolbar.Link>
        </Toolbar.Root>
      </>
    ),
  },
  {
    id: 'toast',
    title: 'Toast',
    note: 'stacking driven entirely by the CSS variables Base UI publishes',
    render: () => <ToastDemo />,
  },
  {
    id: 'separator',
    title: 'Separator',
    render: () => (
      <>
        <div className="pg-row">
          <span>Home</span>
          <Separator orientation="vertical" />
          <span>Gallery</span>
          <Separator orientation="vertical" />
          <span>About</span>
        </div>
        <Separator />
      </>
    ),
  },
];

function ToastDemo() {
  const manager = Toast.useToastManager();
  const count = React.useRef(0);

  return (
    <div className="pg-row">
      <Button
        variant="outline"
        onClick={() => {
          count.current += 1;
          manager.add({
            title: `Saved draft ${count.current}`,
            description: 'Add a few and hover the stack to fan it out.',
          });
        }}
      >
        Add a toast
      </Button>
    </div>
  );
}

/** Rendered once near the root, beneath Toast.Provider. */
export function ToastViewport() {
  const { toasts } = Toast.useToastManager();

  return (
    <Toast.Portal>
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast}>
            <Toast.Content>
              <div className="pg-grow">
                <Toast.Title />
                <Toast.Description />
              </div>
              <Toast.Close aria-label="Dismiss">Close</Toast.Close>
            </Toast.Content>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}
