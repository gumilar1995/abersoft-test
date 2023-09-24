import { ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

export type FormProviderProps = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
  className?: string;
};

export default function Form({
  children,
  methods,
  onSubmit,
  className,
}: FormProviderProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
