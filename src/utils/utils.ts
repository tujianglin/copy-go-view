import { excludeParseEventKeyList, excludeParseEventValueList } from '../enums/eventEnum';
import { WinKeyboard } from '/@/enums/editPageEnum';

/**
 * 获取静态资源
 * @param url
 * @returns
 */
export const getAssetsFile = (url: string) => {
  return new URL(`../assets${url}`, import.meta.url).href;
};

/**
 * 通过硬解析获取当前路由下的参数
 * @returns
 */
export const fetchRouteParamsLocation = () => {
  try {
    // 防止添加query参数的时候，解析ID异常
    return document.location.hash.split('?')[0].split('/').pop() || '';
  } catch (error) {
    window['$message'].warning('查询路由信息失败，请联系管理员！');
    return '';
  }
};

/**
 * 修改浏览器tab标题
 * @param title
 */
export const setTitle = (title: string) => {
  title && (document.title = title);
};

/**
 * 获取错误处理图片，默认 404 图
 * @returns url
 */
export const requireErrorImg = () => {
  return getAssetsFile('/images/exception/image-404.png');
};

/**
 * 生成一个不重复的ID
 * @param randomLength
 * @returns
 */
export const getUUID = (randomLength = 10) => {
  return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36);
};

/**
 * 设置按下键盘按键的底部展示
 * @param keyCode
 * @returns
 */
export const setKeyboardDressShow = (keyCode?: number) => {
  const code = new Map([
    [17, WinKeyboard.CTRL],
    [32, WinKeyboard.SPACE],
  ]);

  const dom = document.getElementById('keyboard-dress-show');
  if (!dom) return;
  if (!keyCode) {
    window.onKeySpacePressHold?.(false);
    dom.innerText = '';
    return;
  }
  if (keyCode && code.has(keyCode)) {
    if (keyCode == 32) window.onKeySpacePressHold?.(true);
    dom.innerText = `按下了「${code.get(keyCode)}」键`;
  }
};

export const evalFn = (fn: string) => {
  const Fun = Function; // 一个变量指向Function，防止前端编译工具报错
  return new Fun('return ' + fn)();
};

/**
 * * JSON反序列化，支持函数和 undefined
 * @param data
 */
export const JSONParse = (data: string) => {
  return JSON.parse(data, (k, v) => {
    // 过滤函数字符串
    if (excludeParseEventKeyList.includes(k)) return v;
    // 过滤函数值表达式
    if (typeof v === 'string') {
      const someValue = excludeParseEventValueList.some((excludeValue) => v.indexOf(excludeValue) > -1);
      if (someValue) return v;
    }
    // 还原函数值
    if (typeof v === 'string' && v.indexOf && (v.indexOf('function') > -1 || v.indexOf('=>') > -1)) {
      return evalFn(`(function(){return ${v}})()`);
    } else if (typeof v === 'string' && v.indexOf && v.indexOf('return ') > -1) {
      const baseLeftIndex = v.indexOf('(');
      if (baseLeftIndex > -1) {
        const newFn = `function ${v.substring(baseLeftIndex)}`;
        return evalFn(`(function(){return ${newFn}})()`);
      }
    }
    return v;
  });
};
