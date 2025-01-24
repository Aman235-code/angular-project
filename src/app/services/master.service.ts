import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getDesignations(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + 'GetAllDesignation'
    );
  }
}
