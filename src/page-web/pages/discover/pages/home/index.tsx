import { FC, useEffect, useMemo, useState } from 'react';

import { utilsType } from '../../../../../type';
import { timesMethods } from '../../../../../utils';

import { MioWebDiscoverHomeDiv } from './styles';

interface Props  {

}

const MioWebDiscoverHome : FC<Props> = (props) => {
  const [ timeType,setTimeType ] = useState<utilsType.MtimeType>();

  useEffect(() => {
    const ptime = timesMethods.getTimeType();
  },[])

  return (
    <MioWebDiscoverHomeDiv>
      <div className="h2"></div>
    </MioWebDiscoverHomeDiv>
  )
}

export default MioWebDiscoverHome