import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  det: any;

  constructor(private route:Router,private DetailsService:DetailsService) { }

  ngOnInit() {
    this.DetailsService.showhill().subscribe(data=>{
      console.log(data)
      this.det = data;
      
    })
  }

}
