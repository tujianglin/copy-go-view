/* 创建缓存 */
export const createStorage = ({ storage = localStorage }) => {
  const WebStorage = class WebStorage {
    private storage: Storage;
    constructor() {
      this.storage = storage;
    }
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(key);
      if (!val) return def;
      try {
        const data = JSON.parse(val);
        const { value } = data;
        return value;
      } catch (e) {
        return def;
      }
    }
    set(key: string, value: any) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
      });
      this.storage.setItem(key, stringData);
    }
    remove(key: string) {
      this.storage.removeItem(key);
    }
    clear(): void {
      this.storage.clear();
    }
  };
  return new WebStorage();
};
