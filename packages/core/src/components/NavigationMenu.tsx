import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu';
import { skin } from '../utils/skin';

/**
 * Base UI already exports a part named `Content` here, so this one keeps the
 * raw anatomy rather than adding the `Content` convenience the other popups get.
 */
export const NavigationMenu = {
  Root: skin(BaseNavigationMenu.Root, 'monet-NavigationMenu'),
  List: skin(BaseNavigationMenu.List, 'monet-NavigationMenu-list'),
  Item: skin(BaseNavigationMenu.Item, 'monet-NavigationMenu-item'),
  Trigger: skin(BaseNavigationMenu.Trigger, 'monet-NavigationMenu-trigger'),
  Icon: skin(BaseNavigationMenu.Icon, 'monet-NavigationMenu-icon'),
  Content: skin(BaseNavigationMenu.Content, 'monet-NavigationMenu-content'),
  Link: skin(BaseNavigationMenu.Link, 'monet-NavigationMenu-link'),
  Portal: BaseNavigationMenu.Portal,
  Backdrop: skin(BaseNavigationMenu.Backdrop, 'monet-NavigationMenu-backdrop'),
  Positioner: skin(BaseNavigationMenu.Positioner, 'monet-NavigationMenu-positioner'),
  Popup: skin(BaseNavigationMenu.Popup, 'monet-NavigationMenu-popup'),
  Viewport: skin(BaseNavigationMenu.Viewport, 'monet-NavigationMenu-viewport'),
  Arrow: skin(BaseNavigationMenu.Arrow, 'monet-NavigationMenu-arrow'),
};
