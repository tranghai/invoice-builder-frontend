import { Component, OnInit } from '@angular/core';
import { JwtService } from '../core';

@Component({
  selector: 'app-invoice-builder',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private jwtService: JwtService) { }

  ngOnInit() {
    console.log(this.jwtService.getToken());
  }

}
