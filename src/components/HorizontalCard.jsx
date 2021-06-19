import React from "react"
import {
    Card, Button, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';


const HorizontalCard = () => {
    return (
        <>
            <Card className=" mb-4  ver-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuow5rYxAe78CzSE8so8SECUZ1_VXLojgPA&usqp=CAU" className="roundImg" />
                <div className="d-hor">
                    <h5 className="max-text title">FIRST releases its 2020-21 Annual Report FIRST published its fifth Annual Report which covers the organization’s accomplishments towards its visio</h5>
                    <h6 className="max-text">FIRST published its fifth Annual Report which covers the organization’s accomplishments towards its vision of bringing together incident response and security teams from every country across the world to ensure a safe internet for all. The report is available at [FIRST Annual Report 2020-2021]</h6>
                    <p className="date">Mon, 14 Jun 2021 00:00:00 GMT</p>
                </div>

            </Card>
        </>
    );
};

export default HorizontalCard;