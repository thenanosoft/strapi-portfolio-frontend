import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { PostGrid } from './components'
import {Row} from 'react-bootstrap'

const GetCategories = gql`
query Categories($slug: String!) {
    categories(filters: {slug: {eq: $slug}}) {
        data {
            id,
            attributes {
                name,
                slug
                portfolios {
                    data {
                        id,
                        attributes {
                            slug,
                            title,
                            date,
                            description,
                            image {
                                data {
                                    attributes {
                                        formats 
                                    }
                                }
                            },
                            tags {
                                data {
                                    id,
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
        }
    }
}
`

const Category = () => {
    const { slug } = useParams()
    const { data, loading, error } = useQuery(GetCategories, {
        variables: { slug: slug }
    })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    console.log(data)
  return (
    <div>
        <h1 className='display-4 pb-2 my-5 text-tertiary-color'>{data.categories.data[0].attributes.name} - {data.categories.data[0].attributes.portfolios.data.length}</h1>
        <Row>
        {data.categories.data[0].attributes.portfolios.data.map(item => (
            <PostGrid item={item} />
        ))}
        </Row>
    </div>
  )
}

export default Category