import React from "react"
import cross from "../images/cross.png"
import {
    Card, Button, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';

const VerticalCard = () => {
    return (
        <>
            <Card className=" mb-3 card-ver">

                <CardBody>
                    <img src={cross} alt="" align="right" width="18" height="18" />
                    <CardTitle tag="h5" className="max-text title mb-2 mt-3">FIRST releases its 2020-21 Annual Report FIRST published its fifth Annual Report which covers the organization’s accomplishments towards its visio</CardTitle>
                    <CardText tag="p" className="max-text desc mb-1">FIRST published its fifth Annual Report which covers the organization’s accomplishments towards its vision of bringing together incident response and security teams from every country across the world to ensure a safe internet for all. The report is available at [FIRST Annual Report 2020-2021]</CardText>
                    <p className="date">Mon, 14 Jun 2021 00:00:00 GMT</p>
                    <CardImg className="card-Img" top width="100%" src="data:image/png;base64,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" />
                </CardBody>
            </Card>
        </>
    );
};

export default VerticalCard;