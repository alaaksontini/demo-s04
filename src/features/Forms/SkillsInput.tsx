import type { ControllerRenderProps, FieldError } from "react-hook-form";
import type { FormData } from "./schema";

interface Props {
  field: ControllerRenderProps<FormData, "skills">;
  error?: FieldError;
}

function SkillsInput({ field, error }: Props) {
  const skills = field.value as string[];

  const updateSkill = (index: number, value: string) => {
    const next = [...skills];
    next[index] = value;
    field.onChange(next);
  };

  const addSkill = () => field.onChange([...skills, ""]);

  const removeSkill = (index: number) =>
    field.onChange(skills.filter((_, i) => i !== index));

  return (
    <div className="space-y-1">
      <label
        htmlFor="skills"
        className="block text-sm font-medium text-gray-700"
      >
        Skills
      </label>
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            id="skills"
            value={skill}
            onChange={(e) => updateSkill(index, e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
          <button
            type="button"
            onClick={() => removeSkill(index)}
            className="text-sm text-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="text-sm text-amber-600"
      >
        Add Skill
      </button>
      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default SkillsInput;
