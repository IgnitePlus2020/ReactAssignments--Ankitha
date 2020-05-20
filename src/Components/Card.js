import React from "react"
import Shows from "./Shows"
function Card(props){
    const type = props.type
    return <div>
    <table>
    <tr>
        <th>Name</th>
        <th>Seasons</th>
        <th>Rating</th>
        <th>Description</th>
    </tr>
   {
       Shows.map(show=>{
           if(type === "comedy"){            
               if(show.genre === "Comedy"){
                     return <tr>
                     <td>{show.name}</td>
                     <td>{show.noOfSeasons}</td>
                     <td>{show.rating}</td>
                     <td>{show.description}</td>
                     </tr>
               }
           }
           else if(type==="drama"){
              if(show.genre === "Drama"){
                return <tr>
                     <td>{show.name}</td>
                     <td>{show.noOfSeasons}</td>
                     <td>{show.rating}</td>
                     <td>{show.description}</td>
                     </tr>
              }
           }
           else if(type==="scifi"){
              if(show.genre === "Science-Fiction"){
                return <tr>
                     <td>{show.name}</td>
                     <td>{show.noOfSeasons}</td>
                     <td>{show.rating}</td>
                     <td>{show.description}</td>
                     </tr>
              }
           }
       })
   }
   </table>
    </div>
  
}

export default Card;