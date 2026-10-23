import type { ControllerRenderProps, FieldError } from "react-hook-form";
import type { FormData } from "./schema";

interface Props {
  field: ControllerRenderProps<FormData, "password">;
  error?: FieldError;
}

function CustomPasswordInput({ field, error }: Props) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-gray-700"
      >
        Password
      </label>
      <input
        id={field.name}
        {...field}
        type="password"
        placeholder="Password"
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
      />
      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default CustomPasswordInput;
