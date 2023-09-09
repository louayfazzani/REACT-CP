import React from "react";
import cadre from "./cadre"
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
export default function techBar (pcs){
    return (
        
            <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
             {pcs.map(el=><Cadre key={el.id} pc={el}/>)}
            </div>
        
    )
}