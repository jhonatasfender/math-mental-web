export class Random {
  static get progress() {
    let item = this.initLocalStoreOfRandom;
    return item.progress;
  }

  static set progress(val) {
    let item = this.initLocalStoreOfRandom || {};
    item.progress = val;

    localStorage.setItem('random', JSON.stringify(item));
  }

  static getRandomNumbers() {
    let [min, max] = [0, 9];

    return parseInt(Math.random() * (max - min) + min);
  }

  static get initLocalStoreOfRandom() {
    if (!localStorage.getItem('random')) {
      localStorage.setItem('random', JSON.stringify({}));
    }

    return JSON.parse(localStorage.getItem('random'));
  }
}
