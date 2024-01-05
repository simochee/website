/** infer component props */
export type InferProps<T extends (...args: any[]) => any> = Parameters<T>[0];
