import React from 'react'
import { Row, Col } from 'react-bootstrap'

const StatCard = ({projects}) => {
  return (
    <Row className="text-center d-flex bg-tertiary-color text-primary-color rounded shadow p-4 mb-5">
        <Col lg={4} md={3}>
            <div className='stat-card'>
                <div className='stat-card-icon'>
                    <i className='fas fa-code'></i>
                </div>
                <div className='align-middle stat-card-content'>
                    <h3 className='display-5'>{projects}+</h3>
                    <span>Projects Completed</span>
                </div>
            </div>
        </Col>
        <Col lg={4} md={3}>
            <div className='align-middle stat-card'>
                <div className='stat-card-icon'>
                    <i className='fas fa-users'></i>
                </div>
                <div className='stat-card-content'>
                    <h3 className='display-5'>22+</h3>
                    <span>Happy Clients</span>
                </div>
            </div>
        </Col>
        <Col lg={4} md={3}>
            <div className='stat-card'>
                <div className='stat-card-icon'>
                    <i className='fas fa-trophy'></i>
                </div>
                <div className='stat-card-content'>
                    <h3 className='display-5'>3+</h3>
                    <span>Working Years</span>
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default StatCard