import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { DigimonDetailResponse } from '@interfaces/digimon-details-response.interface';
import { DigimonResponse } from '@interfaces/digimon-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {


  constructor(private http: HttpClient) {
  }

  getDigimons(pageSize: number = 20) {
    return this.http.get<DigimonResponse>(`https://digi-api.com/api/v1/digimon?pageSize=${pageSize}`);
  }

  getDigimon(digimonId: number) {
    return this.http.get<DigimonDetailResponse>(`https://digi-api.com/api/v1/digimon/${digimonId}`);
  }

}
