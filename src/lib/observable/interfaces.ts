export type Observer<T> = (data: T) => void;

export interface ObservableType<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(data: unknown): void;
}
