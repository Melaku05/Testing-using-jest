class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b;
  }
  multiple() {
    return this.a * this.b;
  }
  substract() {
    return this.a - this.b;
  }
  division() {
    return this.a / this.b;
  }
}

module.exports = Calculator;
