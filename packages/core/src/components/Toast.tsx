import { Toast as BaseToast } from '@base-ui/react/toast';
import { skin } from '../utils/skin';

/**
 * Base UI already exports a part named `Content` here, so this one keeps the
 * raw anatomy rather than adding the `Content` convenience the other popups get.
 *
 * Put `Toast.Provider` near the root of the app, render one `Toast.Portal` +
 * `Toast.Viewport` beneath it, and push toasts with `Toast.useToastManager()`.
 */
export const Toast = {
  Provider: BaseToast.Provider,
  Portal: BaseToast.Portal,
  Viewport: skin(BaseToast.Viewport, 'monet-Toast-viewport'),
  Root: skin(BaseToast.Root, 'monet-Toast'),
  Content: skin(BaseToast.Content, 'monet-Toast-content'),
  Title: skin(BaseToast.Title, 'monet-Toast-title'),
  Description: skin(BaseToast.Description, 'monet-Toast-description'),
  Action: skin(BaseToast.Action, 'monet-Toast-action'),
  Close: skin(BaseToast.Close, 'monet-Toast-close'),
  Positioner: skin(BaseToast.Positioner, 'monet-Toast-positioner'),
  Arrow: skin(BaseToast.Arrow, 'monet-Toast-arrow'),
  useToastManager: BaseToast.useToastManager,
  createToastManager: BaseToast.createToastManager,
};
