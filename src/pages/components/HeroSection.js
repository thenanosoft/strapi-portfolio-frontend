import React from 'react'
import {Row, Col} from 'react-bootstrap'


const HeroSection = () => {

    const currentYear = new Date().getFullYear()
    const experienceStartYear = 2019
    const totalExperienceYears = currentYear - experienceStartYear

    return (
        <Row className='align-items-center g-lg-5 pt-5 pb-5'>
            <Col lg={8}>
                <h1 className='display-4 fw-bold lh-1 mb-3 text-tertiary-color'>Hi, I'm <span className='text-quaternary-color'>Farhan Ellahi</span></h1> 
                <h3 className='mb-3 text-tertiary-color text-primary-font'>&#123;Full Stack&#125; Web Developer</h3>
                <p class="lead text-quaternary-color">{totalExperienceYears}+ Years of Experience in<br /><span className='lead-section-skills'>Websites</span>+<span className='lead-section-skills'>Apps</span>+<span className='lead-section-skills'>Scripts</span><br />Designing &amp; Development</p>
    
            </Col>
            {/* 50% rounded image on second column with curosr effect and animation */}
            <Col className='d-none d-flex justify-content-left'>
                    <img src='https://lh3.googleusercontent.com/1JI70QROQyd_rsgrORiSMDj8h5Tx5KRPgTpTRAsMa6iuCgc91aEO-pamjW8CWvAWjAlwQ99JYWtRba2Pk5Aliq3f639CeVQdmcpmLFM=s512-c' className='img-fluid rounded-circle shadow-lg' style={{
                        width: '75%',
                        height: '75%',
                        border: '5px solid #251B37',
                    }} alt='Farhan Ellahi' />
            </Col>
        </Row>
    )
}

export default HeroSection