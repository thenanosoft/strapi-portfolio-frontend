import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { PostGrid } from './components'

const GetLanguage = gql`
query Language($slug: String!) {
  languages (filters: {slug: {eq: $slug}}) {
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
                  description,
                  featuredImage {
                      data {
                          attributes {
                              formats 
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
      <h1 className='display-4 pb-2 my-5 text-tertiary-color'>{data.languages.data[0].attributes.name} - {data.languages.data[0].attributes.portfolios.data.length}</h1>
      {data.languages.data[0].attributes.portfolios.data.map(item => (
            <PostGrid item={item} />
        ))}
    </div>
    
  )
}

export default Tags