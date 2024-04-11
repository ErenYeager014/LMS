export const createFormData = (values: any) => {
  const new_data = new FormData();
  let value = Object.entries(values);
  value.forEach((item) => {
    if (Array.isArray(item[1])) {
      item[1].forEach((data) => {
        console.log(item[0]);
        new_data.append(item[0], data);
      });
    } else {
      new_data.append(item[0], item[1]);
    }
  });
  return new_data;
};
