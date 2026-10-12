/**
 * Base UI accepts `className` as either a string or a function of component
 * state. `cx` merges our own stable class names with whatever the consumer
 * passed, preserving the function form when one is present.
 */
export type ClassName<State> =
  | string
  | ((state: State) => string | undefined)
  | false
  | null
  | undefined;

export function cx<State>(
  ...values: ClassName<State>[]
): string | ((state: State) => string) {
  if (values.some((value) => typeof value === 'function')) {
    return (state: State) =>
      values
        .map((value) => (typeof value === 'function' ? value(state) : value))
        .filter(Boolean)
        .join(' ');
  }
  return values.filter(Boolean).join(' ');
}
