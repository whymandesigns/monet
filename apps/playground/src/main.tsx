import * as React from 'react';
import { createRoot } from 'react-dom/client';
import baseHref from '@monet/themes/base.css?url';
import { App } from './App';
import './playground.css';

/*
 * The design system's CSS is attached as real <link> elements rather than
 * imported, so the playground can disable it at runtime and show what the
 * component layer looks like on its own. Order matters: themes override the
 * generated scales at equal specificity, so the theme link must come second.
 */
const baseLink = document.createElement('link');
baseLink.rel = 'stylesheet';
baseLink.href = baseHref;
document.head.append(baseLink);

const themeLink = document.createElement('link');
themeLink.rel = 'stylesheet';
document.head.append(themeLink);

export const styleSheets = { base: baseLink, theme: themeLink };

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
