export const validators = {
  nameValidator: (value) => /^[A-Z][a-z]+ [A-Z][a-z]+$/.test(value),
  emailValidator: (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value),
  phoneValidator: (value) => /^\d{10}$/.test(value),
  addressValidator: (value) => value.trim().length > 10,
  passwordValidator: (value) => /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,}$/.test(value),
};