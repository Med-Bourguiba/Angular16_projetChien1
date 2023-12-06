import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from '../model/role.model';

@Component({
  selector: 'app-update-roles',
  templateUrl: './update-roles.component.html',
  styleUrls: ['./update-roles.component.css']
})
export class UpdateRolesComponent implements OnInit {
  

    @Input()
    role ! : Role ;
    @Input()
    ajout!:boolean
    @Output()
     RoleUpdated= new EventEmitter<Role>();
    
    
      constructor() { }
    
      ngOnInit(): void {
        console.log("ngOnInit du composant UpdateRole ",this.role);
      }
      saveRole(){
    this.RoleUpdated.emit(this.role);
    
      }
    
    }
  