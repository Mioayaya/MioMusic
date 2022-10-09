import React, { FC,memo } from 'react'

interface Iprops {
  iconName: string;
  color?:string
}

const MioCMIcon:FC<Iprops> = memo((props) => {
  const { iconName } = props;

  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={iconName}></use>
    </svg>
  )
})

export default MioCMIcon