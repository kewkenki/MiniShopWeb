import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private jwtService:JwtService) { }

  ngOnInit() {
  }

  logout(){
    this.jwtService.removeToken();
    this.router.navigate(['/login']);
  }

}
