import { TestBed } from "@angular/core/testing";
import { DogsService } from "./dogs.service";
import { Dog } from "./dog";

describe("DogsService", () => {
  let service: DogsService;
  let dog: Dog;

  const data =
    '[{"id": "4ziNJuYbfDius", "name": "relaxed bull dog GIF", "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif", "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif"}, {"id": "UlQI7xt5R2iuk", "name": "bull dog sleeping GIF", "thumbnail": "https://media3.giphy.com/media/UlQI7xt5R2iuk/100.gif", "image": "https://media3.giphy.com/media/UlQI7xt5R2iuk/giphy.gif"}]';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsService);
    dog = new Dog();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve all data", () => {
    const dataID = "4ziNJuYbfDius";

    expect(service.get(dataID)).toEqual(JSON.parse(data)[0]);
  });

  it("should retrieve data by each id", () => {
    const dataID = "4ziNJuYbfDius";
    expect(service.get(dataID)).toEqual(JSON.parse(data)[0]);
  });
});
