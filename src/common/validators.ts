export const passwordValidation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/;

export const usernameValidation = /^[a-z0-9_-]{3,15}$/;

export const emailValidation = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;