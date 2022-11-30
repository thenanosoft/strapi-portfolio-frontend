import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SiteFooter = () => {
  return (
    <div className='p-5 bg-primary-color d-flex justify-content-center' style={{
      maxWidth: '100%',
    }}>
        <Col className='text-quaternary-color'>
        Copyright © 2019 - {new Date().getFullYear()} Nanosoft. All rights reserved.
        </Col>
    </div>
  )
}

export default SiteFooter