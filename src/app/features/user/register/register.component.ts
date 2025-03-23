import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;

      const res: any = await this.loginService.register({
        Username: formValue.username,
        Email: formValue.email,
        Password: formValue.password
      })

      console.log(res);

      if (res.status == 200) {
        Swal.fire({
          title: 'Success',
          text: 'User registered successfully',
        })


      }else {
        Swal.fire({
          title: 'Error',
          text: 'User registration failed : ' + res?.message,
        })
      }
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
