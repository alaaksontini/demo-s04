import { useFormContext } from "react-hook-form";
import type { MSFormData } from "./MSFormSchema";

function StepOne({
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
        <label htmlFor="nom">
          Nom
          <input type="text" {...register("nom")} />
          {errors.nom && <span>{errors.nom.message}</span>}
        </label>
      </div>

      <div>
        <label htmlFor="prenom">
          Prenom
          <input type="text" {...register("prenom")} />
          {errors.prenom && <span>{errors.prenom.message}</span>}
        </label>
      </div>

      <div>
        <label htmlFor="age">
          age
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <span>{errors.age.message}</span>}
        </label>
      </div>

      <button className="bg-amber-400 p-2" onClick={() => nextStepHandler(0)}>
        Next
      </button>
    </>
  );
}
export default StepOne;
