import { Component, OnInit } from '@angular/core';
import { Chien } from '../model/chien.model';
import { ChienService } from '../services/chien.service';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styles: [
  ]
})
export class RechercherParNomComponent implements OnInit {
 nomChien!:string;
 chiens!:Chien[];
 allChiens! :Chien[];
 searchTerm!: string;

  constructor(private chienService : ChienService ) { }

  ngOnInit(): void {
    this.chienService.listeChien().subscribe(prods => {
      console.log(prods);
      this.chiens = prods;
      });
  }

  rechercherChien(){

    this.chienService.rechercherParNom(this.nomChien).
    subscribe(prods => {
    this.chiens = prods;
    console.log(prods)});
  }

  onKeyUp(filterText : string){
    this.chiens = this.allChiens.filter(item =>
    item.nomChien.toLowerCase().includes(filterText));
    }

}
