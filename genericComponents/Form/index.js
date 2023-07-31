import { Controller, useForm as useFormHook } from "react-hook-form";
// import { Input, Button } from "/components";


export const useForm = () => {
  const {
    register,
    reset: setFormValues,
    getValues: getFormValues,
    control,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useFormHook();

  return {
    register,
    control,
    errors,
    setError,
    clearErrors,
    handleSubmit,
    getFormValues,
    setFormValues,
  };
};

export const Form = ({
  register,
  errors,
  control,
  fieldsData,
  actions,
  submitHandler,
  handleSubmit,
  formType,
  rows = 1,
}) => {

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* form fields */}
      <div className="row">
        {fieldsData?.map(({ gridStyle, icon, ...props }) => {
          return (
            <Controller
              key={props?.name}
              name={props?.name}
              control={control}
              render={({ field: { onChange, value = "" } }) => {
                return (
                  <div className={gridStyle}>
                    {props?.type === "textarea" ? (
                      <>
                        <div className="">
                          <label className="input-label">{props.label}</label>
                          <textarea
                            className="input"
                            register={register}
                            errors={errors}
                            rows={rows}
                            style={{ height: "100%" }}
                            onChange={(e) => {
                              onChange(e);
                              props?.onChangeHandler &&
                                props?.onChangeHandler(e);
                            }}
                            {...(props?.type === "file" &&
                              props?.style?.display === "none" && {
                                icon: icon || value,
                              })}
                            {...(!(
                              props?.type === "file" &&
                              props?.style?.display === "none"
                            ) && { value: value })}
                            {...props}
                          ></textarea>
                        </div>
                      </>
                    ) : props?.type === "radio" ? (
                      <>
                        <label className="input-label">{props.label}</label>
                        <div
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultChecked={props.value}
                          {...props}
                        >
                          <div className="d-flex justify-content-start align-items-center gap-5 mb-3">
                            {props?.options?.map(({ value, label }) => {
                              return (
                                <>
                                  <span className="d-flex justify-content-between mx-4">
                                    <input
                                      value={value}
                                      type="radio"
                                      name={props.name}
                                      label={label}
                                      defaultValue={props?.defaultValue}
                                      checked={value === props?.defaultValue}
                                      className="checkbox"
                                    />
                                    <label className="input-label mx-2">
                                      {label}
                                    </label>
                                  </span>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : props.type === "dropdown" ? (
                      <div fullWidth>
                        <label className="input-label mb-3">{props.label}</label>
                        <select
                          defaultValue={props?.defaultValue}
                          className="input"
                          // inputProps={{
                          //   name: { name },
                          //   id: "uncontrolled-native",
                          // }}
                          
                          style={{
                            width: "100%",
                            marginBottom: "10px",
                            background: "#777",
                            fontWeight: 500,
                            ...props.style,
                          }}
                          {...props}
                        >
                          {props?.options.map((o) => {
                            return (
                              <option value={o.value} className="select-option">
                                &nbsp;&nbsp;{o.value}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <>
                        <div className={props?.type === "checkbox" && "checkbox"}>
                          <label className={props?.type === "checkbox" ? "o2 input-label" : "input-label"}> {props.label} </label>
                          <input
                            className={props?.type === "checkbox" ? "o1 input" : "input"}
                            register={register}
                            errors={errors}
                            onChange={(e) => {
                              onChange(e);
                              props?.onChangeHandler &&
                                props?.onChangeHandler(e);
                            }}
                            {...(props?.type === "file" &&
                              props?.style?.display === "none" && {
                                icon: icon || value,
                              })}
                            {...(!(
                              props?.type === "file" &&
                              props?.style?.display === "none"
                            ) && { value: value })}
                            {...props}
                          />
                        </div>
                      </>
                    )}
                  </div>
                );
              }}
            />
          );
        })}
      </div>
      {formType === "login" && (
        <div className="row justify-content-around align-items-center">
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-center">
              <input type="radio" className="radio-btn" /> &nbsp;&nbsp;
              <p className="text-center"> Keep me logged in</p>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-center">
              <a href="">Forgot your password?</a>
            </p>
          </div>
        </div>
      )}
      {formType === "contact" && (
        <div className="row justify-content-around align-items-center">
          <div className="col-md-12">
            <div className="d-flex justify-content-start align-items-center ">
              <p className="text-left m-l-5">
                Accept <span className="color-primary">Terms Of Services </span>
                And <span className="color-primary">privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* form actions */}
      <div className="row justify-content-center align-items-center mt-3">
        {actions?.map(({ type = "button", title, gridStyle, ...props }) => {
          return (
            <div {...gridStyle} key={props?.name}>
              <button
                className="default-btn btn-style-2"
                type={type}
                {...props}
              >
                {title}
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
};
