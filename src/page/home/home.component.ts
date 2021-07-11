import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  router: Router;
  constructor(router: Router) {
  this.router = router; {
   
  }
  }
  ngOnInit(): void {
    const token = localStorage.getItem('ial');
    if (token != '555') {
      this.router.navigate(['/login']);
    }
  }

}
