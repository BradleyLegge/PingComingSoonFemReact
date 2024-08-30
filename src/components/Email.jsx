import React from "react";
import { useForm } from "react-hook-form";

const Email = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-info">
        <input
          className={`${"email" in errors ? "error-input" : "input-info"} `}
          type="text"
          name="email"
          placeholder="Your email address..."
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Please provide a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
      <button className="notify-btn">Notify Me</button>
    </form>
  );
};

export default Email;
