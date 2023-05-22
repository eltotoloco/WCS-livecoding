import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  name:string='';
  constructor(private router: Router){

  }
  navigate(){
    if(this.name === "bob"){
      this.router.navigate(['/bob/']);
    }
    this.router.navigate(['/wcs/', this.name]);
  }
}
