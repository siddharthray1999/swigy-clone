import {useRouteError} from "react-router-dom"

const Error = () => {
    const err =useRouteError();
    // console.log(err)
  return (
    <div>Error !! something went wrong siddharth
        <div>{err.status + "+" +err.statusText}</div>
    </div>
  )
}

export default Error;