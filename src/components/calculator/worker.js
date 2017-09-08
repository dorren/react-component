/**
 * the class that does the actual math.
 */
class Worker {
  static operands = ["0","1","2","3","4","5","6","7","8","9","."];
  static operators = ["+","−","×","÷","%","±","=","C"];

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
    }else if(this.isOperator(val)){
      this.operator = val;
    }else if(this.isOperand(val)){
      if(this.operator === null){
        this.num1.push(val);
      }else{
        this.num2.push(val);
      }
      this.result = val;
    }
    console.log(val, this.num1, this.operator, this.num2, "=", this.result);
  }

  arrToNum(arr){
    return parseFloat(arr.join(""), 10);
  }

  calc(){
    let a = this.arrToNum(this.num1);
    let b = this.arrToNum(this.num2);

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
    this.num1 = [];
    this.num2 = [];
    this.operator = null;
  }
}

export default Worker;
