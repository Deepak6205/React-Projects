/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";



// export default function RandomColor(){
//     const [typeOfColor,setTypeOfColor] = useState('hex');
//     const [color,setColor] = useState("#000000");


//     function randomColorUtility(length){
//         return Math.floor(Math.random()*length);
//     }

//     function handleCreateRandomHexColor(){
//         const hex = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
//         let hexColor = "#";
//         for(let i = 0; i < 6; i++){
//             hexColor += hex[randomColorUtility(hex.length)];
//         }
        
//         setColor(hexColor);
//     }


//     function handleCreateRandomRgbColor(){
//         const r = randomColorUtility(256);
//         const g = randomColorUtility(256);
//         const b = randomColorUtility(256);

//         setColor(`rgb(${r}, ${g}, ${b})`);
//     }

//     useEffect(()=>{
//         if(typeOfColor === 'hex') handleCreateRandomHexColor();
//         else handleCreateRandomRgbColor();
//     },[typeOfColor]);

//     return(
//         <div style={{
//             width : "100vw",
//             height : "100vh",
//             background :color,
//         }}>
//             <h1 style={{
//             color :"#ffff",
//         }}>Random Color Generator</h1>
//             <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>mistry color</button>
//             <button onClick={()=>setTypeOfColor('hex')}>the HEX one's</button>
//             <button onClick={()=>setTypeOfColor('rgb')}>RGB colors</button>
//             <div style={{
//                 display : "flex",
//                 justifyContent : "center",
//                 alignItems : "center",
//                 color : "#fff",
//                 fontSize : "60px",
//                 marginTop : "50px",
//                 flexDirection: "column",
//                 gap:"20px"
//             }}>
//                 <h6>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h6>
//                 <h5>{color}</h5>

//             </div>
//         </div>
//     );
// }

export default function RandomColor(){
    const [typeOfColor,setTypeOfColor] = useState('hex');
    const [color,setColor] = useState('#000000')

    function utilityColor(length){
       return Math.floor(Math.random()*length);
    }
    function hexColorGenerate(){
        let hex = "#";
        const hexColor = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        for(let i = 0; i < 6; i++){
            hex +=  hexColor[utilityColor(hexColor.length)];
        }
        setColor(hex);
    }
    function rgbColorGenerate(){
        let r = utilityColor(256);
        let g = utilityColor(256);
        let b = utilityColor(256);

        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(()=>{
        if(typeOfColor === 'hex') hexColorGenerate();
        else rgbColorGenerate();
    },[typeOfColor])
    return(
        <div style={{
            width : '100vw',
            height : "100vh",
            background : color,
        }}>
            <h1
            style={{color : '#ffff'}}>Random color generator</h1>
            <button onClick={typeOfColor === 'hex' ? hexColorGenerate : rgbColorGenerate}>change color</button>
            <button onClick={()=> setTypeOfColor('hex')}>HEX color</button>
            <button onClick={()=> setTypeOfColor('rgb')}>RGB color</button>

            <div style={{
                display : 'flex',
                justifyContent: 'center',
                alignItems : 'center',
                gap: '10px',
                fontSize: "30px",
                flexDirection: "column"
            }}>
                <h6>{typeOfColor === 'hex' ? "hexColor" : "rgbColor"}</h6>
                <h5>{color}</h5>
            </div>
        </div>
        
    )
}