import React, {FC, ReactElement,useState} from 'react'
interface custom{

}

const Dashboard :FC  = () : ReactElement => {
  const [data,setData] = useState<custom>("");
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard