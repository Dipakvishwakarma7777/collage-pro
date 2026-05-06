import { useForm } from "react-hook-form";

function EventRegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <input
        {...register("teamName")}
        placeholder="Team Name"
        className="w-full border p-3 mb-4"
      />

      <input
        {...register("members")}
        placeholder="Members"
        className="w-full border p-3 mb-4"
      />

      <button className="bg-blue-600 text-white px-5 py-3 rounded">
        Register Event
      </button>
    </form>
  );
}

export default EventRegistrationForm;
