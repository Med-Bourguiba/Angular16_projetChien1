import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chien } from '../model/chien.model';
import { Image } from '../model/image.model';
import { Race } from '../model/race.model';
import { ChienService } from '../services/chien.service';

@Component({
  selector: 'app-add-chien',
  templateUrl: './add-chien.component.html',
  styleUrls: ['./add-chien.component.css']
})
export class AddChienComponent implements OnInit {
  newChien = new Chien();
  message: string="";
  races! : Race[];
  newIdRc! : number;
 newRace! : Race;
 uploadedImage!: File;
 imagePath: any;
  constructor(private chienService: ChienService,
    private router:Router) { 
      

  }

  ngOnInit(): void {
   // this.races = this.raceService.listeRace();
   this.chienService. listeRace().
    subscribe(rc =>{console.log(rc);
      this.races = rc._embedded.races;
      
    });
  }

       addChien(){
            this.newChien.race = this.races.find(cat => cat.idRc
            == this.newIdRc)!;
            this.chienService
            .ajouterChien(this.newChien)
            .subscribe((prod) => {
            this.chienService
            .uploadImageChien(this.uploadedImage,
            this.uploadedImage.name,prod.idChien)
            .subscribe((response: any) => {}
            );
            this.router.navigate(['chiens']);
            });
            }

        onImageUpload(event: any) {
          this.uploadedImage = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(this.uploadedImage);
          reader.onload = (_event) => { this.imagePath = reader.result; }
          }
      

}
