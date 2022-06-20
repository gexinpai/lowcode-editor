import { DatePicker, Select, Space } from 'antd';
import React from 'react';

// import styles from './index.less';

export default React.memo((props) => {
  return (
    <Space direction="vertical">
      选择时间：
      <DatePicker picker="week" />
      选择人群：
      <Select
        options={[
          { label: 'aa', value: 'aa' },
          { label: 'bb', value: 'bb' },
        ]}
      />
    </Space>
  );
});
