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
                slug,
                description,
                previewSlug,
                    githubSlug,
                image {
                    data {
                        attributes {
                            url
                        }
                    }
                },
                tags {
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
                    <div className='my-5 text-quaternary-color'>
                        <Row>
                                <h1 className='display-4'>{data.portfolios.data[0].attributes.title}</h1>
                        </Row>
                        <p>
                            <span>{data.portfolios.data[0].attributes.date}</span>
                            <span className='mx-2'>|</span>
                            <span>Farhan Ellahi</span>
                        </p>
                        <span>
                                {data.portfolios.data[0].attributes.tags.data.map(language => (
                                    <Link to={`/tag/${language.attributes.slug}`}>
                                        <Badge bg='none' className="bg-quaternary-color text-primary-color" key={language.id}>#{language.attributes.name}</Badge>
                                    </Link>
                                ))}
                            </span>
                    </div>
            <Row className='post-detail rounded-top pt-3 mb-5 bg-quaternary-color shadow-lg'>
                <Col lg={12} md={12} sm={12}>
                    {data.portfolios.data[0].attributes.gallery.data.length === 0 &&
                        <Link to={`${data.portfolios.data[0].attributes.image.data.attributes.url}`}><Card.Img id="featued-img" src={`${data.portfolios.data[0].attributes.image.data.attributes.url}`} /></Link>
                    }
                    {data.portfolios.data[0].attributes.gallery.data.length > 0 && <Carousel>
                    <Carousel.Item><Link to={`/portfolio/${data.portfolios.data[0].attributes.slug}`}><Card.Img id="featued-img" src={`${data.portfolios.data[0].attributes.image.data.attributes.url}`} /></Link></Carousel.Item>
                            {data.portfolios.data[0].attributes.gallery.data.map(gallery => (
                                <Carousel.Item className='rounded'><Card.Img  id="featued-img" src={`${gallery.attributes.formats.large.url}`} /></Carousel.Item>
                            ))}
                    </Carousel>}
                    <ReactMarkdown>{data.portfolios.data[0].attributes.description}</ReactMarkdown>
                </Col>
            </Row> 
        </div>
    )
}

export default SinglePortflio