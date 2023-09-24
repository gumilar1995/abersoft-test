import { Controller, useFormContext } from "react-hook-form";
import style from "../style.module.css";
import { TextareaHTMLAttributes } from "react";

export type TextAreaProps = {
  name: string;
  required?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  name,
  required = false,
  ...props
}: TextAreaProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: { value: required, message: "This field is required." },
      }}
      render={({ field, fieldState: { error } }) => (
        <div className={style.formControl}>
          <textarea {...field} {...props} />
          {error && <span className="text-red-600">{error.message}</span>}
        </div>
      )}
    />
  );
}
