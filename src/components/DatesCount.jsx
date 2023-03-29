import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DatesCount = ({count}) => {
    return (
        <Row className='dates-count justify-content-center'>
            <Col sm='8'>
            You Have Dates = {count}
            </Col>
        </Row>
    )
}

export default DatesCount