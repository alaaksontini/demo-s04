import { FormProvider, useForm } from "react-hook-form";
import { MSFormSchema, type MSFormData } from "./MSFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import StepOne from "./StepOne";
import { useState } from "react";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function MSForms() {
  const [step, setStep] = useState(0);
  const methods = useForm<MSFormData>({
    resolver: zodResolver(MSFormSchema),
  });

  const stepFields = [
    ["nom", "prenom", "age"],
    ["aneesEtudes", "diplome"],
  ] as const;

  const nextStep = async (currentStep: number) => {
    const valid = await methods.trigger(stepFields[currentStep]);
    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      {step === 0 && <StepOne nextStepHandler={nextStep} />}
      {step === 1 && <StepTwo nextStepHandler={nextStep} />}
      {step === 2 && <StepThree />}
    </FormProvider>
  );
}

export default MSForms;
// 1. Info perso
// 2. education
// 3. resume et validation
