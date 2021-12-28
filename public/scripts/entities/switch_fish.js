class SwitchFish extends Fish {

  onClick(event) {
    this.imageUri = '/images/pink.webp';
    this.makeNewVelocity(50);
  }
}
