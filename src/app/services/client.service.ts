import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment';
import { ApiResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + 'GetAllClients'
    );
  }

  getAllUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAllEmployee(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + 'GetAllEmployee'
    );
  }

  addUpdate(obj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(
      environment.API_URL + 'AddUpdateClient',
      obj
    );
  }

  deleteClientById(id: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(
      environment.API_URL + 'DeleteClientByClientId?clientId=' + id
    );
  }

  addClientProject(obj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(
      environment.API_URL + 'AddUpdateClientProject',
      obj
    );
  }
}
