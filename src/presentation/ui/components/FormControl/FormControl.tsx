import styled from '@emotion/styled';
import React, { ComponentPropsWithRef, VFC } from 'react';

type Props = ComponentPropsWithRef<'input'> & {
  plaintext?: boolean;
};

const FormControl: VFC<Props> = ({
  children,
  className,
  plaintext = false,
  ...props
}) => (
  <input
    className={`${className} ${plaintext && `${className}--plaintext`}`}
    type="text"
    readOnly={plaintext}
    {...props}
  />
);

const StyledFormControl = styled(FormControl)`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

  &--plaintext {
    padding-right: 0;
    padding-left: 0;
    border-right: 0;
    border-left: 0;
    border-color: transparent;
    outline: 0;
  }
`;

export default StyledFormControl;
