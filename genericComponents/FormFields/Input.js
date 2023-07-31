import React from "react";

export const Input = ({
  id,
  name,
  label,
  placeholder,
  endIcon,
  type = "text",
  variant = "filled",
  style,
  required,
  min,
  max,
  pattern,
  errors,
  register,
  defaultValue,
  rows = 1,
  maxrows = 1,
  multiline = false,
  options = [],
  ...props
}) => {
  return (
    <>
      <label
        for={name}
        style={{
          fontFamily: "Ubuntu",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          paddingLeft: "30px"
        }}
      >
        {label}
      </label>
      {type !== "radio" && type !== "dropdown" && type !== "checkbox" ? (
        <>
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            multiline={multiline}
            rows={rows}
            // variant={variant}
            style={{
              width: "100%",
              marginBottom: "10px",
              background: "#F0F0F0",
              height: multiline === true ? "100%" : "45px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              ...style,
            }}
            {...register(name, {
              required: required
                ? required === true
                  ? `${label} is Required`
                  : required
                : false, //should be true, false or custom message
              minLength: min && {
                value: min,
                message: `Minimum Length should be ${min}`,
              },
              maxLength: max && {
                value: max,
                message: `Maximum Length should be ${max}`,
              },
              pattern:
                (type === "email") & !pattern
                  ? {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  }
                  : pattern && {
                    value: pattern,
                    message: "invalid Pattern",
                  },
            })}
            error={errors?.[name]?.message}
            helperText={errors?.[name]?.message}
            {...props}
          />
          {props.chips &&
            props.chips.map((chip) => (
              <span
                label={chip}
                sx={{ mr: 1 }}
                onClick={() => {
                  props?.onChange(chip);
                }}
                color={props?.value == chip ? "warning" : "info"}
              />
            ))}
        </>
      ) : type === "radio" ? (
        <div
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultChecked={defaultValue}
          defaultValue={defaultValue}
          {...props}
        >
          {options?.map(({ value, label }) => {
            return <input value={value} name={value} type="radio" checked={defaultValue} defaultValue={defaultValue}  label={label} />
          })}
        </div>
      ) : type === "checkbox" ? (
        <div className="checkbox">
          <label
            control={<input type="checkbox" />}
            label={placeholder}
          /> {label}
        </div>
      ) : (
        <div fullWidth>
          <select
            // inputProps={{
            //   name: { name },
            //   id: "uncontrolled-native",
            // }}
            defaultValue={defaultValue}
            style={{
              width: "100%",
              marginBottom: "10px",
              background: "#F0F0F0",
              height: multiline === true ? "100%" : "45px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontFamily: "Jost",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#777",
              ...style,
            }}
            {...props}
          >
            {options.map((o) => {
              return <option className="select-option" name={o.value} value={o.value}>&nbsp;&nbsp;{o.value}</option>;
            })}
          </select>
        </div>
      )}
    {(["file"].includes(type) && style?.display === "none") &&
      <label htmlFor={id}>
        {/* <IconButton component="span">
          <Avatar
            alt={label}
            src={`${props?.icon}`}
            sx={{ width: "70px", height: "70px", marginTop: "-5px" }}
          />
        </IconButton> */}
        {errors?.[name] && <span style={{
          color: "#d32f2f", fontFamily: "Roboto, Helvetica,Arial,sans-serif",
          fontWeight: 400,
          fontSize: "0.75rem"
        }}>{errors?.[name]?.message}</span>}
      </label>}
  </>
  );
};
