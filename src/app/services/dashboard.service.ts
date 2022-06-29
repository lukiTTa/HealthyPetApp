import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/dashboard'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getPetsCount(): Observable<any> {
    return this.http.get(`${baseUrl}/petCount`);
  }

  getClientesCount(): Observable<any> {
    return this.http.get(`${baseUrl}/clienteCount`);
  }

  getConsultasCount(): Observable<any> {
    return this.http.get(`${baseUrl}/consultaCount`);
  }

  getDiagnosticosCount(): Observable<any> {
    return this.http.get(`${baseUrl}/diagnosticoCount`);
  }
}
