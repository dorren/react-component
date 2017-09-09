/**
 * the class that does the actual math.
 */
class Worker {
  static operands = ["0","1","2","3","4","5","6","7","8","9","."];
  static operators = ["+","−","×","÷","="];

  constructor(){
    this.result = 0;
    this.clear();
  }

  isOperand(val){
    return this.constructor.operands.indexOf(val) !== -1;
  }

  isOperator(val){
    return this.constructor.operators.indexOf(val) !== -1;
  }

  accept(val){
    if(val === "="){
      this.calc();
    }else if(val === "C"){
      this.result = 0;
      this.clear();
    }else if(val === "±"){
      let n = parseFloat(this.nums[this.idx]) * (-1);
      this.nums[this.idx] = "" + n;
      this.result = this.nums[this.idx];
    }else if(val === "%"){
      let n = parseFloat(this.nums[this.idx]) / 100;
      this.nums[this.idx] = n;
      this.result = this.nums[this.idx];
    }else if(this.isOperator(val)){
      if(this.operator !== null){
        this.calc();
        this.nums[0] = "" + this.result;
        this.operator = val;
        this.idx = 1;
      }else{
        this.operator = val;
        this.idx++;
      }
    }else if(this.isOperand(val)){
      this.nums[this.idx] += val;
      this.result = this.nums[this.idx];
    }
    console.log(val, ", ", this.nums[0], this.operator, this.nums[1], "=", this.result);
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

    this.clear();
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
