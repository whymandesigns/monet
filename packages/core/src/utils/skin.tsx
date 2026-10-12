import * as React from 'react';
import { cx, type ClassName } from './cx';

/* Base UI parts are a mix of forwardRef components and generic function
   components (Accordion.Root, Form), so the bound has to admit both. */
type Part = React.ElementType<any>;

/**
 * Wraps a Base UI part so it carries a stable class name and nothing else.
 *
 * The return type is the wrapped component's own, so its props, ref element
 * and data attributes pass straight through — there is no per-part type to
 * write out or keep in sync as Base UI changes. Parts that also need variant
 * attributes (`data-size`, `data-tone`) get a hand-written wrapper instead.
 */
export function skin<C extends Part>(Component: C, className: string): C {
  const Rendered = Component as React.ElementType;

  const Skinned = React.forwardRef(function Skinned(
    { className: ownClassName, ...props }: { className?: ClassName<never> },
    ref: React.Ref<never>,
  ) {
    return <Rendered ref={ref} {...props} className={cx<never>(className, ownClassName)} />;
  });

  Skinned.displayName = className;
  return Skinned as unknown as C;
}
