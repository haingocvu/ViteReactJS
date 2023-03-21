import { ComponentProps, FC } from 'react';
import UnAuthen from '../../components/auth/UnAuthen';

interface IProps extends ComponentProps<any> {
  isAuthenticated: boolean;
}

const WithAuth = (Wrapped: FC<any>) => (props: IProps) => {
  const { isAuthenticated, ...rest } = props;
  return isAuthenticated ? <Wrapped {...rest} /> : <UnAuthen />;
};

export default WithAuth;
