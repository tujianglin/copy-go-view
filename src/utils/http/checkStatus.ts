let isRefreshing = false;
const requests = [];
export function checkStatus(err: Recordable) {
  const { response } = err;
  // const msg: string = response?.data?.msg ?? '';
  switch (response.status) {
    case 400:
      break;
    case 401:
      // 接口token过期刷新token
      if (err.response.status === 401) {
        const config = err.config;
        if (!isRefreshing) {
          isRefreshing = true;
          // return store
          //   .dispatch('refreshToken')
          //   .then((res) => {
          //     config.headers['Blade-Auth'] = `bearer ${res.access_token}`;
          //     config.baseURL = ''; // 重置 baseURL，避免重复请求
          //     requests.forEach((cb) => cb(res.access_token));
          //     requests = [];
          //     return axios(config);
          //   })
          //   .catch(() => {
          //     store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }));
          //   })
          //   .finally(() => {
          //     isRefreshing = false;
          //   });
        } else {
          return new Promise((resolve) => {
            requests.push((token) => {
              config.headers['Blade-Auth'] = `bearer ${token}`;
              config.baseURL = ''; // 重置 baseURL，避免重复请求
              resolve(config);
            });
          });
        }
      }
      break;
    case 404:
      break;
    case 500:
      break;
    default:
      break;
  }
}
