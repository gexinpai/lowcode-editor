export enum ECompType {
  TAB_PANE, // 顶层TAB
  OUT_CONTAINER, // 顶级容器
  CONTAINER, // 一级容器
  INNER_CONTAINER, //拆分出二级容器
  FORM_COMP, // form组件
  // JS_FORM, // 第三方FORM
  // INNER_FORM, // 内置FORM
  JS_COMP, //是否拆分antd组件/antdcharts/x6/g6/l7/echarts....
  JS_TEMPLATE, // 第三方模版
  INNER_TEMPLATE, // 内置模版
  INNER_COMP, //内置组件
}

export interface IComp {
  id: string;
  title: string;
  type: ECompType;
  js?: string;
  childList?: IComp[];
  [_: string]: any;
}
