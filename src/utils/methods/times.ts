import { utilsType } from "../../type";

export function getTimeType():utilsType.MtimeType {
  let pType = '';
  const date = new Date();
  console.log(date.getHours());
  return 'afternoon';
}