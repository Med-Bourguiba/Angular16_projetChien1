import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from '../model/race.model';
import { ChienService } from '../services/chien.service';


@Component({
  selector: 'app-liste-races',
  templateUrl: './liste-races.component.html',
  styles: [
  ]
})
export class ListeRacesComponent implements OnInit {
 races!:Race[];
 ajout:boolean=true;
 updatedRc:Race = {"idRc":0,"nomRc":""};
  constructor(private chienService : ChienService,
              private router:Router) { }

  ngOnInit(): void {
    this.chargerRace();
  }
  chargerRace(){
    this.chienService.listeRace().
    subscribe(cats => {this.races = cats._embedded.races;
    console.log(cats);
    });
    
    }
  raceUpdated(rc:Race){
    console.log("Rc updated event",rc);
    this.chienService.ajouterRace(rc).
     subscribe( ()=> this.chargerRace());
    
    
    }
    updateRc(rc:Race) {
      this.updatedRc=rc;
      this.ajout=false; 
      
      }
      

}
