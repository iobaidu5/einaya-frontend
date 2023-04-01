const currencyFormatter = (value) => {
  let currency = new Intl.NumberFormat("ur-PK", {
    style: "currency",
    currency: "PKR",
  });

  return currency.format(value);
};


const fileToBase64 = (file) => {
  return new Promise((resolve) => {
    let baseURL = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};
export { currencyFormatter, fileToBase64 };
