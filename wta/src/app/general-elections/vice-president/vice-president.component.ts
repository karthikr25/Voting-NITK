import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vice-president',
  templateUrl: './vice-president.component.html',
  styleUrls: ['./vice-president.component.css']
})
export class VicePresidentComponent implements OnInit {
  favoriteVicePresident: string;
  vicepresidents: string[] = ['Candidate1', 'Candidate2', 'None'];
  constructor() { }

  ngOnInit(): void {
  }

}
