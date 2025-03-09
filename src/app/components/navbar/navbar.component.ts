import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  comfirmBuyItem(){
    Swal.fire({
      title: "คุณต้องการซื้อสินค้านี้หรือไม่?",
      text: "ราคาสินค้าอยู่ด้านล่าง!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "คำสั่งซื้อสำเร็จ!",
          text: "สินค้าของคุณจะถูกส่งไปยังจดหมาย",
          icon: "success"
        });
      }
    });
  }

}
