import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DatesList = ({usersInfo}) => {
    return (
        <Row className='justify-content-center'>
            <Col sm='8' className="py-5">
            <div className="rect">
                {usersInfo?.map((item) => {
                return (
                    <div key={item.id} className="item d-flex justify-content-between p-3 bg-primary my-3" style={{color:"white"}}>
                    <img className='img-avatar' src={item.avatar} alt="" />
                    <div className="px-3">
                        <p className='d-inline fs-5'>{item.username}</p>
                        <p>{item['date-opp']}</p>
                    </div>
                    </div>
                )
                })}
            </div>
            </Col>
        </Row>
    )
}

export default DatesList