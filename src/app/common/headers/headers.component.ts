import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getUser(userName){
    this.router.navigate(['/getUser',userName])
  }

}
