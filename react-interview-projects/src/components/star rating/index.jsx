import { useState } from "react"
import { FaStar } from "react-icons/fa"
import './styles.css';
import { use } from "react";
import { SiZebpay } from "react-icons/si";



// export default function StartRating({noOfStarts = 5}){

//     const [rating,setRating] = useState(0);
//     const [hover,setHover] = useState(0);

//     function handleClick(getCurrentIndex){
//         setRating(getCurrentIndex);
//     }

//     function handleMouseEnter(getCurrentIndex){
//         setHover(getCurrentIndex);
//     }

//     function handleMouseLeave(){
//         setHover(rating);
//     }

//     return <div className="start-rating">{
//         [...Array(noOfStarts)].map((_,index)=>{
//             index += 1;
//             return <FaStar
//             key={index}
//             className={index <= (hover || rating) ? 'active' : 'inactive'}
//             onClick={()=> handleClick(index)}
//             onMouseMove={()=> handleMouseEnter(index)}
//             onMouseLeave={()=> handleMouseLeave(index)}
//             size={40}
//             />
//         })
//     }


//     </div>
// }

// export default function StartRating({numberOfStars = 5}){
//     const [rating,setRating] = useState(0);
//     const [hover,setHover] = useState(0);

//     function handleSubmit(getCurrentIndex){
//         setRating(getCurrentIndex);
//     }
//     function handleMouseEnter(getCurrentIndex){
//         setHover(getCurrentIndex);
//     }
//     function handleMouseLeave(){
//         setHover(rating);
//     } 
    
//     return(
//         <div className="star-rating">
//            {[...Array(numberOfStars)].map((_,index)=>{
//                 index+=1;
//                 return <FaStar 
//                 key={index}
//                 className={index <= (rating || hover) ? "active" : 'inactive'}
                
//                  onClick={()=>handleSubmit(index)}
//                  onMouseLeave={()=>handleMouseLeave(index)}
//                  onMouseMove={()=>handleMouseEnter(index)}
//                  size={40}
//                  />
//            })}
//         </div>
//     )
// }

export default function StartRating({numberOfStars=5}){
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleSubmit(getCurrentIndex){
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(){
        setHover(rating);
    }
    return (
        <div className="star-rating">
            {[...Array(numberOfStars)].map((_,index)=>{
                index += 1;
                return <FaStar
                key={index}
                className={index <= (rating || hover) ? "active" : 'inactive'}
                onClick={()=>handleSubmit(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                size={40}
                />
            })}
        </div>
    )
}