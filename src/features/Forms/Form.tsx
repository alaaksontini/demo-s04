import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { FormSchema, type FormData } from "./schema";
import CustomPasswordInput from "./CustomPasswordInput";
import SkillsInput from "./SkillsInput";

function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { name: "", email: "", password: "", skills: [""] },
    mode: "onBlur",
  });

  const submitHandler = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm"
    >
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          placeholder="Name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          {...register("email")}
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <CustomPasswordInput field={field} error={fieldState.error} />
        )}
      />

      <Controller
        name="skills"
        control={control}
        render={({ field, fieldState }) => (
          <SkillsInput field={field} error={fieldState.error} />
        )}
      />

      <input
        className="w-full cursor-pointer rounded-md bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default Form;
