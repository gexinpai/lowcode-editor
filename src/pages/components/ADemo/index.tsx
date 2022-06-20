import { Card } from 'antd';
import React from 'react';
import styles from './index.less';

export default React.memo(({title}) => {
  return (
    <Card key={title} className={styles.imageCard}>
      {title}
    </Card>
  );
});
