import { Component, OnInit } from '@angular/core';
import { Error } from '../../models/error';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [ErrorService]
})
export class ErrorComponent implements OnInit {

  public errors = "link invalido";
  public error : Error;
  constructor(
      private _errorService: ErrorService
    ) { }

  ngOnInit() {
  }

  getFirstError(){
    this._errorService.getFirstError().subscribe(
      response => {
        this.error = response.error;
      },
      error => {
        console.log("error");
      }
  )}

}
