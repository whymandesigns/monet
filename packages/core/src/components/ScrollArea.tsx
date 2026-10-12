import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { skin } from '../utils/skin';

export const ScrollArea = {
  Root: skin(BaseScrollArea.Root, 'monet-ScrollArea'),
  Viewport: skin(BaseScrollArea.Viewport, 'monet-ScrollArea-viewport'),
  Content: skin(BaseScrollArea.Content, 'monet-ScrollArea-content'),
  Scrollbar: skin(BaseScrollArea.Scrollbar, 'monet-ScrollArea-scrollbar'),
  Thumb: skin(BaseScrollArea.Thumb, 'monet-ScrollArea-thumb'),
  Corner: skin(BaseScrollArea.Corner, 'monet-ScrollArea-corner'),
};
