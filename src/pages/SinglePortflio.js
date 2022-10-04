import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Card from 'react-bootstrap/Card'
import {Row, Col, Badge, Carousel, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GetPortfolio = gql`
  query Portfolios($slug: String!) {
    portfolios(filters: {slug: {eq: $slug}}) {
        data {
            attributes {
                title,
                date,
                description,
                featuredImage {
                    data {
                        attributes {
                            url
                        }
                    }
                },
                languages {
                    data {
                        attributes {
                            name,
                            slug
                        }
                    }
                },
                gallery {
                    data {
                        attributes {
                            formats
                        }
                    }
                }
            }
        }
    }
}
`

const SinglePortflio = () => {
    const { slug } = useParams()
    const { data, loading, error } = useQuery(GetPortfolio, {
        variables: { slug: slug }
    })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
    console.log(data)
    return (
        <div id='page-id-single-post'>
                    <div className=' my-5 text-quaternary-color'>
                        <Row>
                                <h1 className='display-4'>{data.portfolios.data[0].attributes.title}</h1>
                        </Row>
                        <p>
                            <span>{data.portfolios.data[0].attributes.date}</span>
                            <span className='mx-2'>|</span>
                            <span>Farhan Ellahi</span>
                        </p>
                        <span>
                                {data.portfolios.data[0].attributes.languages.data.map(language => (
                                    <Link to={`/tag/${language.attributes.slug}`}>
                                        <Badge bg='none' className="bg-quaternary-color text-primary-color" key={language.id}>#{language.attributes.name}</Badge>
                                    </Link>
                                ))}
                            </span>
                    </div>
            <Row className='post-detail rounded-top shadow pt-3 bg-quaternary-color'>
                <Col lg={12} md={12} sm={12}>
                    <Carousel>
                            {data.portfolios.data[0].attributes.gallery.data.map(gallery => (
                                <Carousel.Item className='rounded'><Card.Img  id="featued-img" className='mb-5 rounded border border-warning' src={`${process.env.REACT_APP_BACKEND_BASE_URL}${gallery.attributes.formats.large.url}`} /></Carousel.Item>
                            ))}
                    </Carousel>
                    <ReactMarkdown>{data.portfolios.data[0].attributes.description}</ReactMarkdown>
                </Col>
            </Row> 
        </div>
    )
}

export default SinglePortflio