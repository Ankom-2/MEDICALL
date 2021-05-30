import { LoginComponent } from './../login/login.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  displayNavbar!: string;
  data = [
    { label: 'Home', active: 'active', link: 'home', icon: 'home' },
    { label: 'Solutions', active: 'active', link: 'solution' },
    { label: 'Add Services', active: 'active', link: 'addService' },
    { label: 'About', active: 'active', link: 'about' },
    { label: 'Contact Us', active: 'active', link: 'contact' }
  ]
  label: string = "My Application";
  ngOnInit(): void {
    this.displayNavbar = '1';
  }
  toggleNavbar() {

    if (this.displayNavbar == '0') {
      this.displayNavbar = '1';
      //  alert(this.displayNavbar);
    } if (this.displayNavbar == '1') {
      //    alert("1 - Changing to 0");
      this.displayNavbar = '0';
    } else {
      this.displayNavbar = '1';
    }
  }
  onToggleSidenav = () => {

  }

}
