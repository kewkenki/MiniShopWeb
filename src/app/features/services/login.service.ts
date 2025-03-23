import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }

  async login(data:any): Promise<any> {
    try {
      return await this.api.post('Auth/login', data).toPromise();
    }
    catch (error) {
      return error;
    }
  }

  async register(data:any): Promise<any> {
    return await this.api.post('Auth/register', data).toPromise();
  }

}
