import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foros',
  templateUrl: './foros.component.html',
  styleUrls: ['./foros.component.scss']
})
export class ForosComponent implements OnInit {
  id:number = 1;

  constructor( private router: Router ) { 
    if(this.router.url == "/foro/2"){
      this.id = 2;
    }
  }

  ngOnInit(): void {
  }

  horario(id){
    this.id = id;
  }

}
