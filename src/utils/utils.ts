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
