import React, { useState } from 'react'

const Hello = () => {
    const [showname,setshowname] = useState(false);
  return (
    <>
     <div>profile <button onClick={() => setshowname((prev) => !prev)}>+</button></div>
     {
        showname && <p>name is rahul</p>
     }
    </>
   

  )
}

export default Hello