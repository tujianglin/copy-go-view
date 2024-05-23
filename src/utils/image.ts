const imagesModules: Record<string, { default: string }> = import.meta.glob('../assets/images/charts/**', {
  eager: true,
});

/**
 * 获取图片内容
 * @param image
 * @returns
 */
export const fetchImages = (image: string) => {
  if (!image) return '';
  // 正则判断图片是否为 url，是则直接返回该 url
  if (/^(http|https):\/\/([\w.]+\/?)\S*/.test(image)) return image;
  // 兼容旧数据
  if (image.includes('@') || image.includes('base64')) return image;

  const imageName = image.substring(image.lastIndexOf('/') + 1);
  for (const key in imagesModules) {
    const urlSplit = key.split('/');
    if (urlSplit[urlSplit.length - 1] === imageName) {
      return imagesModules[key]?.default;
    }
  }
  return '';
};
