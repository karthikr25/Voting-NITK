import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CrService } from '../cr.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {
	favoriteCR: string;
  crs: string[] = ['Candidate1', 'Candidate2', 'None'];
  
  constructor(public crService: CrService, public route: ActivatedRoute) { }

  chosenCR(){
  	//console.log("Yaay this worked");
  	this.crService.increaseCount(this.favoriteCR,"csecr");
  }
  ngOnInit(): void {
  }

}
