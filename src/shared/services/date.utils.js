export const convertTimeStampToDate = ms => {
  const date = new Date(ms);
  return `${date.getDate()}/${date.getMonth()}`
};