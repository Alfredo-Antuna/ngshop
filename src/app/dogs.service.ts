import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import DOGS from "./dogdata.json";
import { Dog } from "./dog";


@Injectable({
  providedIn: "root",
})


export class DogsService {
  private dogsData: Dog[] = DOGS;
  constructor() {}
  all(): Observable<Dog[]> {
    return of(this.dogsData);
  }

  get(id: string): Dog {
    for (let dog of this.dogsData) {
      if (dog.id === id) {
        return dog;
      }
    }
  }



}
