import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Admin> {
    return this.http.get<Admin>(`${API_CONFIG.baseUrl}/admins/${id}`);
  }

  findAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${API_CONFIG.baseUrl}/admins`);
  }

  create(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${API_CONFIG.baseUrl}/admins`, admin);
  }

  update(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${API_CONFIG.baseUrl}/admins/${admin.id}`, admin);
  }

  delete(id: any): Observable<Admin> {
    return this.http.delete<Admin>(`${API_CONFIG.baseUrl}/admins/${id}`);
  }
}