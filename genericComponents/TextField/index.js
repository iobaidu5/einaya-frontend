// import React from "react";
// import {
//   TextField,
//   Typography,
//   Box
// } from "@mui/material";
// import { FONT_COLOR } from "../../styles/constants";

// export function PrimaryTextField({
//   id,
//   label,
//   variant,
//   onChange,
//   type,
//   sx,
//   style,
//   required,
//   value,
//   width,
//   name,
// }) {
//   return (
//       <Box>
//         {label && (
//           <Typography sx={{ mb: "10px", color: FONT_COLOR }}>
//             {label}
//           </Typography>
//         )}
//         <TextField
//           hiddenLabel
//           name={name}
//           id={id ? id : "standard-basic"}
//           type={type && type}
//           value={value && value}
//           required={required}
//           onChange={onChange}
//           variant={variant ? variant : "outlined"}
//           sx={sx && sx}
//           style={{ width: width ? width : "273px", ...style }}
//         />
//       </Box>
//   );
// }
