import {FC} from 'react';
import logo from '../back.svg'
import {Container, Row, Col, CardText, CardImg} from "reactstrap"
import {SECTION_TYPE} from "../types"

interface MenuSectionProps {
  onQuit: (s:string) => void;
}

/**
 * menu component.
 * no function implemented here
 */
const MenuSection:FC<MenuSectionProps> = props => {
    return (
      <Container className="container">
        <Row className="section-header">
          <CardImg className='section-icon position-absolute top-0 start-0'src={logo} onClick={()=>{props.onQuit(SECTION_TYPE.MENU)}}/>
          <Col md={12} sm={12}>
            <CardText>Menu</CardText>
          </Col>
        </Row>
        <Row className='section-body'>
          <Col md={12} sm={12}>
            <Row className='p-2, align-items-center, justify-content-center section-content'>
              <div>This is menu content</div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  export default MenuSection