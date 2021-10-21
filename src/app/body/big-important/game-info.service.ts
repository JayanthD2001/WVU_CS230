
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BigImportant } from "./big-important.model";

@Injectable({providedIn: 'root'})
export class GameInfoService {
    private baseUrl:string = 'https://epicgames-app-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'games.json';
    
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<BigImportant []>(this.baseUrl + this.myInfoEndpoint);
    }
}