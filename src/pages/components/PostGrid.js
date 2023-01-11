import React from 'react'
import Card from 'react-bootstrap/Card'
import { Badge, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostGrid = ({item}) => {
  return (
    <Col key={item.id} sm={12} md={6} lg={4} xl={4} className="pb-4">
                <Card variant="top" className="shadow bg-tertiary-color card-img h-100">
                    {item.attributes.gallery.data.length === 0 &&
                        <Link to={`/portfolio/${item.attributes.slug}`}><Card.Img src={`${item.attributes.image.data.attributes.formats.medium.url}`} /></Link>
                    }
                    {/* Gallery Images on Home Page */}
                    {/* {item.attributes.gallery.data.length > 0 && 
                    <Carousel>
                        <Carousel.Item><Link to={`/portfolio/${item.attributes.slug}`}><Card.Img src={`${item.attributes.image.data.attributes.formats.medium.url}`} /></Link></Carousel.Item>
                            {item.attributes.gallery.data.map(gallery => (
                                <Carousel.Item><Link to={`/portfolio/${item.attributes.slug}`}><Card.Img src={`${gallery.attributes.formats.thumbnail.url}`} /></Link></Carousel.Item>
                            ))}
                    </Carousel>
                    } */}
                    <Card.Body>
                        <Card.Title className="fw-bold">{item.attributes.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.attributes.date}</Card.Subtitle>
                        <span>
                            {item.attributes.tags.data.map(language => (
                                <Link to={`/tag/${language.attributes.slug}`}>
                                    <Badge className="" bg='dark' key={language.id}>#{language.attributes.name}</Badge>
                                </Link>
                            ))}
                        </span>
                        <Card.Text className='py-2'>{item.attributes.excerpt} <Link to={`/portfolio/${item.attributes.slug}`}> View More </Link> </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <Link to={`/category/${item.attributes.category.data?.attributes.slug}`}><small className="text-muted">=&gt; {item.attributes.category.data?.attributes.name}</small></Link>
                    </Card.Footer> */}

                    <Card.Footer>
                        <span>
                            {item.attributes.previewSlug != null && <a target="_blank" href={item.attributes.previewSlug}>Live</a>}
                            {item.attributes.githubSlug != null && <a target="_blank" href={item.attributes.githubSlug}>Github</a>}
                        </span>
                    </Card.Footer>
                </Card>
            </Col>
  )
}

export default PostGrid