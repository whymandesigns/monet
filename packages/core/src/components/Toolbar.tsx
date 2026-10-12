import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar';
import { skin } from '../utils/skin';

export const Toolbar = {
  Root: skin(BaseToolbar.Root, 'monet-Toolbar'),
  Button: skin(BaseToolbar.Button, 'monet-Toolbar-button'),
  Link: skin(BaseToolbar.Link, 'monet-Toolbar-link'),
  Input: skin(BaseToolbar.Input, 'monet-Toolbar-input'),
  Group: skin(BaseToolbar.Group, 'monet-Toolbar-group'),
  Separator: skin(BaseToolbar.Separator, 'monet-Toolbar-separator'),
};
