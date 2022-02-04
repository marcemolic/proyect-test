import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginfireService } from '../../auth/services/loginfire.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: LoginfireService, private router: Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.authService.onlogout();
    this.router.navigate(['/login']);
    
  }

}
