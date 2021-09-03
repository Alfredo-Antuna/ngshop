import { Component, OnInit } from "@angular/core";
import { DogsService } from "../dogs.service";
import { Dog } from "../dog";
import { User } from "../user";
@Component({
  selector: "app-dogs-list",
  templateUrl: "./dogs-list.component.html",
  styleUrls: ["./dogs-list.component.css"],
})
export class DogsListComponent implements OnInit {
  public dogs: Dog[];
  private user: User = new User();
  constructor(private dogService: DogsService) {}

  ngOnInit(): void {
    this.dogService.all().subscribe((data) => (this.dogs = data));
  }

  
}
