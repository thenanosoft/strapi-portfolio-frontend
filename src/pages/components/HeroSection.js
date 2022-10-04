import React from 'react'
import {Row, Col} from 'react-bootstrap'

const HeroSection = () => {
    return (
        <Row className='align-items-center g-lg-5 pt-5 pb-5'>
            <Col>
                <div class="jumbotron jumbotron-fluid">
                        <h1 class="display-4 pb-2"><span className='bg-tertiary-color text-primary-color shadow'>Full Stack</span> <span className='text-tertiary-color'>Web Developer</span></h1>
                        <p class="lead text-quaternary-color">3+ Years of Experience in<br /><span className='lead-section-skills'>Websites</span>+<span className='lead-section-skills'>MobileApp</span>+<span className='lead-section-skills'>Scripts</span> <br /> Designing &amp; Development</p>
                </div>
            </Col>
        </Row>
    )
}

export default HeroSection