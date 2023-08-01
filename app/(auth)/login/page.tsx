import React from "react";
import LoginForm from "./form";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className="max-w-4xl mx-auto pt-24">
      <LoginForm />
    </div>
  );
}
