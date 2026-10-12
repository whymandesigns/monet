# monet

A design system built on [Base UI](https://base-ui.com), split so that behaviour
and appearance never share a file.

```
packages/core     @monet/react    React components. Structure and behaviour. No CSS.
packages/themes   @monet/themes   CSS. Token contract, component skin, themes.
apps/playground                   Vite app for looking at the result.
```

## The split

`@monet/react` wraps all 37 Base UI components and adds exactly two things: a
stable class name per part (`monet-Button`, `monet-Select-popup`) and variant
data-attributes (`data-variant`, `data-tone`, `data-size`). It imports no
stylesheet and has no opinion about how anything looks — rendered without
`@monet/themes`, you get raw browser defaults with full keyboard behaviour,
focus management and ARIA.

Most parts are wrapped by `skin()`, which returns the Base UI component's own
type, so props, ref element and generics pass through with nothing to keep in
sync as Base UI changes:

```ts
List: skin(BaseSelect.List, 'monet-Select-list'),
```

Parts that also carry variant attributes get a hand-written wrapper.

`@monet/themes` is the entire visual layer, and ships no JavaScript.

```tsx
import { Button } from '@monet/react';
import '@monet/themes/base.css';
import '@monet/themes/themes/nympheas.css'; // optional; load after base.css

<Button variant="solid" tone="accent" size="md">Save</Button>;
```

```html
<html data-theme="nympheas" data-mode="dark">
```

`data-mode` is optional — without it the system follows `prefers-color-scheme`.
Both attributes work on any element, not just `<html>`, so a subtree can carry
its own theme or mode.

## Three token tiers

1. **Primitives** (`tokens/primitives.css`) — twelve-step colour scales, space,
   radii, type, motion. The scales are *generated* from a hue, a chroma, and a
   shared lightness ramp, so a theme restates a couple of numbers instead of
   hand-picking 36 colours. Steps follow the Radix convention: 1–2 backgrounds,
   3–5 component fills, 6–8 borders, 9–10 solid fills, 11–12 text.

2. **Semantic** (`tokens/semantic.css`) — the vocabulary component CSS is allowed
   to use: `--monet-color-canvas`, `--monet-tone-solid`, `--monet-focus-color`.
   No component rule references a scale step directly.

   The `--monet-tone-*` aliases are the load-bearing idea. Each tone re-points
   one shared set of variables, so components are written once rather than once
   per tone, and `data-tone` cascades to children.

3. **Component** (`components/*.css`) — every visual decision resolves through a
   `--monet-<component>-*` variable, so a single instance can be nudged without
   a new rule:

   ```tsx
   <Button style={{ '--monet-button-radius': '99px' }} />
   ```

Everything ships inside `@layer monet.reset, monet.tokens, monet.components`, so
any unlayered rule in your app overrides it without specificity games.

## Writing a theme

A theme only restates token *values*. It never selects a component.

```css
/* themes/my-theme.css */
[data-theme='my-theme'] {
  --monet-accent-hue: 285;
  --monet-accent-chroma: 0.19;
  --monet-neutral-hue: 285;
  --monet-radius-md: 0.5rem;
}
```

Load it after `base.css`: a theme and the generated scales land on the same
element at equal specificity, so source order decides.

## Adding or changing a component

1. Wrap the Base UI parts in `packages/core/src/components/` — `skin()` for a
   plain part, a `forwardRef` wrapper when it needs variant attributes. Add
   nothing visual.
2. Add `packages/themes/src/components/<name>.css` using only semantic tokens,
   and `@import` it from `base.css`. Check `surface.css` first: popup panels,
   list rows, group labels, separators and arrows are already defined there and
   shared by every popup.
3. Export from `packages/core/src/index.ts` and add a section to
   `apps/playground/src/demos.tsx`.

Base UI's own docs ship inside the package — `node_modules/@base-ui/react/docs/`
has the authoritative anatomy, props, data attributes and CSS variables for
every component. Worth reading before styling anything animated: the Accordion
panel height, the Tabs indicator position, the NavigationMenu popup size and the
whole Toast stack are driven by variables Base UI publishes, and guessing at
them produces something that looks right until it moves.

## Two naming conventions

`Content` assembles the portal/positioning chain that has no meaning apart from
the popup it wraps — `Portal` + `Positioner` + `Popup`, or for dialogs `Portal`
+ `Backdrop` + `Viewport` + `Popup`. Lists, items and arrows stay explicit:

```tsx
<Select.Content>
  <Select.List>
    <Select.Item value="oils">Oils</Select.Item>
  </Select.List>
</Select.Content>
```

Drawer, NavigationMenu and Toast already export a part called `Content`, so
those three keep Base UI's raw anatomy instead.

`Dismiss` is the × in a popup's corner. `Close` is a dismissing action placed by
normal flow, usually composed with a Button:

```tsx
<Dialog.Dismiss />
<Dialog.Close render={<Button tone="danger">Discard</Button>} />
```

## Components

All 37, grouped by the file they live in:

| | |
| :-- | :-- |
| Buttons | Button, Toggle, ToggleGroup, Toolbar |
| Forms | Form, Fieldset, Field, Input, NumberField, OTPField, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Slider |
| Selection | Select, Combobox, Autocomplete |
| Overlays | Dialog, AlertDialog, Drawer, Popover, Tooltip, PreviewCard, Toast |
| Navigation | Menu, Menubar, ContextMenu, NavigationMenu, Tabs, Accordion, Collapsible |
| Display | Avatar, Progress, Meter, Separator, ScrollArea |

Plus `DirectionProvider`, `CSPProvider`, `useRender` and `mergeProps`,
re-exported from Base UI unchanged.

## Development

```bash
pnpm install
pnpm dev          # playground on http://localhost:5173
pnpm build        # build packages
pnpm typecheck
```

The playground's toolbar switches theme and mode, and **CSS on** detaches the
stylesheets entirely — the fastest way to confirm the component layer has not
quietly grown an opinion about appearance.

Component edits hot-reload from source (the playground aliases `@monet/react` to
`packages/core/src`). Theme CSS triggers a full reload.

### Notes on the toolchain

- Declarations are emitted by `tsc`, not `tsup`: tsup's bundled
  `rollup-plugin-dts` pins TypeScript 5.7 internally and crashes on TypeScript 7.
- Vite 8 wants Node 20.19+; Node 20.18 works but warns on every run.
