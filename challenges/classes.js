// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cm = new CuboidMakerClass(4, 5, 5);

console.log(cm.volume()); // 100
console.log(cm.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMakerClass with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(size) {
    super(size, size, size);
  }

  volume() {
    return Math.pow(this.size, 3);
  }

  surfaceArea () {
    return 6 * Math.pow(this.size, 2);
  }
}

const cubeMaker = new CubeMaker(10);

console.log(cubeMaker.volume()); 
console.log(cubeMaker.surfaceArea());