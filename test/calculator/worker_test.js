import test from 'ava';
import Worker from '../../src/components/calculator/worker';

test("factorial()", t => {
  t.is(Worker.factorial(4), 24);
});
