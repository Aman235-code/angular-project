import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  http = inject(HttpClient);
  ngOnInit(): void {
    alert('Hii');
  }

  // constructor(private http: HttpClient){

  // }

  getAllRoles() {
    // this.http.get();
  }

  firstName: string = 'Angular tutorial';
  angularVersion = 'Version 18';
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = 'button';

  selectedState: string = '';

  showWelcomeAlert() {
    alert('Welcome to Angular 18 tutorial');
  }

  showMessage(message: string) {
    alert(message);
  }
}
