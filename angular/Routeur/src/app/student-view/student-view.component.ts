import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  name:string | null ='';
  age:number | null = null;
  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.name = params.get("studentName");
    })
  }

}
