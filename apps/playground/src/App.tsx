import * as React from 'react';
import { Toast, Tooltip } from '@monet/react';
import { styleSheets } from './main';
import { SECTIONS, ToastViewport } from './demos';
import { THEMES, type ThemeId } from './themes';

type Mode = 'system' | 'light' | 'dark';

export function App() {
  const [theme, setTheme] = React.useState<ThemeId>('graphite');
  const [mode, setMode] = React.useState<Mode>('system');
  const [styled, setStyled] = React.useState(true);

  React.useEffect(() => {
    styleSheets.theme.href = THEMES.find((t) => t.id === theme)!.href;
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  React.useEffect(() => {
    if (mode === 'system') {
      delete document.documentElement.dataset.mode;
    } else {
      document.documentElement.dataset.mode = mode;
    }
  }, [mode]);

  React.useEffect(() => {
    styleSheets.base.disabled = !styled;
    styleSheets.theme.disabled = !styled;
  }, [styled]);

  return (
    /* One Provider each, high in the tree, as both components expect. */
    <Toast.Provider>
      <Tooltip.Provider>
        <header className="pg-bar">
          <strong className="pg-brand">monet</strong>

          <label className="pg-control">
            Theme
            <select value={theme} onChange={(e) => setTheme(e.target.value as ThemeId)}>
              {THEMES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>

          <label className="pg-control">
            Mode
            <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label className="pg-control pg-control--check">
            <input
              type="checkbox"
              checked={styled}
              onChange={(e) => setStyled(e.target.checked)}
            />
            CSS on
          </label>
        </header>

        <nav className="pg-toc">
          {SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </nav>

        <main className="pg-page">
          {SECTIONS.map((section) => (
            <section className="pg-section" id={section.id} key={section.id}>
              <h2 className="pg-title">
                {section.title}
                {section.note ? <span className="pg-note">{section.note}</span> : null}
              </h2>
              <div className="pg-body">{section.render()}</div>
            </section>
          ))}
        </main>

        <ToastViewport />
      </Tooltip.Provider>
    </Toast.Provider>
  );
}
