import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Currency } from './currency';

@Injectable()
export class CurrencyService {
  private currencyUrl = 'http://cartola-pge-api.herokuapp.com/api/v1/currencies';
  // private currencyUrl = 'http://localhost:3000/api/v1/currencies';

  constructor(
    private http: Http,
  ) {}

  getCurrencies(): Observable<Currency[]> {
    return this.http.get(this.currencyUrl)
                      .map((response: Response) => <Currency[]>response.json())
  }
}
