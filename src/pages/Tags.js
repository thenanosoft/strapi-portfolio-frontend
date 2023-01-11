import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { PostGrid } from './components'
import {Row} from 'react-bootstrap'

const GetLanguage = gql`
query Language($slug: String!) {
  tags (filters: {slug: {eq: $slug}}) {
    data  {
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
                  excerpt,
                  description,
                  previewSlug,
                    githubSlug,
                  image {
                      data {
                          attributes {
                              formats 
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
    }
  }
}
`

const Tags = () => {
  const { slug } = useParams();
  const {loading, error, data} = useQuery(GetLanguage, {
    variables: {slug: slug}
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>

  console.log(data)
  return (
    <div>
      <h1 className='display-4 pb-2 my-5 text-tertiary-color'>{data.tags.data[0].attributes.name} - {data.tags.data[0].attributes.portfolios.data.length}</h1>
      <Row>
      {data.tags.data[0].attributes.portfolios.data.map(item => (
            <PostGrid item={item} />
        ))}
      </Row>
    </div>
    
  )
}

export default Tags