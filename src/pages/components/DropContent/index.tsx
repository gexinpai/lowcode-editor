import { ECompType, IComp } from '@/pages/interfaces';
import { useDrop } from 'ahooks';
import { message } from 'antd';
import React, { useRef, useState } from 'react';
import DragContainer from '../DragContainer';
import FormFilter from '../FormFilter';
import JsComponent from '../JsComponent';
import styles from './index.less';

interface IProps {
  classNames?: string;
  onDropDown: (a: any) => any;
  data?: IComp[];
}

export default React.memo(({ classNames, onDropDown, data }: IProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const dropRef = useRef(null);

  useDrop(dropRef, {
    onDom: ({ id, title, js }: any, e) => {
      message.info(`custom: ${title} dropped`);
      onDropDown({ id, title, js });
    },
    onDragEnter: () => setIsHovering(true),
    onDragLeave: () => setIsHovering(false),
  });

  return (
    <div ref={dropRef} className={`${styles.DropContainer} ${classNames}`}>
      {isHovering ? 'release here' : 'drop here'}
      {data?.map((item) => {
        if(item.type === ECompType.CONTAINER){
          return <DragContainer />
        }
        if (item.type === ECompType.FORM_COMP) {
          return <FormFilter key={item.id} />;
        }
        return <JsComponent key={item.id} {...item} />;
      })}
    </div>
  );
});
