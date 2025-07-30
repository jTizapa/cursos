export interface httpAdapter {
  get<T>(url: string, config: any): Promise<T>;
}
