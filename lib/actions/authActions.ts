import { z } from 'zod';

type State = {
  message?: string;
  errors?: {
    email?: string[] | null;
    password?: string[] | null;
  };
};

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter correct email' })
    .min(1, { message: 'Please enter email' }),
  password: z.string(),
  Rpassword: z.string(),
});

const LoginSchema = FormSchema.omit({ Rpassword: true });

export async function loginAction(
  state: State,
  formData: FormData,
): Promise<State> {
  const validate = LoginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validate.success) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newState: State = {
          message: 'Something went wrong',
          errors: validate.error.flatten().fieldErrors,
        };
        resolve(newState);
      }, 3000);
    });
  }

  const { email, password } = validate.data;

  return new Promise((resolve) => {
    setTimeout(() => {
      const newState: State = {
        message: `Done Well ${email} and ${password}`,
        errors: {},
      };
      resolve(newState);
    }, 3000);
  });
}

const SignUpSchema = FormSchema;

export async function signupAction(
  state: State,
  formData: FormData,
): Promise<State> {
  const validate = SignUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    Rpassword: formData.get('Rpassword'),
  });

  if (!validate.success) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newState: State = {
          message: 'Something went wrong',
          errors: validate.error.flatten().fieldErrors,
        };
        resolve(newState);
      }, 3000);
    });
  }

  const { Rpassword, password, email } = validate.data;

  if (password !== Rpassword) {
    return {
      message: 'Password does not match',
    };
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const newState: State = {
        message: `Done Well ${email} , ${password} and ${Rpassword}`,
      };
      resolve(newState);
    }, 3000);
  });
}
