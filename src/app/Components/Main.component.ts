import {Component} from '@angular/core';
import {Search} from '../Services/Search.service';
@Component({
    selector:'Search-wrapper',
    template:`
        
            <section id = "search">
                <input type = "text" name="query" #theQuery [(ngModel)]="query" /><br/>
                <button (click)="exeSearch(theQuery.value)">Search The Web</button>
            </section>
                
            <nav id = "engineNavigtionWrapper">
                <ul>
                    <li *ngFor = "let engine of engines" class="engineNav" (click)="switchEngine(engine)" >
                        {{engine}}
                        
                    </li>
                </ul>
            </nav>
            
            <section id = "google" class = "results" *ngIf="currentEngine=='Google'">

                <ul>
                    <li *ngFor="let link of googleResults">
                        <a href={{link.link}} >{{link.title}}</a>
                        <p [innerHTML]= "link.htmlSnippet" ></p>
                        <hr/>
                        <br/>
                    </li>
                </ul>

            </section>

            <section id = "bing" class = "results" *ngIf="currentEngine=='Bing'">

                <ul>
                    <li *ngFor="let link of bingResults">
                        <a href={{link.displayUrl}} >{{link.name}}</a>
                        <p [innerHTML]= "link.snippet" ></p>
                        <hr/>
                        <br/>
                    </li>
                </ul>

            </section>
                
           
             `,
    providers:[Search]
})

export class MainSearch{
  
   engines:string[];
   bingResults:{}[];
   googleResults:{}[];
   currentEngine:string;
    constructor(private search:Search){
        this.engines = ["Google", "Bing"];
        this.currentEngine = this.engines[0];
    }

    exeSearch( thisQuery:string){
        if( thisQuery === "" ){
            return;
        }
        this.search.searchBing(thisQuery).subscribe(posts => { console.log(posts); this.bingResults = posts.webPages.value;  } );
        this.search.searchGoogle(thisQuery).subscribe(posts=>{ console.log(posts); this.googleResults = posts.items });
    }

    switchEngine(engine:string){
        this.currentEngine = engine;
    }

}

