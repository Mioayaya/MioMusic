import { Message } from '@arco-design/web-react';
import { FC, useEffect, useMemo, useState } from 'react';

import { HELLOWORDS } from '../../../../../common/sayHello';
import { api } from '../../../../../server';
import { timesMethods } from '../../../../../utils';

import { utilsType } from '../../../../../type';
import { MioWebDiscoverHomeDiv } from './styles';

interface Props  {

}

const MioWebDiscoverHome : FC<Props> = (props) => {
  const [ timeType,setTimeType ] = useState<utilsType.MtimeType>();

  useEffect(() => {
    const ptime = timesMethods.getTimeType();
    setTimeType(ptime);
    test();
  },[])

  const test = async() => {
    try {
      // const { data,response } = await getSonglistDetail(92);
      const { data,response } = await api.getSonglistDetail(948471242);
      data || Message.error(response.status+response.statusText);
      response || console.log(data);      
    } catch(e:any) {
      Message.error(JSON.stringify(e));
    }
  }

  return (
    <MioWebDiscoverHomeDiv>
      <div className="h2">{ timeType&&HELLOWORDS[timeType]}</div>
    </MioWebDiscoverHomeDiv>
  )
}

export default MioWebDiscoverHome