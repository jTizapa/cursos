import axios, { AxiosInstance } from 'axios';
import { httpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements httpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string, config: any): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error(`This is an error - check logs | ${error}`);
    }
  }
}
