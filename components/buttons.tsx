'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export function LoginButton() {
  const { pending } = useFormStatus();

  return <Button isSubmitting={pending} text="Login" type="submit" />;
}

export function SignUpButton() {
  const { pending } = useFormStatus();

  return <Button isSubmitting={pending} text="Sign Up" type="submit" />;
}
