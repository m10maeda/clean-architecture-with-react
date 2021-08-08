import { createContext } from 'react';

type Props = {
  controlId?: string;
};

const FormGroupContext = createContext<Props>({});

export default FormGroupContext;
