import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GeneralService } from '../general.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.css']
})
export class PresidentComponent implements OnInit {
  favoritePresident: string;
  presidents: string[] = ['Candidate1', 'Candidate2', 'None'];
  constructor(public generalService: GeneralService, public route: ActivatedRoute) { }

  chosenPresident(){
  	//console.log("Yaay this worked");
  	this.generalService.increaseCount(this.favoritePresident,"president");
  }

  ngOnInit(): void {
  }

}
