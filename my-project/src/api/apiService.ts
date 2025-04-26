// src/api/apiService.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Создаем базовый класс для работы с API
class ApiService {
  private api: AxiosInstance;
  private token: string | null = null;

  constructor(baseURL: string) {
    // Создаем экземпляр axios с базовым URL и настройками
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // Таймаут запроса (10 секунд)
    });

    // Добавляем перехватчик запросов для добавления токена
    this.api.interceptors.request.use((config) => {
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      return config;
    });

    // Добавляем перехватчик ответов для обработки ошибок
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        // Обработка ошибок аутентификации
        if (error.response?.status === 401) {
          // Можно добавить логику для обновления токена или перенаправления на страницу логина
          console.error('Authentication error');
          // Вызвать функцию для получения нового токена или выхода из системы
        }
        return Promise.reject(error);
      }
    );
  }

  // Установка токена аутентификации
  setToken(token: string): void {
    this.token = token;
  }

  // Метод GET для получения данных
  async get<T>(url: string, params?: any): Promise<T> {
    try {
      const config: AxiosRequestConfig = {};
      if (params) {
        config.params = params;
      }
      const response: AxiosResponse<T> = await this.api.get(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Метод POST для создания данных
  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Метод PUT для полного обновления данных
  async put<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.put(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Метод PATCH для частичного обновления данных
  async patch<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.patch(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Метод DELETE для удаления данных
  async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.delete(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Обработка ошибок API
  private handleError(error: any): void {
    if (axios.isAxiosError(error)) {
      // Обработка ошибок Axios
      const errorMessage = error.response?.data?.message || error.message;
      console.error(`API Error: ${errorMessage}`);
      
      // Можно добавить дополнительную логику обработки ошибок
      // Например, показывать уведомления пользователю
    } else {
      // Обработка других ошибок
      console.error('Unexpected error:', error);
    }
  }
}

export default ApiService;