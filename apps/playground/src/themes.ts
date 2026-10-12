import graphite from '@monet/themes/themes/graphite.css?url';
import nympheas from '@monet/themes/themes/nympheas.css?url';
import sunrise from '@monet/themes/themes/sunrise.css?url';

export const THEMES = [
  { id: 'graphite', label: 'Graphite', href: graphite },
  { id: 'nympheas', label: 'Nymphéas', href: nympheas },
  { id: 'sunrise', label: 'Sunrise', href: sunrise },
] as const;

export type ThemeId = (typeof THEMES)[number]['id'];
