
import Card from 'react-bootstrap/Card';
import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function BakeryItem({item, readingList, addToReadingList, removeFromReadingList}) {
    return (
        <Card style={{ width: "18rem", overflow: "hidden" }}>
            <Card.Img variant="top" src={item.image} style={{ width: "18rem", height: "300px" }} />

            <Card.Body>
                <Card.Title> {item.name} </Card.Title>
                <Card.Subtitle>Price: {item.price}$ </Card.Subtitle>
                <Card.Subtitle>Language: {item.language} </Card.Subtitle>
                <Card.Subtitle>Genre: {item.genre} </Card.Subtitle>
                <Card.Subtitle>User Rating: {item.rating} </Card.Subtitle>

                <Card.Text style={{maxHeight: "100px", overflow: "hidden"}}> {item.description} </Card.Text>
                {
                    !readingList.has(item.name) ?
                    <Button onClick={()=>{item.name && addToReadingList(item)}}> Add to Reading List </Button>
                        :
                    <Button onClick={()=>{item.name && removeFromReadingList(item)}}> Remove from Reading List </Button>
                }
            </Card.Body>
        </Card>
    );
    console.log("item")
}
export default BakeryItem;