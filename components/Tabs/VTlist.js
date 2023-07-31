import React from "react";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left", whiteSpace: "nowrap" }}>
      <button
        className={props.tabName == "Logout" ? "section__Jobs-buttonCompany-red" : "section__Jobs-buttonCompany"}
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#fff", background: "linear-gradient(265.63deg, #0077B6 -16.55%, #51CB20 114.1%)", borderRadius: "40px" }
            : { color: "#1A1A1A", background: "transparent"  } 
        }
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <span>{props.tabName}</span>
          <span className={props?.leading && "leading"}>{props?.leading}</span>
        </div>
        <i className='bx bx-chevron-right tabs_content-icon'></i>
      </button>
    </li>
  );
}

export default VTlist;