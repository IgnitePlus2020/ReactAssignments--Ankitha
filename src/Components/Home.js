import React from "react"
import Shows from "./Shows"



function Home(){ 
    return (
       <div>
           <table>
               <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Number Of Seasons</th>
                   <th>Ratings</th>
                   <th>Description</th>
               </tr>
               {Shows.map(show=>{
                   return (
              
                   <tr>
                       <td>{show.id}</td>
                       <td>{show.name}</td>
                       <td>{show.noOfSeasons}</td>
                       <td>{show.rating}</td>
                       <td>{show.description}</td>
                   </tr>
                  
                   )
               })}
              
           </table>
       </div>
    );
}   
    
export default Home;
