/**
 * the class that does the actual math.
 */
class Worker {
  static operands = ["0","1","2","3","4","5","6","7","8","9","."];
  static operators = ["+","−","×","÷","=","%","±",
                      "square", "sqrt", "cube", "x^y", "1/x", "x!",
                      "10^x","Rand"];

  constructor(){
    this.clear();
  }

  factorial(n){
    if(n === 1){
      return 1;
    }else{
      return n * this.factorial(n-1);
    }
  }

  calc(){
    let result = null;
    let [a,b] = this.nums;

    if(this.operator === "+"){
      result = a + b;
    }else if(this.operator === "−"){
      result = a - b;
    }else if(this.operator === "×"){
      result = a * b;
    }else if(this.operator === "÷"){
      result = a / b;
    }else if(this.operator === "%"){
      result = a % b;
    }else if(this.operator === "x^y"){
      result = Math.pow(a, b);
    }
    return result;
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
    return this.constructor.operands.indexOf(val) !== -1;
  }

  isOperator(val){
    return this.constructor.operators.indexOf(val) !== -1;
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

    if(val === "±"){
      this.nums[this.idx] = this.nums[this.idx] * (-1);
    }else if(val === "%"){  // percent
      this.nums[this.idx] = this.nums[this.idx] / 100;
    }else if(val === "square"){
      this.nums[this.idx] = this.nums[this.idx] * this.nums[this.idx];
    }else if(val === "sqrt"){
      this.nums[this.idx] = Math.sqrt(this.nums[this.idx]);
    }else if(val === "cube"){
      this.nums[this.idx] = Math.pow(this.nums[this.idx],3);
    }else if(val === "1/x"){
      this.nums[this.idx] = 1/ this.nums[this.idx];
    }else if(val === "x!"){
      this.nums[this.idx] = this.factorial(this.nums[this.idx]);
    }else if(val === "10^x"){
      this.nums[this.idx] = Math.pow(10, this.nums[this.idx]);
    }else if(val === "Rand"){
      this.nums[this.idx] = Math.random();
    }else if( val === "="){
      this.nums[0] = this.calc();
      this.nums[1] = null;
      this.operator = null;
      this.idx = 0;
    }else{
      if(this.idx === 1){
        this.nums[0] = this.calc();
        this.nums[1] = null;
        this.idx = 0;
      }
      this.operator = val;
    }
  }

  /**
   * states
   *   S0.  start
   *   S1. accepting values for operand 1.
   *   S2. got operator.
   *
   *   n: operand value
   *   op: operator value
   *
   *                        / <----- n <-----\
   *                       /                  \
   * (S0) ----- n -----> (S1) ----- op -----> (S2)
   *
   *
   */
  accept(val){
    if(val === "C"){
      this.clear();
    }else if( this.state === 0 && this.isOperand(val) ){
      this.doOperand(val);
      this.state = 1;
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
    this.state = 0;
    this.stack = []; // accepting operand characters.
    this.nums = [null, null];  // 2 numbers, operand 1, 2
    this.idx = 0;    // index for the nums above, if operator added, change to 1.
    this.operator = null;
  }
}

export default Worker;
