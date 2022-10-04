import React from 'react'
import {Row, Col} from 'react-bootstrap'

const ArchiveHeroSection = ({data}) => {
    return (
        <Row className='align-items-center g-lg-5 py-5'>
            <Col>
                <div class="jumbotron jumbotron-fluid">
                        <h1 class="display-4 pb-2">{data.attributes.name}</h1>
                        <p class="lead text-quaternary-color">Archive Description</p>
                </div>
            </Col>
            {/* Big Counter text horizontally & vertically centered */}
            <Col className='d-flex justify-content-center align-items-center text-center'>
                <div className='counter'>
                    <h1 className='counter-number'>100</h1>
                    <p className='counter-text'>Projects Completed</p>
                </div>
            </Col>
        </Row>
    )
}

export default ArchiveHeroSection