import React, {FC} from 'react';
import {Button, CardHeader, CardBody, Card, CardImg, CardText, Label, Row, Input} from "reactstrap";
import {CardInfo} from "./model";
import logo from "./burger.svg";

interface CreditCardSectionProps {
  onQuit: any;
  cardInfo:CardInfo;
}

const CreditCardSection: FC<CreditCardSectionProps> = props => {

  const cardInfo:CardInfo = props.cardInfo;
  const onChange = (field:string, e:any) => {

  }

  const onSubmit = () =>{
    console.log("done")
  }

  return (
    <Card>
      <CardHeader>
          <CardImg width={50} src={logo} onClick={()=>{props.onQuit("creditcard")}}/>
          <CardText>Register Card Form</CardText>
      </CardHeader>
      <CardBody>
        <Row>
          <Label>Card Number</Label>
          <Input value={cardInfo.cardNumber} onChange={(e)=>onChange("cardNumber",e)}/>
        </Row>
        <Row>
          <Label>Name</Label>
          <Input value={cardInfo.name} onChange={(e)=>onChange("name",e)}/>
        </Row>
        <Row>
          <Label>Expired Date</Label>
          <Input value={cardInfo.expiredDate} onChange={(e)=>onChange("expiredDate",e)}/>
        </Row>
        <Row>
          <Label>CVC</Label>
          <Input value={cardInfo.cvc} onChange={(e)=>onChange("cvc",e)}/>
        </Row>
        <Row>
          <Button onClick={onSubmit}>submit</Button>
        </Row>
      </CardBody>
    </Card>
  );
  }

  export default CreditCardSection