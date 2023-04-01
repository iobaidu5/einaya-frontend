import React from "react";

export function CustomButton({ title, icon, ...props }) {
  return (
    <>
      <button className="navbar-toggler" type="button" {...props}>
        {title}
        {icon}
      </button>
    </>
    // <Button
    //   {...props}
    // >
    //   {title}
    // </Button>
  );
}
