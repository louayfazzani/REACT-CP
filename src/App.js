
import React from 'react';
import techBar from "./component/techBar"
function App() {
    const data =[
        {title:"ASUS TUF",img:"https://i.pinimg.com/236x/bc/ef/ea/bcefea531ea758ef1c03508f497c0fb4.jpg"},
        {title:"MSI KATANA",img:"https://i.pinimg.com/236x/a1/7a/b7/a17ab78f18837ff33d1f77ee8ee229de.jpg"} ,
        {title:"HP pavillion",ima:"https://i.pinimg.com/236x/0d/38/4e/0d384e8dabde5143b08610668a6255ea.jpg"}
    ]
 return(
    <div classname ="App">
        <navbarScrollExample/>
        <techBar pcs={data} />
        </div>
    
 )   ;
}