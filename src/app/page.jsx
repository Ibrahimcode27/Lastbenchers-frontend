import LoginForm from "../components/login/login.jsx";

export default function Login() {
  return (
    <main>
      <h1 className="text-4xl text-center text-blue-600">
        Hello, welcome to Tech Educa!
      </h1>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <LoginForm />
      </div>
    </main>
  );
}
