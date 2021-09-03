



export class User {
  public dogsFav: string[];

  constructor() {
    this.dogsFav = [];
  }

  addFav(newFav: string): void {
    if (this.dogsFav.length === 0 && !this.isRepeat(newFav)) {
      this.dogsFav.push(newFav);
    }
  }

  isRepeat(favDog: string): boolean {
    for (let fav of this.dogsFav) {
      if (fav === favDog) {
        return true;
      }
    }
    return false;
  }
}
