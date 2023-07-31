import * as Filesaver from "file-saver";
import XLSX from "sheetjs-style";

const ExportExcel = ({ excelData, fileName }) => {
  const fileType =
    "application/vnd.openxml formats-officedocument .spreadsheetml. sheet ;charset-UTF-8";
  const fileExtension = ".xlsx";
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    Filesaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <>
      <button
        onClick={(e) => exportToExcel(fileName)}
        className="default-btn btn-style-2 text-white offers_card-content--btn3"
      >
        Download Employees Data
      </button>
    </>
  );
};

export default ExportExcel;
