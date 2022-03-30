import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';

@Injectable()
export class ErrorService{
	public url: string;

	constructor(
			private _http: HttpClient
		){
		this.url = Global.url;
	}

	getFirstError(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'error/first', {headers: headers});
	}
}