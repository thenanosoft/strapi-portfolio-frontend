import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PostGrid } from './components'
import { Container, Row } from 'react-bootstrap'
import { HeroSection, StatCard } from './components'

const PORTFOLIOS = gql`
    query GetPortfolios {
        portfolios (sort: "date:desc", pagination: {page: 1, pageSize: 30}) {
            meta{
                pagination {
                  total
                }
              }
            data {
                id,
                attributes {
                    slug,
                    title,
                    date,
                    excerpt,
                    description,
                    previewSlug,
                    githubSlug,
                    tags {
                        data {
                            id, 
                            attributes {
                                name,
                                slug
                            }
                        }
                    },
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    },
                    gallery {
                        data {
                            attributes {
                                formats
                            }
                        }
                    },
                    category {
                        data {
                            attributes {
                                name,
                                slug
                            }
                        }
                    }
                    
                }
            }
        }
    }
`

const HomePage = () => {
    const { data, loading, error } = useQuery(PORTFOLIOS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
    console.log(data)
    return (
        <div id='page-id-home-page'>
            <Container>
                <HeroSection />
                <StatCard projects={data.portfolios.meta.pagination.total} />
            </Container>
            <Row>
                {data.portfolios.data.map(item => (
                    <PostGrid key={item.id} item={item} />
                ))}
            </Row>
        </div>
    )
}

export default HomePage