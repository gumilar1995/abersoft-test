"use client";

import Form from "@/components/Form";
import style from "./style.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "@/components/Form/InputField";
import TextArea from "@/components/Form/TextArea";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";

type FormValueProps = {
  name: string;
  email: string;
  message: string;
};

const defaultValues: FormValueProps = {
  name: "",
  email: "",
  message: "",
};

export default function ContactUs() {
  const methods = useForm({
    mode: "onChange",
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<FormValueProps> = (
    data,
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();
    alert(`Form Submitted >> ${data.name}, ${data.email}, ${data.message}`);
  };

  return (
    <section className="container py-12">
      <Form
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col lg:justify-between gap-6 lg:gap-0">
          <header className="flex flex-col gap-8 text-center lg:text-left">
            <h1 className="font-bold text-5xl text-abersoft-blue">
              Contact Us
            </h1>
            <p className="lg:max-w-[80%]">
              We know that it sometimes can be hard to know where to start.
              Let’s chat and see if we can help you!
            </p>
          </header>
          <div className="flex items-center justify-around lg:justify-normal lg:gap-16 pb-6">
            <IconButton
              imgSrc="/images/facebook.png"
              href="https://facebook.com"
            />
            <IconButton
              imgSrc="/images/instagram.png"
              href="https://instagram.com"
            />
            <IconButton
              imgSrc="/images/linkedin.png"
              href="https://linkedin.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <InputField name="name" placeholder="Name" required />
          <InputField
            name="email"
            placeholder="Email"
            required
            validation="email"
          />
          <TextArea name="message" placeholder="Message" />
        </div>
        <div className="flex items-center justify-end lg:col-span-2">
          <Button type="submit" disabled={!isValid}>
            Send
          </Button>
        </div>
      </Form>
    </section>
  );
}
