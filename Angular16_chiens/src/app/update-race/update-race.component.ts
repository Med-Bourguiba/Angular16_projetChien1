import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Race } from '../model/race.model';

@Component({
  selector: 'app-update-race',
  templateUrl: './update-race.component.html',
  styles: [
  ]
})
export class UpdateRaceComponent implements OnInit {


  @Input()
   race! : Race;
  @Output()
   raceUpdated = new EventEmitter<Race>();

  @Input()
  ajout!:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant updatedRace ",this.race);
  }

  saveRace(){
    this.raceUpdated.emit(this.race);
    }
    

}
