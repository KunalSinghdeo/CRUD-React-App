import { useEffect } from "react";




const Stories = () =>{
    
    let API = "https://hn.algolia.com/api/v1/search?query=html";

    const fetchApiData = async(url) => {
         try{
            const response = await fetch(url)
            const data = await response.json();
            console.log(data)
            console.log("fucntion called")
         } catch (error){
            console.log(error)
         }

    }

    useEffect= (() => {
        fetchApiData(API)  
        console.log("UseEffect called") 
    })


    return(
        <>
           <h2> My Tech New Post</h2>
        </>
    )
}

export default Stories