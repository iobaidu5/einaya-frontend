import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const CustomTable = ({
  columns,
  tableData,
  title,
  method,
  options,
  setSelected = (values) => console.log("selected records", values),
  selectionCheck = {
    key: null, // string
    value: null, // string
    check: "equal", //["equal", "notEqual"]
  },
  selectableRows = "multiple",
}) => {
  const theme = createTheme({
    components: {
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            backgroundColor: "#0077B6",
            color: "#fff !important",
            fontSize: "15px",
            fontWeight: "600",
            zIndex: 0,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          footer: {
            borderBottom: "none",
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:hover": {
              "&:nth-of-type(odd)": {
                backgroundColor: "#FAFAFA",
              },
              "&:nth-of-type(even)": {
                backgroundColor: "#fff",
              },
            },
          },
        },
      },
      MUIDataTable: {
        styleOverrides: {
          root: {
            boxShadow: "unset",
            border: "1px solid #C2C2C2",
            borderRadius: "10px",
          },
        },
      },
      MUIDataTableHeadRow: {
        styleOverrides: {
          root: {
            backgroundColor: "#0077B6",
          },
        },
      },
      MUIDataTableSelectCell: {
        styleOverrides: {
          headerCell: {
            backgroundColor: "#0077B6",
          },
        },
      },
      MUIDataTableSelectCell: {
        styleOverrides: {
          headerCell: {
            backgroundColor: "#0077B6",
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "rgba(0,0,0,0.4)",
          },
        },
      },
      MUIDataTableBodyRow: {
        styleOverrides: {
          root: {
            color: "#000",
            fontSize: "13px",
            fontWeight: "500",
            "&:nth-of-type(odd)": {
              backgroundColor: "#FAFAFA",
            },
            "&:nth-of-type(even)": {
              backgroundColor: "#fff",
            },
            // hide last border
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          },
        },
      },
    },
  });

  const [pagination, setPagination] = useState({ pageNo: 0, pageSize: 10, changedColumn: null, sortingOrder: null });
  const [data, setData] = useState([]);

  // const options = {
  //   selectableRows: selectableRows,
  //   filterType: "checkbox",
  //   isRowSelectable: (a) => {
  //     if (selectionCheck?.key !== null && selectionCheck?.value !== null) {
  //       return selectionCheck?.check === "equal"
  //         ? tableData?.content?.[a]?.[selectionCheck?.key]?.toLowerCase() ===
  //             selectionCheck?.value?.toLowerCase()
  //         : tableData?.content?.[a]?.[selectionCheck?.key]?.toLowerCase() !==
  //             selectionCheck?.value?.toLowerCase();
  //     } else {
  //       return true;
  //     }
  //   },
  //   serverSide: Array.isArray(tableData) ? false : true,
  //   rowsPerPage: pagination?.pageSize || 10,
  //   rowsPerPageOptions: [5, 10, 20, 50, 100],
  //   count: Array.isArray(tableData)
  //     ? tableData?.length
  //     : tableData?.totalNoOfElements || 0,
  //   jumpToPage: true,
  //   onChangePage(pageNo) {
  //     setPagination({ ...pagination, pageNo: pageNo });
  //   },
  //   onChangeRowsPerPage(pageSize) {
  //     setPagination({ ...pagination, pageSize: pageSize });
  //   },
  //   onRowSelectionChange: (currentSelect, allSelected, indexes) => {
  //     setSelected(
  //       indexes?.map((item) =>
  //         Array.isArray(tableData)
  //           ? tableData?.[item]
  //           : tableData?.content?.[item]
  //       )
  //     );
  //   },
  //   onColumnSortChange: (changedColumn, direction) => {
  //     setPagination({ ...pagination, sortingFieldName: changedColumn, sortingOrder: direction });
  //   },
  //   onRowsDelete(a, b, c, d) {
  //     // console.log("testing onRowsDelete", a, b, c, d);
  //   },
  // };

  useEffect(() => {
    method && method({ ...pagination });
  }, [pagination]);

  useEffect(() => {
    setData(Array.isArray(tableData) ? tableData : tableData?.content || []);
  }, [tableData]);

  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
};
