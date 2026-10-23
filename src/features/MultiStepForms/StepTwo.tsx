import { useFormContext } from "react-hook-form";
import type { MSFormData } from "./MSFormSchema";

function StepTwo({
  nextStepHandler,
}: {
  nextStepHandler: (step: number) => void;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<MSFormData>();

  return (
    <>
      <div>
        <label htmlFor="aneesEtudes">
          Anee Etudes
          <input
            type="number"
            {...register("aneesEtudes", { valueAsNumber: true })}
          />
          {errors.aneesEtudes && <span>{errors.aneesEtudes.message}</span>}
        </label>
      </div>

      <div>
        <label htmlFor="diplaome">
          Diplome
          <input type="text" {...register("diplome")} />
          {errors.diplome && <span>{errors.diplome.message}</span>}
        </label>
      </div>

      <button className="bg-amber-400 p-2" onClick={() => nextStepHandler(1)}>
        Next
      </button>
    </>
  );
}
export default StepTwo;
