import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  imports: [FormsModule, DatePipe, UpperCasePipe, JsonPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  currentDate: Date = new Date();
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  userList$: Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    debugger;
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert('Client creted');
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure, you want to delete?');
    if (isDelete) {
      console.log('here');
      this.clientService
        .deleteClientById(id)
        .subscribe((res: ApiResponseModel) => {
          if (res.result) {
            alert('Client Deleted');
            this.loadClient();
            this.clientObj = new Client();
          } else {
            alert(res.message);
          }
        });
    }
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }
}
