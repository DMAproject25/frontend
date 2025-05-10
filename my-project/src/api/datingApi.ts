// src/api/datingApi.ts

import ApiService from './apiService';

// Типы данных для работы с API
interface UserProfile {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  interests: string[];
  location?: {
    latitude: number;
    longitude: number;
  };
}

interface MatchUser {
  id: string;
  name: string;
  photo: string;
  lastMessage?: {
    text: string;
    timestamp: number;
    isRead: boolean;
  };
}

interface MessageData {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: number;
  isRead: boolean;
}

// Класс для работы с API дейтинг-приложения
class DatingApi {
  private api: ApiService;
  
  constructor(baseURL: string) {
    this.api = new ApiService(baseURL);
  }

  // Установка токена пользователя (после авторизации)
  setUserToken(token: string): void {
    this.api.setToken(token);
  }

  // Инициализация пользователя из Telegram
  async initTelegramUser(tgData: any): Promise<UserProfile> {
    return this.api.post<UserProfile>('/auth/telegram', tgData);
  }

  // Получение профиля текущего пользователя
  async getCurrentProfile(): Promise<UserProfile> {
    return this.api.get<UserProfile>('/users/me');
  }

  // Обновление профиля пользователя
  async updateProfile(profileData: Partial<UserProfile>): Promise<UserProfile> {
    return this.api.patch<UserProfile>('/users/me', profileData);
  }

  // Загрузка фотографии
  async uploadPhoto(file: File): Promise<{ url: string }> {
    const formData = new FormData();
    formData.append('photo', file);
    
    // Используем axios напрямую, так как наши методы не поддерживают FormData
    const response = await this.api.post<{ url: string }>('/users/photos', formData);
    return response;
  }

  // Получение рекомендаций пользователей для свайпа
  async getRecommendations(params?: { limit?: number }): Promise<UserProfile[]> {
    return this.api.get<UserProfile[]>('/recommendations', params);
  }

  // Поставить лайк пользователю
  async likeUser(userId: string): Promise<{ match: boolean; user?: UserProfile }> {
    return this.api.post<{ match: boolean; user?: UserProfile }>(`/users/${userId}/like`, {});
  }

  // Поставить дизлайк пользователю
  async dislikeUser(userId: string): Promise<void> {
    return this.api.post<void>(`/users/${userId}/dislike`, {});
  }

  // Получить список совпадений (matches)
  async getMatches(): Promise<MatchUser[]> {
    return this.api.get<MatchUser[]>('/matches');
  }


/*   async getMessages(userId: string, params?: { limit?: number; before?: number }): Promise<MessageData[]> {
    return this.api.get<MessageData[]>(`/messages/${userId}`, params);
  }

  async sendMessage(userId: string, text: string): Promise<MessageData> {
    return this.api.post<MessageData>(`/messages/${userId}`, { text });
  }

  async markMessagesAsRead(userId: string, messageIds: string[]): Promise<void> {
    return this.api.post<void>(`/messages/${userId}/read`, { messageIds });
  } */

  // Удалить совпадение (unmatch)
  async unmatchUser(userId: string): Promise<void> {
    return this.api.delete<void>(`/matches/${userId}`);
  }

  // Изменить настройки поиска
  async updateSearchSettings(settings: { 
    ageMin?: number; 
    ageMax?: number; 
    distance?: number;
    interests?: string[];
  }): Promise<void> {
    return this.api.put<void>('/settings/search', settings);
  }

  // Получить настройки поиска
  async getSearchSettings(): Promise<{
    ageMin: number;
    ageMax: number;
    distance: number;
    interests: string[];
  }> {
    return this.api.get<any>('/settings/search');
  }
}

export default DatingApi;