import React, { ComponentPropsWithRef, ReactNode, VFC } from 'react';
import Item from './Item';
import NavList from './NavList';

type Props = ComponentPropsWithRef<typeof NavList> & {
  children: ReactNode;
};

const NavListContainer: VFC<Props> & {
  Item: typeof Item;
} = ({ children, ...props }) => <NavList {...props}>{children}</NavList>;

NavListContainer.Item = Item;

export default NavListContainer;
