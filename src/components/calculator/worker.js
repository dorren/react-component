/**
 * the class that does the actual math.
 */
class Worker {
  static operands(){
    return ["0","1","2","3","4","5","6","7","8","9","."];
  }

  static operations() {
    return {
      "+": (a,b) => {return a + b; },
      "−": (a,b) => {return a - b; },
      "×": (a,b) => {return a * b; },
      "÷": (a,b) => {return a / b; },
      "=": (a,b) => {return; /* no op*/ },
      "%":  (x)  => {return x / 100; },
      "±":  (x)  => {return x * (-1); },
      "square":  (x)  => {return x * x; },
      "sqrt":    (x)  => {return Math.sqrt(x); },
      "cube":    (x)  => {return Math.pow(x, 3); },
      "10^x":    (x)  => {return Math.pow(10,x); },
      "x^y":   (a,b)  => {return Math.pow(a, b); },
      "e^x":     (x)  => {return Math.exp(x);},
      "1/x":     (x)  => {return 1 / x; },
      "x!":      (x)  => {return this.factorial(x); },
      "Rnd":      ()  => {return Math.random(); }
    };
  }

  static operators(){
    return Object.keys(Worker.operations);
  }

  static binaryOperators() {
    return ["+","−","×","÷","x^y","="];
  }


  static factorial(n){
    let result = 1;
    while(n > 1){
      result = result * n--;
    }
    return result;
  }

  constructor(){
    this.clear();
  }

  calc(){
    let [a,b] = this.nums;

    return this.constructor.operations()[this.operator](a, b);
  }

  output(){
    if(this.state === 0){
      return 0;
    }else if(this.state === 1){
      return this.stack.join("");
    }else{
      return this.nums[this.idx];
    }
  }

  isOperand(val){
    return this.constructor.operands().indexOf(val) !== -1;
  }

  isOperator(val){
    return this.constructor.operators().indexOf(val) !== -1;
  }

  isBinaryOperator(val){
    return this.constructor.binaryOperators().indexOf(val) !== -1;
  }

  doOperand(val){
    this.stack.push(val);
  }

  getNum() {
    if(this.nums[this.idx] === null){
      this.nums[this.idx] = parseFloat(this.stack.join(""), 10);
      this.stack = [];
    }
    return this.nums[this.idx];
  }

  doOperator(val){
    this.getNum();

    if(this.isBinaryOperator(val)){
      if(this.idx === 1){
        this.nums[0] = this.calc();
        this.nums[1] = null;
        this.idx = 0;
      }
      this.operator = val;
    }else{  // unary operator
      let fn = this.constructor.operations()[val];
      if(fn)
        this.nums[this.idx] = fn(this.nums[this.idx]);
    }
  }

  /**
   * states
   *   S1. accepting values for operand 1.
   *   S2. got operator.
   *
   *   n: operand value
   *   op: operator value
   *
   *                / <----- n <-----\
   *               /                  \
   *         n ↻ (S1) ----- op -----> (S2) ↺ op
   *
   */
  accept(val){
    if(val === "C"){
      this.clear();
    }else if( this.state === 1 ){
      if(this.isOperand(val)){
        this.doOperand(val);
      }else{
        this.doOperator(val);
        this.state = 2;
      }
    }else if( this.state === 2 ){
      if(this.isOperand(val)){
        this.idx = (this.idx + 1) % 2;
        this.doOperand(val);
        this.state = 1;
      }else{
        this.doOperator(val);
      }
    }

    console.log(`v:${val}, S:${this.state}, idx:${this.idx}, stack:`,
                 this.stack, 'operands:', this.nums, "op:",this.operator);
  }

  clear(){
    this.state = 1;
    this.stack = []; // accepting operand characters.
    this.nums = [null, null];  // 2 numbers, operand 1, 2
    this.idx = 0;    // index for the nums above, if operator added, change to 1.
    this.operator = null;
  }
}

export default Worker;
