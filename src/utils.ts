export const getFormattedDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year.toString().slice(-2)}`;
  return formattedDate;
};

export const getTomorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
};
