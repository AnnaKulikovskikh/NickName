// TODO: write your code here
export default class Validator {
  validateUsername(name) {
    const c = /\w/.test(name); // только буквы, цифры, _ и -
    const a = /^[^\d-_]/.test(name); // в начале не цифра, _ или -
    const b = /[^\d-_]$/.test(name); // в конце не цифра, _ или -
    const d = /\d{4,}/g.test(name); // проверка идет ли более 3 цифр подряд
    return a && b && c && !d;
  }
}
