import React, {useState} from 'react'

const Mode = () => {

    const [icon, seticon] = useState(" ");
    function change() {
        seticon(!icon)
    }
  return (
    <div onClick={change} style={{padding:"8px", borderRadius:"50px", backgroundColor:"white", zIndex:"9999", position:"fixed", right: "1rem", top : "50%" }} >
        <i className={`fa-solid fs-2 ${(icon ? 'fa-moon' : 'fa-sun' )}`}></i>
    
    </div>
  )
}

export default Mode