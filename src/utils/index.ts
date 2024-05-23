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
