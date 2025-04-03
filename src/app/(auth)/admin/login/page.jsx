'use client';

import { useRouter } from 'next/navigation';
import '@/app/(auth)/admin/login/login.css';

export default function Login() {
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // 인증 로직 제거, 바로 /dashboard로 이동
        router.push('/dashboard');
    };

    return (
        <main className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">UserId</label>
                    <input type="text" id="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p>
               비밀번호를 잊어버리셨나요? <a href="/member/join">비밀번호 찾기</a>
            </p>
        </main>
    );
}