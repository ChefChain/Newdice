export interface ISignIn {
  email: string;
  password: string;
  authError?: string;
}

export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  authError?: string;
}
