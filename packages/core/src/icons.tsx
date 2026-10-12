import * as React from 'react';

/**
 * Default glyphs for parts that are meaningless without one (a checkbox with
 * no check, a select with no chevron). They carry no colour or size of their
 * own — both come from the theme via `currentColor` and `em` units — and every
 * component that renders one accepts `children` to replace it.
 */

const base: React.SVGProps<SVGSVGElement> = {
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: '1em',
  height: '1em',
  'aria-hidden': true,
};

export function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

export function IndeterminateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h8" />
    </svg>
  );
}

export function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}
