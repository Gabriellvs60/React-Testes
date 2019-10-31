import { add, total } from './App';

//unit test
//it only tests one thing
test('Add', () =>{
  expect(add(1,2)).toBe(3);
}); 

test('total', () => {
  expect(total(5,20 )).toBe('$25');
})
