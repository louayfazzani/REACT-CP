import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function carte({pc}){
    return (
        <div >
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pc.img} />
      <Card.Body>
        <Card.Title>{pc.Title}</Card.Title>
       
        <Button variant="primary">more specs</Button>
      </Card.Body>
    </Card>
        </div>
    )
}