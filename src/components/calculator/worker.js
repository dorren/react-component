/**
 * the class that does the actual math.
 */
class Worker {
  static operands = ["0","1","2","3","4","5","6","7","8","9","."];
  static operators = ["+","−","×","÷","="];
  static unaryOperators = ["%","±"];

  constructor(){
    this.state = 0;
    this.result = 0;
    this.clear();
  }

  isOperand(val){
    return this.constructor.operands.indexOf(val) !== -1;
  }

  isOperator(val){
    return this.constructor.operators.indexOf(val) !== -1;
  }

  isUnaryOp(val){
    return this.constructor.unaryOperators.indexOf(val) !== -1;
  }

  handleUnaryOp(val){
    if(val === "±"){
      let n = parseFloat(this.nums[this.idx]) * (-1);
      this.nums[this.idx] = "" + n;
      this.result = this.nums[this.idx];
    }else if(val === "%"){  // percent
      let n = parseFloat(this.nums[this.idx]) / 100;
      this.nums[this.idx] = n;
      this.result = this.nums[this.idx];
    }
  }

  handleOperand(val){
    this.nums[this.idx] += val;
    this.result = this.nums[this.idx];
  }

  handleOperator(val){
    if(val === "="){

    }else{
      this.operator = val;
    }
  }
  /**
   * states
   *   S0.  start
   *   S1. accepting values for operand 1.
   *   S2. got unary operator.
   *   S3. got operator.
   *   S4. accepting values for operand 2.
   *   S5. got unary operator.
   *   S5. calculated value from operands.
   *
   *   n: operand value
   *   op: operator value
   *   u:  unary operator
   *   =:  equal
   *
   *             /-----n--                     |---<----- n ---<----\
   *             |        \                    v                    |
   *             v     -u-(S2)--op-            |    -u->(S5)--op--> ^
   *               n  /            \            n /               \ |
   * (S0) --n--> (S1) ----- op --> (S3) --n--> (S4) -----op-----> (S6)
   *              ^                  ^             \
   *              \                  \             \->-- = -----> (S7)
   *               \                  \                            /|
   *                \                  \---<-------- op ------<---/ |
   *                 -------------------------------- n -----<------/
   *
   */
  accept(val){
    if(val === "C"){
      this.clear();
      this.result = 0;
      this.state = 0;
    }else if(this.state === 0 && this.isOperand(val)){
      this.state = 1; // 1 now.
      this.handleOperand(val);
    }else if(this.state === 1){
      if(this.isOperand(val)){
        this.handleOperand(val);
      }else if(this.isUnaryOp(val)){
        this.state = 2;
        this.handleUnaryOp(val);
      }else if(this.isOperator(val)){
        this.state = 3;
        this.handleOperator(val);
      }
    }else if(this.state === 2 || this.state === 5){
      if(this.isOperand(val)){
        this.handleOperand(val);
      }else if(this.isUnaryOp(val)){
        this.handleUnaryOp(val);
      }else if(this.isOperator(val)){
        this.state++;
        this.handleOperator(val);
      }
    }else if(this.state === 3){
      if(this.isOperator(val)){
        this.handleOperator(val);
      }else if(this.isOperand(val)){
        this.idx++;
        this.state++;
        this.handleOperand(val);
      }
    }else if(this.state === 4){
      if(this.isOperand(val)){
        this.handleOperand(val);
      }else if(this.isUnaryOp(val)){
        this.state++;
        this.handleUnaryOp(val);
      }else if(this.isOperator(val)){
        this.calc();
        this.clear();
        this.handleOperator(val);
        if(val === "="){
          this.state = 7;
        }else{
          this.nums[0] = this.result;
          this.idx = 1;
          this.state = 6;
        }
      }
    }else if(this.state === 6){
      if(this.isOperand(val)){
        this.state = 4;
        this.handleOperand(val);
      }
    }else if(this.state === 7){
      if(this.isOperand(val)){
        this.state = 1;
        this.handleOperand(val);
      }else if(this.isOperator(val)){
        this.nums[0] = this.result;
        this.idx = 0;
        this.state = 3;
        this.handleOperator(val);
      }
    }

    console.log(`v:${val}, S:${this.state}, idx:${this.idx},`,
                this.nums[0], this.operator, this.nums[1], "=", this.result);
  }

  arrToNum(arr){
    return parseFloat(arr.join(""), 10);
  }

  calc(){
    let a = parseFloat(this.nums[0], 10);
    let b = parseFloat(this.nums[1], 10);

    if(this.operator === "+"){
      this.result = a + b;
    }else if(this.operator === "−"){
      this.result = a - b;
    }else if(this.operator === "×"){
      this.result = a * b;
    }else if(this.operator === "÷"){
      this.result = a / b;
    }else if(this.operator === "%"){
      this.result = a % b;
    }
    return this.result;
  }

  output(){
    return this.result;
  }

  clear(){
    this.nums = ["", ""];  // keep 2 numbers
    this.idx = 0; // current index for the nums above, if operator added, change to 1.
    this.operator = null;
  }
}

export default Worker;
