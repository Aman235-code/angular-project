import { Component } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  clientObj: Client = new Client();
  clientList: Client[] = [];


  onSaveClient() {
    
  }
}
