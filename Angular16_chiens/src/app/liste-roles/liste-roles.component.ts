import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-roles',
  templateUrl: './liste-roles.component.html',
  styleUrls: ['./liste-roles.component.css'],
})
export class ListeRolesComponent implements OnInit {
  role!: Role[];
  updatedRole: Role = { role_id: 0, role: '' };
  ajout: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.chargerRole();
  }

  chargerRole() {
    this.authService.ListOfRoles().subscribe((rol) => {
      this.role = rol;
    });
  }

  RoleUpdated(rol: Role) {
    console.log('Hany lenna', rol);
    this.authService.ajouterRole(rol).subscribe(() => this.chargerRole());
  }

  updateRole(cat: Role) {
    this.updatedRole = cat;
    this.ajout = false;
  }
}
