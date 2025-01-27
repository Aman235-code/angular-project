import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientService = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: ApiResponseModel) => {
      this.employeeList = res.data;
    });
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    this.clientService
      .addClientProject(formValue)
      .subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert('project created ');
        } else {
          alert(res.message);
        }
      });
  }
}
