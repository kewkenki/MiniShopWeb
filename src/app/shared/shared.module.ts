import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../features/user/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
    ],
    exports: [ // Add this block
        FooterComponent,
        NavbarComponent,
    ],
    providers: [],
})
export class SharedModule { }
