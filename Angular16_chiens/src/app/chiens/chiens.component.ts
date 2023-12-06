import { Component, OnInit } from '@angular/core';
import { Chien } from '../model/chien.model';
import { Image } from '../model/image.model';
import { AuthService } from '../services/auth.service';
import { ChienService } from '../services/chien.service';


@Component({
  selector: 'app-chiens',
  templateUrl: './chiens.component.html',
  styleUrls: ['./chiens.component.css']
})
export class ChiensComponent implements OnInit {
  chiens !: Chien[];
  apiurl:string='http://localhost:8888/chiens/api';
  constructor( private chienService: ChienService,
                public authService: AuthService) {
   }
 
  ngOnInit(): void {
    this.chargerChiens();
    }
    

  chargerChiens(){
        this.chienService.listeChien().subscribe(prods => {
        this.chiens = prods;
        this.chiens.forEach((prod) => {
        prod.imageStr = 'data:' + prod.images[0].type + ';base64,' +
        prod.images[0].image;
        });
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
