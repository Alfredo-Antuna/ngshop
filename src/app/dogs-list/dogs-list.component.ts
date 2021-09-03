import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  public dogs: Dog[];
  constructor(private dogService: DogsService) { }

  ngOnInit(): void {
    this.dogService.all().subscribe(data => this.dogs = data);
  }

}
