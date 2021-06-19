import React from "react"
import {
    Card, Button, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';
const UserCard = ()=>{
    return(
       <>
       <Card className=" mb-4  usr-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuow5rYxAe78CzSE8so8SECUZ1_VXLojgPA&usqp=CAU" className="roundImg-user" />
                <div className="d-hor-user">
                    <h5 className="max-text title">Hi Reader,</h5>
                    <h7 className="max-text">Here's your News!</h7>
                </div>
            </Card>
         
       </>
    );
};

export default UserCard;