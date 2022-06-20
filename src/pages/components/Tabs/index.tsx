import { Tabs } from 'antd';
import React, { useRef, useState } from 'react';

const { TabPane } = Tabs;

interface IProps {
  panes: any;
  setPanes: any;
}

export default React.memo(({ panes, setPanes }: IProps) => {
  const [activeKey, setActiveKey] = useState(panes[0]?.key);

  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...panes];
    newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: newActiveKey });
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit}>
      {panes.map((pane) => (
        <TabPane tab={pane.title} key={pane.key} closable={pane.closable} />
      ))}
    </Tabs>
  );
});
