import React from "react"
import {
    Card, Button, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';

const VerticalCard = (props) => {
    return (
        <>
            <Card className=" mb-2 card-ver">

                <CardBody>
                    <CardTitle tag="h5" className="country">{props.Country} :</CardTitle>
                    <div className="details">
                    <h6>Todays Cases: <strong>{props.todayCases}</strong> </h6>
                    <h6>   Total Cases: <strong>{props.cases}</strong></h6>
                    <h6 className="">Todays Deaths: <strong>{props.todayDeaths}</strong> </h6> 
                    <h6 className="mb-3">   Total Deaths:  <strong>{props.deaths}</strong></h6>
                    </div>
                   
                    <CardImg className="card-Img" top width="100%" src={props.img} />
                </CardBody>
            </Card>
        </>
    );
};

export default VerticalCard;