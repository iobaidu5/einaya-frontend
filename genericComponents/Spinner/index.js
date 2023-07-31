import { useState, CSSProperties } from "react";
import { DotLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import { useTheme } from "@mui/material/styles";

const override = {
  position: "absolute",
  top: "40%",
  left: "46%",
  right: "auto",
  display: "block",
  margin: "0 auto",
  color: "#51CB20",
  zIndex: "10000",
};

const Spinner = () => {
  let [color, setColor] = useState("#0077B6");
  const { loading } = useSelector((state) => state.alerts);
  const theme = useTheme();

  return (
    <div className="spinner-bg">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading ?? false}
      >
        <div className="spinner">
          <DotLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="DotLoader"
            data-testid="loader"
          />
        </div>
      </Backdrop>
    </div>
  );
};

export default Spinner;
