import { utilsType } from "../../type";

export function getTimeType():utilsType.MtimeType {
  let pType:utilsType.MtimeType = 'morning';
  const date = new Date();
  const pHours = date.getHours();
  if(pHours>=5 && pHours <= 10) {
    pType='morning';
  }else if(pHours>=11 && pHours<=14) {
    pType='noon';
  }else if(pHours>=15 && pHours<=18) {
    pType='afternoon';
  }else if(pHours>=19 && pHours<=22) {
    pType='evening';
  }else if((pHours>=23 && pHours<=24) || (pHours>=0 && pHours<= 1)) {
    pType='night';
  }else if(pHours>=2 && pHours<=4) {
    pType='beforeDawn';
  }
  return pType;
}