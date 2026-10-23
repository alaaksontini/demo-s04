import { useFormContext } from "react-hook-form";
import type { MSFormData } from "./MSFormSchema";

function StepThree() {
  const { getValues, handleSubmit } = useFormContext<MSFormData>();
  const values = getValues();

  const submitHandler = (data: MSFormData) => {
    console.log(data);
  };

  const recap = [
    { label: "Nom", value: values.nom },
    { label: "Prenom", value: values.prenom },
    { label: "Age", value: values.age },
    { label: "Annees Etudes", value: values.aneesEtudes },
    { label: "Diplome", value: values.diplome },
  ];

  return (
    <>
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Recapitulatif</h2>
        <dl className="divide-y divide-gray-200 rounded-lg border border-gray-200">
          {recap.map((item) => (
            <div key={item.label} className="flex justify-between p-3">
              <dt className="text-sm font-medium text-gray-500">
                {item.label}
              </dt>
              <dd className="text-sm font-semibold text-gray-900">
                {String(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        type="button"
        onClick={handleSubmit(submitHandler)}
        className="w-full cursor-pointer rounded-md bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700"
      >
        Submit
      </button>
    </>
  );
}

export default StepThree;
