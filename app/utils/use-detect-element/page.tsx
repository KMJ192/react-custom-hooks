'use client';

import { useRef } from 'react'

import useDetectElement from '@src/lib/hooks/useDetectElement/useDetectElement';

import classNames from "classnames/bind";
import style from './style.module.scss';
const cx = classNames.bind(style)

function page() {
  const testRef = useRef<HTMLDivElement>(null);
  
  const { isOutOfView, isPartOutOfView } = useDetectElement();

  return (
    <div className={cx('container')}>
      <div ref={testRef} className={cx('test-node')}>test Node</div>
      <button className={cx('btn')} onClick={() => {
      }}>node</button>
    </div>
  )
}

export default page