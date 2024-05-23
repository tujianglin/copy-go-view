import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { EditStoreType, EditCanvasConfigType } from '../types';
import { defaultTheme, globalThemeJson } from '/@/settings/chartSetting';
import { previewScaleType, requestInterval, requestIntervalUnit } from '/@/settings/designSetting';

export const useEditStore = defineStore('edit', () => {
  const state = reactive<EditStoreType>({
    // 画布属性
    editCanvas: {
      // 编辑区域 Dom
      editLayoutDom: null,
      editContentDom: null,
      // 偏移量
      offset: 20,
      // 系统控制缩放
      scale: 1,
      // 用户控制的缩放
      userScale: 1,
      // 锁定缩放
      lockScale: false,
      // 初始化
      isCreate: false,
      // 拖拽中
      isDrag: false,
      // 框选中
      isSelect: false,
      // 代码编辑中
      isCodeEdit: false,
    },
    // 右键菜单
    rightMenuShow: false,
    // 鼠标定位
    mousePosition: {
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
    },
    // 目标图表
    targetChart: {
      hoverId: undefined,
      selectId: [],
    },
    // 记录临时数据（复制等）
    recordChart: undefined,
    // -----------------------
    // 画布属性（需存储给后端）
    editCanvasConfig: {
      // 项目名称
      projectName: undefined,
      // 默认宽度
      width: 1920,
      // 默认高度
      height: 1080,
      // 启用滤镜
      filterShow: false,
      // 色相
      hueRotate: 0,
      // 饱和度
      saturate: 1,
      // 对比度
      contrast: 1,
      // 亮度
      brightness: 1,
      // 透明度
      opacity: 1,
      // 变换（暂不更改）
      rotateZ: 0,
      rotateX: 0,
      rotateY: 0,
      skewX: 0,
      skewY: 0,
      // 混合模式
      blendMode: 'normal',
      // 默认背景色
      background: undefined,
      backgroundImage: undefined,
      // 是否使用纯颜色
      selectColor: true,
      // chart 主题色
      chartThemeColor: defaultTheme || 'dark',
      // 自定义颜色列表
      chartCustomThemeColorInfo: undefined,
      // 全局配置
      chartThemeSetting: globalThemeJson,
      // 适配方式
      previewScaleType: previewScaleType,
    },
    // 数据请求处理（需存储给后端）
    requestGlobalConfig: {
      requestDataPond: [],
      requestOriginUrl: '',
      requestInterval: requestInterval,
      requestIntervalUnit: requestIntervalUnit,
      requestParams: {
        Body: {
          'form-data': {},
          'x-www-form-urlencoded': {},
          json: '',
          xml: '',
        },
        Header: {},
        Params: {},
      },
    },
    // 图表数组（需存储给后端）
    componentList: [],
  });
  // * 设置 editCanvasConfig（需保存后端） 数据项
  function setEditCanvasConfig<T extends keyof EditCanvasConfigType, K extends EditCanvasConfigType[T]>(key: T, value: K) {
    state.editCanvasConfig[key] = value;
  }
  // * 计算缩放
  function computedScale() {
    if (state.editCanvas.editLayoutDom) {
      // // 现有展示区域
      // const width = state.editLayoutDom.clientWidth - state.offset * 2 - 5;
      // const height = state.editLayoutDom.clientHeight - state.offset * 4;
      // // 用户设定大小
      // const editCanvasWidth = state.editCanvasConfig.width;
      // const editCanvasHeight = state.editCanvasConfig.height;
      // // 需保持的比例
      // const baseProportion = parseFloat((editCanvasWidth / editCanvasHeight).toFixed(5));
      // const currentRate = parseFloat((width / height).toFixed(5));
      // if (currentRate > baseProportion) {
      //   // 表示更宽
      //   const scaleWidth = parseFloat(((height * baseProportion) / editCanvasWidth).toFixed(5));
      //   state.setScale(scaleWidth > 1 ? 1 : scaleWidth);
      // } else {
      //   // 表示更高
      //   const scaleHeight = parseFloat((width / baseProportion / editCanvasHeight).toFixed(5));
      //   state.setScale(scaleHeight > 1 ? 1 : scaleHeight);
      // }
    } else {
      // window['$message'].warning('请先创建画布，再进行缩放');
    }
  }
  return {
    state,
    setEditCanvasConfig,
    computedScale,
  };
});
