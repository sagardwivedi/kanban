import { Logo } from '@/components/Logo';
import { LoginForm } from '@/components/auth/login-form';

export default function Login() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="space-y-5">
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
}
