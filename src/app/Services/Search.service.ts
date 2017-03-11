import {Injectable} from '@angular/core'; 
import {  
    Http,  
    RequestOptionsArgs,
    Headers
     
} from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()

export class Search{
    
    options:RequestOptionsArgs;
    constructor(private http:Http){
    }
    searchBing(query:string){
         var key = "39b4f4e325cb43cd913f5dee4adca5c9";
         this.options= {
            url:"",
            method:'get',
            search:null,
            headers:new Headers({'Ocp-Apim-Subscription-Key':key})
         }
        return this.http.get("https://api.cognitive.microsoft.com/bing/v5.0/search?q="+query, this.options).map(res => res.json());
    }
    searchGoogle(query:string){
        var key = "AIzaSyDgjLQf9Qze5Y1cGukQUN4EBnvKs8SkLgU";
        return this.http.get("https://www.googleapis.com/customsearch/v1?key="+key+"&cx=014887958373586671058%3Aey6po4-oaea&q="+query).map(res => res.json());
    }
}

