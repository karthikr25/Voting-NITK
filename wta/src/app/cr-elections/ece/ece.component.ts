import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CrService } from '../cr.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class EceComponent implements OnInit {

  favoriteCR: string;
  crs: string[] = ['Candidate1', 'Candidate2', 'None'];

  constructor(public crService: CrService, public route: ActivatedRoute) { }
  
  chosenCR(){
  	//console.log("Yaay this worked");
  	this.crService.increaseCount(this.favoriteCR,"ececr");
  }

  ngOnInit(): void {
  }

}
