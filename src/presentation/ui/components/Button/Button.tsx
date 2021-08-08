import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, VFC } from 'react';

type Props = ComponentPropsWithRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

const Button: VFC<Props> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => (
  <button
    className={`${className} ${className}--${variant}`}
    type="button"
    {...props}
  >
    {children}
  </button>
);

const StyledButton = styled(Button)`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;

  &--primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;

    &:hover,
    &:focus {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
  }

  &--secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;

    &:hover,
    &:focus {
      color: #fff;
      background-color: #5c636a;
      border-color: #565e64;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(130 138 145 / 50%);
    }
  }
`;

export default StyledButton;
