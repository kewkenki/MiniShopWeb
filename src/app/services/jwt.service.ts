import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() {}

  // ฟังก์ชันการเก็บ JWT Token
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // ฟังก์ชันการดึง JWT Token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // ฟังก์ชันการลบ JWT Token
  removeToken() {
    localStorage.removeItem('authToken');
  }
}
