import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { useQuery, gql } from '@apollo/client'
import {Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const GetCategories = gql`
    query categories {
        categories {
            data {
                id,
                attributes {
                    name,
                    slug
                }
            }
        }
    }
`

const NavBar = () => {
  const { data, loading, error } = useQuery(GetCategories)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

  return (
    <Navbar sticky='top' className='py-3' collapseOnSelect expand="lg">
      <LinkContainer to="/"><Navbar.Brand>&lt;Farhan Ellahi /&gt;</Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" > <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav>
          {
            data.categories.data.map(item => (
              <LinkContainer to={`category/${item.attributes.slug}`} key={item.id}><Nav.Link>{item.attributes.name}</Nav.Link></LinkContainer>
            ))
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar