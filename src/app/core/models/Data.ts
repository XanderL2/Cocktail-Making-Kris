export interface DataState<T> {
  loading: boolean;
  data?: T;
  error?: any;
}