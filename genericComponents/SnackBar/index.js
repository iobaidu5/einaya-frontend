// import * as React from "react";
// import Snackbar from "@mui/material/Snackbar";
// import Stack from "@mui/material/Stack";
// import MuiAlert from "@mui/material/Alert";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// export function CustomizedSnackbars({
//   open,
//     onClose,
//   //   action,
//   autoHideDuration = 3000,
//   message = "",
//   variant = "", //["success", "info", "error", "warning"]
// }) {
//   return (
//     <Stack spacing={2} sx={{ width: "100%" }}>
//       <Snackbar
//         anchorOrigin={{vertical: "top", horizontal: "right" }}
//         open={open}
//         autoHideDuration={autoHideDuration}
//         onClose={onClose}
//         // action={action}
//       >
//         <Alert
//           onClose={onClose}
//           severity={variant}
//           sx={{ width: "100%" }}
//         >
//           {message}
//         </Alert>
//       </Snackbar>
//     </Stack>
//   );
// }
