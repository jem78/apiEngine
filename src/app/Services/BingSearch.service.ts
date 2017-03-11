import {Injectable} from '@angular/core'; 
import {  
    Http,  
    RequestOptionsArgs,
    Headers
     
} from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()

export class BingSearchService{
    key:string
    options:RequestOptionsArgs;
    constructor(private http:Http){
    }
    searchBing(query:string){
         this.key = "39b4f4e325cb43cd913f5dee4adca5c9";
         this.options= {
            url:"",
            method:'get',
            search:null,
            headers:new Headers({'Ocp-Apim-Subscription-Key':this.key})
         }
        return this.http.get("https://api.cognitive.microsoft.com/bing/v5.0/search?q="+query, this.options).map(res => res.json());
    }
}