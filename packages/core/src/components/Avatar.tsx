import * as React from 'react';
import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import { cx } from '../utils/cx';
import { skin } from '../utils/skin';
import type { Size } from '../utils/types';

export interface AvatarRootProps extends BaseAvatar.Root.Props {
  /** @default 'md' */
  size?: Size;
}

const Root = React.forwardRef<HTMLSpanElement, AvatarRootProps>(function AvatarRoot(
  { size = 'md', className, ...props },
  ref,
) {
  return (
    <BaseAvatar.Root
      ref={ref}
      data-size={size}
      {...props}
      className={cx<BaseAvatar.Root.State>('monet-Avatar', className)}
    />
  );
});

export const Avatar = {
  Root,
  Image: skin(BaseAvatar.Image, 'monet-Avatar-image'),
  Fallback: skin(BaseAvatar.Fallback, 'monet-Avatar-fallback'),
};
