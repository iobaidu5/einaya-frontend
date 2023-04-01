import * as React from "react";

export function AlertDialog({
  open,
  setOpen,
  onClose,
  action, // {title:"button title", onClick:()=>{callback function}}
  cancel = { visibility: false, title: "Cancel", onClick: () => { } },
  heading = "SUCCESS",
  description = "Successfully done.",
  variant = "success", //["success", "info", "error", "warning"]
  maxwidth = "sm", //["sm", "md", "lg"]
  children
}) {
  return (
    <></>
    // <Dialog
    //   open={open}
    //   maxWidth={maxwidth}
    //   fullWidth
    //   aria-labelledby="alert-dialog-title"
    //   aria-describedby="alert-dialog-description"
    // >
    //   <Box sx={{ p: "10px", minHeight: "400px" }}>
    //     <Box textAlign="right">
    //       <Image
    //         src="/assets/images/cancel.svg"
    //         alt=""
    //         onClick={() => {
    //           onClose && onClose();
    //           setOpen(false);
    //         }}
    //         style={{
    //           cursor: "pointer",
    //           transition: "transform 1s",
    //           "&:hover": {
    //             transform: "scale(2,2)",
    //           },
    //         }}
    //         width="51px"
    //         height="51px"
    //         layout="fixed"
    //       />
    //     </Box>
    //     <Box textAlign="center" py={3} px={{ xs: 0, sm: 3 }}>
    //       {imgSrc[variant]}

    //       <Typography
    //         component="h4"
    //         sx={{
    //           color: TITLE_COLOR,
    //           fontWeight: 500,
    //           fontSize: "30px",
    //           mt: "26px",
    //         }}
    //       >
    //         {heading && heading}
    //       </Typography>

    //       <Typography
    //         sx={{
    //           color: TITLE_COLOR,
    //           fontWeight: 500,
    //           fontSize: "18px",
    //           mt: "10px",
    //         }}
    //       >
    //         {description && description}
    //       </Typography>

    //       {children}
    //       <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    //         {cancel.visibility && (
    //           <Button
    //             variant="outlined"
    //             title={cancel?.title || "Cancel"}
    //             onClick={
    //               cancel?.onClick ||
    //               function () {
    //                 setOpen(false);
    //               }
    //             }
    //             sx={{ borderRadius: "20px", mt: 5 }}
    //           />
    //         )}
    //         <Button
    //           variant="contained"
    //           title={action?.title || "Okay"}
    //           onClick={
    //             action?.onClick ||
    //             function () {
    //               setOpen(false);
    //             }
    //           }
    //           sx={{ borderRadius: "20px", mt: 5 }}
    //         />
    //       </Box>
    //     </Box>
    //   </Box>
    // </Dialog>
  );
}
