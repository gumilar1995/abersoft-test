import { Controller, ValidationRule, useFormContext } from "react-hook-form";
import style from "../style.module.css";
import { HTMLInputTypeAttribute, InputHTMLAttributes, useMemo } from "react";

export type InputFieldProps = {
  name: string;
  validation?: HTMLInputTypeAttribute | "phone";
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

type FieldPatternRules = Map<
  HTMLInputTypeAttribute | "phone",
  ValidationRule<RegExp> | undefined
>;

export default function InputField({
  name,
  validation,
  required = false,
  type = "text",
  ...props
}: InputFieldProps) {
  const { control } = useFormContext();

  const fieldPatternRules: FieldPatternRules = new Map();
  fieldPatternRules.set("email", {
    value:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please enter a valid email (e.g., example@mail.com).",
  });

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: { value: required, message: "This field is required." },
        pattern: validation && fieldPatternRules.get(validation),
      }}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={style.formControl}>
            <input
              {...field}
              type={type}
              min={type === "number" ? 0 : undefined}
              {...props}
            />
            {error && <span className="text-red-600">{error.message}</span>}
          </div>
        );
      }}
    />
  );
}
