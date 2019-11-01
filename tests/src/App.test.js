import { total } from './App';

const add = jest.fn(() => 3);

//unit test
//it only tests one thing
test('Add', () =>{
  expect(add(1,2)).toBe(3);
  expect(add(1,2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(2);
  expect(add).toHaveBeenCalledWith(1, 2);
}); 

//integration tests
//tests things working together
/* test('total', () => {
  expect(total(5,20 )).toBe('$25');
}) */
