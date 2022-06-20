import { Layout } from 'antd';
import React, { useState } from 'react';
import DragCard from './components/DragCard';
import DropContent from './components/DropContent';
import Tabs from './components/Tabs';
import styles from './Editor.less';
import type { IComp } from './interfaces';
import { ECompType } from './interfaces';

const { Header, Content, Sider } = Layout;

const list = [
  { id: '0', title: '空容器', type: ECompType.INNER_CONTAINER, image: '' },
  { id: '1', title: '筛选项', type: ECompType.FORM_COMP, image: '' },
  { id: '2', title: '消息卡片', type: ECompType.JS_COMP, image: '' },
  { id: '3', title: '折线图', type: ECompType.INNER_COMP, image: '' },
  { id: '4', title: '柱状图', type: ECompType.INNER_COMP, image: '' },
  { id: '5', title: '地图', type: ECompType.JS_COMP, image: '' },
];

const initialPanes = [
  {
    id: '0',
    type: ECompType.TAB_PANE,
    title: '首页',
    childList: [],
    key: '0',
    closable: false,
    active: true,
  },
  {
    id: '1',
    type: ECompType.TAB_PANE,
    title: '流量来源',
    childList: [],
    key: '1',
    active: false,
  },
  {
    id: '2',
    type: ECompType.TAB_PANE,
    title: '余额大盘',
    childList: [],
    key: '2',
    active: false,
  },
];

const Editor: React.FC = () => {
  const [panes, setPanes] = useState<IComp[]>(initialPanes);

  const onOuterDropDown = (dragItem: any) => {
    setPanes(
      panes.map((item) => {
        const childList = item.childList;
        if (item.active) {
          childList?.push(dragItem);
        }
        return {
          ...item,
          childList,
        };
      }),
    );
  };

  return (
    <Layout className={styles.EditorLayout}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {list.map((item: IComp) => {
            return <DragCard key={item.id} data={item} />;
          })}
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Tabs panes={panes} setPanes={setPanes} />
            {panes?.map((pane) => {
              if (!pane?.active) {
                return null;
              }
              return (
                <DropContent
                  key={pane.key}
                  classNames={styles.OutContainer}
                  onDropDown={onOuterDropDown}
                  data={pane.childList}
                />
              );
            })}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Editor;
