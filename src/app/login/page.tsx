import { Logo } from '@/components/Logo';
import { LoginForm } from '@/components/ui/login/login-form';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-[90%] max-w-sm space-y-5">
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
}
