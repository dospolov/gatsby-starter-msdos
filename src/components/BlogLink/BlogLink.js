import React from 'react'
import { Link } from 'gatsby'
import ExternalLink from '../Icon/ExternalLink'

const BlogLink = props => {
  const { externalLink, link, ...allProps } = props

  return externalLink ? (
    <a href={link} target="_blank" rel="noopener noreferrer" {...allProps}>
      {allProps.children} {typeof allProps.children === 'string' && <ExternalLink />}
    </a>
  ) : (
    <Link to={link} {...allProps}>
      {allProps.children}
    </Link>
  )
}

export default BlogLink
