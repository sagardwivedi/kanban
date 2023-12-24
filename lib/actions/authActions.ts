import { z } from 'zod';
import { delay } from '../utils';

interface State {
  message?: string;
  errors?: {
    email?: string[];
    password?: string[];
    Rpassword?: string[];
  };
}

const FormSchema = z.object({
  email: z.string().email(),
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
    return delay(
      {
        message: 'Something went wrong',
        errors: validate.error.flatten().fieldErrors,
      },
      3000,
    );
  }

  const { email, password } = validate.data;

  return delay(
    {
      message: `Done Well ${email} and ${password}`,
      errors: {},
    },
    3000,
  );
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
    return delay(
      {
        message: 'Something went wrong',
        errors: validate.error.flatten().fieldErrors,
      },
      3000,
    );
  }

  const { Rpassword, password, email } = validate.data;

  if (password !== Rpassword) {
    return delay(
      {
        message: 'Password does not match',
        errors: {
          password: ['Password does not match'],
          Rpassword: ['Password does not match'],
        },
      },
      3000,
    );
  }

  return delay(
    {
      message: `Check your email`,
      errors: {},
    },
    3000,
  );
}
