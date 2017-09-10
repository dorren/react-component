import test from 'ava';
import NumNode from '../../src/components/calculator/math/num_node';

test("isRightChild() on leaf", t => {
  let tree = new NumNode(1);
  t.is(tree.isRightChild(), false);
});

test("isRightChild()", t => {
  let tree = new NumNode(1);
  tree.makeRightNode(2);

  let b = tree.right;
  t.is(b.isRightChild(), true);
});

test("toStr()", t => {
  let tree = new NumNode('+');
  tree.makeLeftNode(2);

  t.is(tree.toStr(), "((2) + null)");
});
