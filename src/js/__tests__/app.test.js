import Validator from '../app';
const val = new Validator;

test.each([
  ['Amily'],
  ['Sid_i_comp'],
  ['Ef_435-iop'],
])('sutible nicks', (nick) => {
  expect(val.validateUsername(nick)).toBeTruthy();
});

test.each([
  ['3pigs'],
  ['Mers888'],
  ['_Ura'],
  ['Byaka-'],
  ['B555555555arsik'],
])('unsutible nicks', (nick) => {
  expect(val.validateUsername(nick)).toBeFalsy();
});
