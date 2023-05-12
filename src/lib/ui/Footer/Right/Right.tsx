import { forwardRef } from 'react';
import type { ReactNode, ElementType, Ref } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/lib/ui/types/types';

import classNames from 'classnames/bind';
import style from './Right.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'section';

type Props<T extends ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Right<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  { children, as, className, ...props }: Props<T>,
  ref: Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element {...props} ref={ref} className={cx('right', className)}>
      {children}
    </Element>
  );
}

export default forwardRef(Right) as typeof Right;
