import { Component, Input, OnInit } from "@angular/core";
import { Dog } from "../dog";
import { User } from "../user";
@Component({
  selector: "app-dog",
  templateUrl: "./dog.component.html",
  styleUrls: ["./dog.component.css"],
})
export class DogComponent implements OnInit {
  @Input() dog: Dog;
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
  isRepeat(fav: string): boolean {
    return this.user.isRepeat(fav);
  }

  addFav(newFav: string): void {
    this.user.addFav(newFav);
  }

  shoFav(): string[] {
    return this.user.dogsFav;
  }
//  addLike(): void {
//    this.dog.like +=1;
   
 }
