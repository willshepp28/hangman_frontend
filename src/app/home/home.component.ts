import { Component, OnInit } from '@angular/core';
import { DecodeTokenService } from '../core/helpers/decodeToken/decode-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private decodeToken: DecodeTokenService
  ) { }

  ngOnInit() {

    // we need to get the user name
  }

}
