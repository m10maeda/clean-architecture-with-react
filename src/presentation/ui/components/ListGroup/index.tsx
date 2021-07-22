import React, { ComponentPropsWithRef, VFC } from 'react';
import Item from './Item';
import ListGroup from './ListGroup';

type Props = ComponentPropsWithRef<typeof ListGroup>;

const ListGroupContainer: {
  Item: typeof Item;
} & VFC<Props> = ({ ...props }) => <ListGroup {...props} />;

ListGroupContainer.Item = Item;

export default ListGroupContainer;
