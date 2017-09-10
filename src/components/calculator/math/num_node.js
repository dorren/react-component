import Worker from './worker';

/**
 * because of parethesis, this data struct is used to represent calculator input.
 * root is operator, left and right are operand.
 */
class NumNode {
  constructor(value=null){
    this.value = value;
    this.left  = null;
    this.right = null;
    this.parent = null; // traverse up.
    this.scoped = false;  // if has parenthesis
  }

  makeLeftNode(value){
    let node = new NumNode(value);
    this.left = node;
    node.parent = this;

    return node;
  }

  makeRightNode(value){
    let node = new NumNode(value);
    this.right = node;
    node.parent = this;

    return node;
  }

  addOperator(op){
    this.makeLeftNode(this.value);
    this.value = op;
    return this;
  }

  isLeaf(){
    return this.left === null && this.right === null;
  }

  isEmpty(){
    return this.isLeaf() && this.value === null;
  }

  isRightChild(){
    return this.parent !== null && this.parent.right === this;
  }

  solve(){
    if(this.isLeaf()){
      return this.value;
    }

    let a = this.left.solve();
    let b = this.right.solve();

    return Worker.operations()[this.value](a, b);
  }

  reduce(){
    this.value = this.solve();
    this.left = null;
    this.right = null;
    this.scoped = false;

    return this;
  }

  toStr(node=this){
    if(node === null){ return null; }

    let str = node.value;
    if(!node.isLeaf()){
      let a = node.toStr(node.left);
      let b = node.toStr(node.right);
      str = `${a} ${str} ${b}`;
    }

    str = node.scoped ?  `[${str}]` : `(${str})`;
    return str;
  }
}

export default NumNode;
