import { FC, ComponentProps } from 'react';

interface IProps extends ComponentProps<any> {
  isLoading: boolean;
}

export const withLoading = (WrappedComp: FC<any>) => (props: IProps) => {
  const { isLoading, ...rest } = props;
  if (isLoading) return <p>'waiting for a mimutes'</p>;
  return <WrappedComp {...rest} />;
};
