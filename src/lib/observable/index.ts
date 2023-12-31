import { ObservableType, Observer } from "./interfaces";

export class Observable<T> implements ObservableType<T> {
  constructor(private observers: Observer<T>[] = []) {}

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter(
      (currObserver) => currObserver !== observer,
    );
  }

  notify(data: T): void {
    this.observers.forEach((observer) => observer(data));
  }
}

export const rangeNumberObservable = new Observable<number>();
