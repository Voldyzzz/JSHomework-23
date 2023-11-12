class SuperMath {
  constructor() {
    this.x;
    this.y;
    this.znak;
  }

  check(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.znak = obj.znak;

    const isCalculate = confirm(
      `Dou you want to calculate ${this.x} ${this.znak} ${this.y}`
    );

    if (isCalculate) {
      this.calculate();
    } else {
      this.input();
      this.calculate();
    }
  }

  input() {
    this.x = +prompt("Enter x:");
    while (isNaN(this.x)) {
      this.x = +prompt("Enter x:");
    }

    this.y = +prompt("Enter y:");
    while (isNaN(this.y)) {
      this.y = +prompt("Enter y:");
    }

    this.znak = prompt("Enter znak:");
    while (
      this.znak !== "+" &&
      this.znak !== "-" &&
      this.znak !== "*" &&
      this.znak !== "/" &&
      this.znak !== "%"
    ) {
      this.znak = prompt("Enter znak:");
    }
  }

  calculate() {
    let result = 0;
    switch (this.znak) {
      case "+":
        result = this.x + this.y;
        break;
      case "-":
        result = this.x = this.y;
        break;
      case "*":
        result = this.x * this.y;
        break;
      case "/":
        result = this.x / this.y;
        break;
      case "%":
        result = this.x % this.y;
        break;
    }

    alert(`Result of ${this.x} ${this.znak} ${this.y} = ${result}`);
  }
}

let data = {
  x: 0,
  y: 0,
  znak: "",

  enterValues() {
    this.x = +prompt("Enter x:");
    while (isNaN(this.x)) {
      this.x = +prompt("Enter x:");
    }

    this.y = +prompt("Enter y:");
    while (isNaN(this.y)) {
      this.y = +prompt("Enter y:");
    }

    this.znak = prompt("Enter znak:");
    while (
      this.znak !== "+" &&
      this.znak !== "-" &&
      this.znak !== "*" &&
      this.znak !== "/" &&
      this.znak !== "%"
    ) {
      this.znak = prompt("Enter znak:");
    }
  },
};

const obj = data;
obj.enterValues();

const p = new SuperMath();
p.check(obj);
