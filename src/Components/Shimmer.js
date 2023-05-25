const shimmer =()=>{
    return <div className="restaurant-list container">
        {Array(20).fill("").map((e,index)=><div  key ={index}className="shimmer-card"></div>)}
        
    </div>
}
 export default shimmer;