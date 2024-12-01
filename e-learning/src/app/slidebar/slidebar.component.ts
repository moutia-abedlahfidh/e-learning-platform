import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css'] // Note: Use 'styleUrls' instead of 'styleUrl'
})
export class SlidebarComponent implements OnInit {
  constructor(private service : MyserviceService,private cookies : CookieService,private route : Router) {}
  public Courses : any ;
  public options : any ;
  ngOnInit(): void {
    this.initializeNavbar();
    this.options = document.querySelector(".options")  ;  }
  

  changeStatus() {
    console.log(this.options);
    if (this.options.style.display == "none")
    {
      this.options.style.display = "block" ;
    }else{
      this.options.style.display = "none" ;
    }
  }

  private initializeNavbar(): void {
    const showNavbar = (toggleId: string, navId: string, bodyId: string, headerId: string) => {
      const toggle = document.getElementById(toggleId) as HTMLElement | null;
      const nav = document.getElementById(navId) as HTMLElement | null;
      const bodypd = document.getElementById(bodyId) as HTMLElement | null;
      const headerpd = document.getElementById(headerId) as HTMLElement | null;

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show');
          // change icon
          toggle.classList.toggle('bx-x');
          // add padding to body
          bodypd.classList.toggle('body-pd');
          // add padding to header
          headerpd.classList.toggle('body-pd');
        });
      }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link') as NodeListOf<HTMLElement>;

    function colorLink(this: HTMLElement) {
      linkColor.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));
  }

  public Logout() {
    this.cookies.deleteAll();
    this.route.navigate(['/signin']);
  }

  

  
}
