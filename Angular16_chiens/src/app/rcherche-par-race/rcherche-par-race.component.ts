import { Component, OnInit } from '@angular/core';
import { Chien } from '../model/chien.model';
import { Race } from '../model/race.model';
import { ChienService } from '../services/chien.service';

@Component({
  selector: 'app-rcherche-par-race',
  templateUrl: './rcherche-par-race.component.html',
  styles: [
  ]
})
export class RchercheParRaceComponent implements OnInit {

  chiens!:Chien[];
  races !: Race[];
  IdRace!:number;
  constructor(private chienService : ChienService ){ }

  ngOnInit(): void {
    this.chienService.listeRace().
subscribe(rc => {this.races = rc._embedded.races;
console.log(rc);
});

  }

  onChange(){
    this.chienService.rchercheParRace(this.IdRace).
    subscribe(chien =>{this.chiens=chien});
  }
  chargerChiens(){
    this.chienService.listeChien().subscribe(ch => {
      console.log(ch);
      this.chiens = ch;
      });
    }
    



    
supprimerChien(c: Chien)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.chienService.supprimerChien(c.idChien).subscribe(() => {
console.log("chien supprimé");
this.chargerChiens();
});
} 
  
}
