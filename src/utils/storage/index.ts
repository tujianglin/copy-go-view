import { toRaw } from 'vue';
import { createStorage } from './createStorage';
import { BaseStorage } from '/@/enums/storageEnum';
/* local缓存 */
const ls = createStorage({ storage: localStorage });
/* session缓存 */
const ss = createStorage({ storage: sessionStorage });
/* 浏览器缓存 */
export class Storage {
  static getLocal<T>(key: BaseStorage) {
    return ls.get(key) as T;
  }
  static setLocal(key: BaseStorage, value) {
    ls.set(key, toRaw(value));
  }
  static removeLocal(key: BaseStorage) {
    ls.remove(key);
  }
  static clearLocal() {
    ls.clear();
  }
  static getSession<T>(key: BaseStorage) {
    return ss.get(key) as T;
  }
  static setSession(key: BaseStorage, value) {
    ss.set(key, toRaw(value));
  }
  static removeSession(key: BaseStorage) {
    ss.remove(key);
  }
  static clearSession() {
    ss.clear();
  }
  static clearAll() {
    ls.clear();
    ss.clear();
  }
}
