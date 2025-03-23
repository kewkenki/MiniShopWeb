import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private jwtService: JwtService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // ตรวจสอบว่า user มี JWT Token หรือไม่
    const token = this.jwtService.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);  // ถ้าไม่มี JWT Token ให้เปลี่ยนเส้นทางไปที่หน้า login
      return false;
    }
  }
}
