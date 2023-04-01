import React from "react";
// import { TextField, IconButton, Avatar } from "@mui/material";

export const Input = ({ id, name, label, type = "text", variant = "outlined", style, required, min, max, pattern,
  errors, register, classname, rows, ...props }) => {
  return (<>
    <input
      id={id}
      name={name}
      label={label}
      type={type}
      variant={variant}
      className={classname}
      rows={rows}
      style={type === "textarea" ? { width: "100%", height: "100%", marginBottom: "10px", ...style } : { width: "100%", marginBottom: "10px", ...style }}
      {...register(name,
        {
          required: required ? required === true ? `${label} is Required` : required : false, //should be true, false or custom message
          minLength: min && {
            value: min,
            message: `Minimum Length should be ${min}`
          },
          maxLength: max && {
            value: max,
            message: `Maximum Length should be ${max}`
          },
          pattern: type === "email" & !pattern ? {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          } : pattern && {
            value: pattern,
            message: "invalid Pattern"
          }
        }
      )}
      error={errors?.[name]?.message}
      helperText={errors?.[name]?.message}
      {...props}
    />
    {(["file"].includes(type) && style?.display === 'none') &&
      <label htmlFor={id}>
        {/* <IconButton component="span">
          <Avatar
            alt={label}
            src={`${props?.icon}`}
            sx={{ width: "70px", height: "70px", marginTop: "-5px" }}
          />
        </IconButton> */}
        {errors?.[name] && <span style={{
          color: '#d32f2f', fontFamily: "Roboto, Helvetica,Arial,sans-serif",
          fontWeight: 400,
          fontSize: "0.75rem"
        }}>{errors?.[name]?.message}</span>}
      </label>}
  </>
  );
}

