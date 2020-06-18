import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  postEmployeeDetail(formData) {
    return this.http.post(environment.apiBaseURL + '/employeedetail', formData);
  }

  putEmployeeDetail(formData) {
    return this.http.put(environment.apiBaseURL + '/employeedetail/' + formData.emplID, formData);
  }

  deleteEmployeeDetail(id) {
    return this.http.delete(environment.apiBaseURL + '/employeedetail/' + id);
  }

  getEmployeeDetailList() {
    return this.http.get(environment.apiBaseURL + '/employeedetail');
  }
}
