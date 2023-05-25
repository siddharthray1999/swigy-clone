import React from 'react'
import { useParams } from 'react-router-dom'
const RestrauntMenu = () => {
    const params =useParams();
    console.log(params)
  return (
    <div>RestrauntMenu</div>
  )
}

export default RestrauntMenu