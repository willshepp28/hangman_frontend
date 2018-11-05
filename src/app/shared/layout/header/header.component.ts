import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
  }

}
