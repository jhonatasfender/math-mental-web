import { Home } from "./start/home";

export class Controllers {
  constructor() {
    this.app = $("#app");
    console.clear();

    new Home(this.app);
  }
}
