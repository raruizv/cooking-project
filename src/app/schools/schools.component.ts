import { Component, OnInit } from '@angular/core';

import { CookSchool } from '../cookSchool';
import { CookSchoolService } from '../cook-school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit{
  
  schools: CookSchool[] = [];  
  constructor (private cookschoolService: CookSchoolService) { }

  ngOnInit() { 
    this.getSchools();
  }

  getSchools(): void {
    this.cookschoolService.getSchools()
      .subscribe(schools => this.schools = schools);
  }
}
