import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../../services/jwt.service';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.jwtService.getToken() != null || this.jwtService.getToken() != undefined) {
      this.goToHome()
    }
  }

  async login() {
    if (this.loginForm.valid) {
      const userCredentials = this.loginForm.value;
      const res = await this.loginService.login(userCredentials);
      console.log(res);

      if (res?.status == 200) {
        await Swal.fire({
          title: 'Success',
          text: res.message,
        })

        this.jwtService.saveToken(res?.token);
        this.goToHome();
      } else {
        Swal.fire({
          title: 'Error',
          text: 'username หรือ password ไม่ถูกต้อง',
        })
      }

      // Handle the token as needed
    } else {
      this.loginForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToHome() {
    this.router.navigate(['/layout']);
  }
}
