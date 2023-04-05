import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function Contact() {
  const { register, handleSubmit } = useForm();

  const userSchemaContact = yup.object().shape({
    Title: string().required(),
    Message: string().required(),
    Email: string().email(),
    website: string().url().nullable(),
    createdOn: date().default(() => new Date()),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text " placeholder="Title" {...register("Title")} />
        <input type="text" placeholder="Message" {...register("Message")} />
        <input type="email" placeholder="Email" {...register("Email")} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
