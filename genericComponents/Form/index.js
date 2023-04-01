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
                      <textarea
                        className="input"
                        register={register}
                        errors={errors}
                        onChange={(e) => {
                          onChange(e);
                          props?.onChangeHandler && props?.onChangeHandler(e);
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
                    ) : (
                      <input
                        className="input"
                        register={register}
                        errors={errors}
                        onChange={(e) => {
                          onChange(e);
                          props?.onChangeHandler && props?.onChangeHandler(e);
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
              <p className="text-left m-l-5">Accept <span className="color-primary">Terms Of Services </span>And <span className="color-primary">privacy policy</span></p>
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
