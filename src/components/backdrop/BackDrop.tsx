import { ComponentProps, ComponentPropsWithRef } from 'react';

interface BackDropProps extends ComponentPropsWithRef<any> {}

const BackDrop = (props: BackDropProps) => {
  const { children } = props;
  return (
    <div className="absolute w-full h-full bg-green-200 top-0 left-0 opacity-10">
      {children}
    </div>
  );
};

export default BackDrop;
