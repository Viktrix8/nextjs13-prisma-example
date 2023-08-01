import React from "react";
import RegisterForm from "./form";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <div className="max-w-4xl mx-auto pt-24">
      <RegisterForm />
    </div>
  );
}
