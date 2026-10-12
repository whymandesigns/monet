import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { skin } from '../utils/skin';

export const Tabs = {
  Root: skin(BaseTabs.Root, 'monet-Tabs'),
  List: skin(BaseTabs.List, 'monet-Tabs-list'),
  Tab: skin(BaseTabs.Tab, 'monet-Tabs-tab'),
  /** Slides between active tabs using the CSS variables Base UI sets on it. */
  Indicator: skin(BaseTabs.Indicator, 'monet-Tabs-indicator'),
  Panel: skin(BaseTabs.Panel, 'monet-Tabs-panel'),
};
