import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CrService } from '../cr.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mech',
  templateUrl: './mech.component.html',
  styleUrls: ['./mech.component.css']
})
export class MechComponent implements OnInit {

	favoriteCR: string;
  crs: string[] = ['Candidate1', 'Candidate2', 'None'];

  constructor(public crService: CrService, public route: ActivatedRoute) { }

  chosenCR(){
  	//console.log("Yaay this worked");
  	this.crService.increaseCount(this.favoriteCR,"mechcr");
  }

  ngOnInit(): void {
  }

}
