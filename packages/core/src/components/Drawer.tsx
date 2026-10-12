import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import { skin } from '../utils/skin';

/**
 * Base UI already exports a part named `Content` here, so this one keeps the
 * raw anatomy rather than adding the `Content` convenience the other popups get.
 */
export const Drawer = {
  Provider: BaseDrawer.Provider,
  Root: BaseDrawer.Root,
  Trigger: skin(BaseDrawer.Trigger, 'monet-Drawer-trigger'),
  Portal: BaseDrawer.Portal,
  Backdrop: skin(BaseDrawer.Backdrop, 'monet-Drawer-backdrop'),
  Viewport: skin(BaseDrawer.Viewport, 'monet-Drawer-viewport'),
  Popup: skin(BaseDrawer.Popup, 'monet-Drawer-popup'),
  Content: skin(BaseDrawer.Content, 'monet-Drawer-content'),
  Title: skin(BaseDrawer.Title, 'monet-Drawer-title'),
  Description: skin(BaseDrawer.Description, 'monet-Drawer-description'),
  Close: skin(BaseDrawer.Close, 'monet-Drawer-close'),
  SwipeArea: skin(BaseDrawer.SwipeArea, 'monet-Drawer-swipeArea'),
  Indent: skin(BaseDrawer.Indent, 'monet-Drawer-indent'),
  IndentBackground: skin(BaseDrawer.IndentBackground, 'monet-Drawer-indentBackground'),
  createHandle: BaseDrawer.createHandle,
};
