import React, { useEffect, useState }  from "react";

const ScreenModify = () =>{

    const [screenSize, setScreenSize] = useState({
            width: window.innerWidth, height: window.innerHeight
        })

        const updateScreenSize = () =>{
            setScreenSize({
                 width: window.innerWidth, height: window.innerHeight
            })
        }

        useEffect(()=>{
            window.addEventListener('resize', updateScreenSize)
            return ()=>{
                window.removeEventListener('resize', updateScreenSize)
            }
        },[])


    return (
        <div className="container">
            Screen Size Modify
            <h5>Width : {screenSize.width}</h5>
            <h5>Height : {screenSize.height}</h5>
        </div>
    )
}
export default ScreenModify