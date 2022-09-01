import { useRouter } from "next/router";
import useStore from "../hooks/useStore";

const steps = [
  { step: 1, name: "Menú", url: "/" },
  { step: 2, name: "Resumen", url: "/summary" },
  { step: 3, name: "Datos y Total", url: "/total" },
];

const Steps = () => {
  const { handleChangeStep, step } = useStore();
  const router = useRouter();

  const calculateProgress = () => {
    let value;
    if (step === 1) {
      value = 2;
    } else if (step === 2) {
      value = 50;
    } else {
      value = 100;
    }

    return value;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            className="text-2xl font-bold"
            key={step.step}
            onClick={() => {
              router.push(step.url);
              handleChangeStep(step.step);
            }}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
