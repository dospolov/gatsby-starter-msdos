import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { useSiteMetadata } from '../../../hooks'

const Comments = ({ postTitle, postSlug }) => {
  const { url, disqusShortname } = useSiteMetadata()

  if (!disqusShortname) {
    return null
  }

  return (
    <DiscussionEmbed
      shortname={disqusShortname}
      config={{ identifier: postTitle, title: postTitle, url: url + postSlug }}
    />
  )
}

export default Comments
