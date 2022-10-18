import { TIMETYPEDATA } from "../../common/timeTypeData";
import { utilsType } from "../../type";

export function getTimeType():utilsType.MtimeType {
  const date = new Date();
  const pHours = date.getHours();
  return TIMETYPEDATA[pHours];
}
