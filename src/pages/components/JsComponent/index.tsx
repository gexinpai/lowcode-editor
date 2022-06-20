import type { IComp } from '@/pages/interfaces';
import { Card } from 'antd';
import React from 'react';
import styles from './index.less';

export default React.memo(({ title, js }: IComp) => {
  return (
    <Card key={title} className={styles.imageCard}>
      {title}==js：{js}
    </Card>
  );
});
