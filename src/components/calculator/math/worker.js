import NumNode from './num_node';

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
      "3√":      (x)  => {return Math.pow(x, 1/3); },
      "y√x":     (x,y)=> {return Math.pow(x, 1/y); },
      "cube":    (x)  => {return Math.pow(x, 3); },
      "10^x":    (x)  => {return Math.pow(10,x); },
      "x^y":   (a,b)  => {return Math.pow(a, b); },
      "e^x":     (x)  => {return Math.exp(x);},
      "1/x":     (x)  => {return 1 / x; },
      "x!":      (x)  => {return this.factorial(x); },
      "":      ()  => {return Math.random(); },
      "ln":      (x)  => {return Math.log(x); },
      "log10":   (x)  => {return Math.log10(x); },
      "sin":     (x)  => {return Math.sin(x); },
      "cos":     (x)  => {return Math.cos(x); },
      "tan":     (x)  => {return Math.tan(x); },
      "e":        ()  => {return Math.E; },
      "Pi":       ()  => {return Math.PI; },
      "s2":      (x)  => {return x; } // change state to s2
    };
  }

  static operators(){
    return Object.keys(Worker.operations);
  }

  static binaryOperators() {
    return ["+", "−", "×", "÷", "=", "(",")","x^y", "y√x"];
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
    this.m = 0;       // support mc, m+, m-, mc buttons.
  }

  calc(){
    let [a,b] = this.nums;

    return this.constructor.operations()[this.operator](a, b);
  }

  output(){
    if(this.state === 1){
      return this.stack.join("");
    }else{
      return this.node.isLeaf() ? this.node.value : this.node.left.value;
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

  // empty stack, and set number value.
  setNum(node) {
    if(node.isEmpty() && this.stack.length > 0){
      let n = parseFloat(this.stack.join(""), 10);
      node.value = n;
      this.stack = [];
    }
  }

  doParenthes(op){
    if(op === '('){
      if(this.node.isEmpty()){

      }else{
        this.node = this.node.makeRightNode();
        this.node.scoped = true;
      }
    }
  }

  doOperator(val){
    this.setNum(this.node);
    if(this.isBinaryOperator(val)){
      if(this.node.isRightChild() && this.node.scoped === false){
        this.node = this.node.parent;
        this.node.reduce();
      }
      if(val !== "="){
        if(val === '(' || val === ')'){
          this.doParenthes(val);
        }else{
          this.node.addOperator(val);
        }
      }
    }else{  // unary operator
      let fn = this.constructor.operations()[val];
      if(fn){
        this.node.value = fn(this.node.value);
      }
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
    }else if(val === "mc"){
      this.m = 0;
    }else if(val === "m+"){
      this.accept("s2");
      this.m += this.node.value;
    }else if(val === "m-"){
      this.accept("s2");
      this.m -= this.node.value;
    }else if(val === "mr"){
      this.stack = [this.m];
      if(this.node.isLeaf()){
        this.node.value = null;
      }else {
        this.node = this.node.makeRightNode();
      }
      this.accept("s2");
    }else if( this.state === 1 ){
      if(this.isOperand(val)){
        this.doOperand(val);
      }else{
        this.doOperator(val);
        this.state = 2;
      }
    }else if( this.state === 2 ){
      if(this.isOperand(val)){
        if(this.node.isLeaf()){
          this.node.value = null; // discard old value
        }else{
          this.node = this.node.makeRightNode();
        }
        this.doOperand(val);
        this.state = 1;
      }else{
        this.doOperator(val);
      }
    }

    this.log("accept  ", val);
  }

  log(loc, val){
    console.log(`${loc} v:${val}, S:${this.state}, `,
                `stack:[${this.stack.join(',')}], `,
                `nodes:${this.root.toStr()}, `,
                `curr: ${this.node.toStr()}, m:${this.m}`);
  }

  clear(){
    this.state = 1;
    this.root = new NumNode();
    this.node = this.root;

    this.stack = [];  // accepting operand characters.
  }
}

export default Worker;
