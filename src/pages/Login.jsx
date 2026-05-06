import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";

function Login() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold mb-5">Login</h1>

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-3 mb-4"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="w-full border p-3 mb-4"
        />

        <button className="bg-blue-600 text-white w-full p-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
