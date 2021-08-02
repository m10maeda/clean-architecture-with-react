import styled from '@emotion/styled';
import React, { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Table: VFC<Props> = ({ children, className }) => (
  <table className={className}>{children}</table>
);

const StyledTable = styled(Table)`
  width: 100%;
  vertical-align: top;
  border-collapse: collapse;

  thead {
    vertical-align: bottom;
  }

  tr {
    border-bottom: #dee2e6 solid 1px;

    th,
    td {
      padding: 0.5rem;

      &.text-right {
        text-align: right;
      }
    }

    th {
      text-align: left;
    }
  }

  /* thead,
  tbody,
  tfoot,
  tr,
  th,
  td {
    border-color: inherit;
    border-style: solid;
    border-bottom-width: 1px;
  } */
`;

export default StyledTable;
