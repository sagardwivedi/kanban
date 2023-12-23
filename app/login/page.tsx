import { Logo } from '@/components/Logo';
import { LoginForm } from '@/components/login/login-form';

export default function Login() {
  return (
    <main className='flex justify-center items-center h-dvh'>
      <div className='space-y-5'>
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
}
