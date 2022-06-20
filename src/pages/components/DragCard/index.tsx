import { useDrag } from 'ahooks';
import { Card } from 'antd';
import React, { useRef, useState } from 'react';
import styles from './index.less';

interface IProps {
  data?: any;
}

export default React.memo(({ data }: IProps) => {
  const dragRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  useDrag(data, dragRef, {
    onDragStart: () => {
      setDragging(true);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });
  return (
    <Card ref={dragRef} className={styles.DropCard}>
      {dragging ? `dragging ${data.title}` : data.title}
    </Card>
  );
});
