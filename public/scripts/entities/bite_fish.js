class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bite_fish.gif';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
