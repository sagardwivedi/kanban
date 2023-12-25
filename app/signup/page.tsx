import { Logo } from '@/components/Logo';
import { SignUpForm } from '@/components/auth/signup-form';

export default function SignUp() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="space-y-5">
        <Logo />
        <SignUpForm />
      </div>
    </main>
  );
}
