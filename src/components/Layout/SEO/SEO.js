import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../../hooks'

function SEO({ description, meta, title, image }) {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata.description
  const fullTitle = `${title} | ${siteMetadata?.title}`

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={fullTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: fullTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image
            ? `${siteMetadata.url}${image}`
            : `${siteMetadata.url}/topology.png`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: siteMetadata?.author?.name || ``
        },
        {
          name: `twitter:title`,
          content: fullTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  )
}

export default SEO
