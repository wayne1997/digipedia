import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private readonly _storage: Storage) {}

  saveItem<T>(key: string, value: string) {
    this._storage.set(key, value);
  }

  async getItem<T>(key: string): Promise<T> {
    const data = await this._storage.get(key);
    return JSON.parse(data);
  }

  removeItem(key: string): Promise<void> {
    return this._storage.remove(key);
  }

  clear(): Promise<void> {
    return this._storage.clear();
  }
}
