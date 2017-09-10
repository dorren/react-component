import test from 'ava';
import Worker from '../../src/components/calculator/math/worker';

test("factorial()", t => {
  t.is(Worker.factorial(4), 24);
});
