import { useEffect, useRef, useCallback, Ref } from 'react';

interface Payload {
  onClickOutSide: () => void;
}

interface ReturnedData {
  targetRef: Ref<any>;
}

export const useClickOutSide = (values: Payload): ReturnedData => {
  const { onClickOutSide } = values;
  const targetRef = useRef<any>(null);

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = useCallback((e: Event) => {
    const ele = e.target;
    if (targetRef.current && !targetRef.current.contains(ele)) {
      e.preventDefault();
      e.stopPropagation();
      onClickOutSide();
    }
  }, []);

  return {
    targetRef,
  };
};
