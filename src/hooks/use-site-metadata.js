import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                twitter
                linkedin
                instagram
                github
                email
                rss
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            keywords
            cv {
              header {
                name
                position
                img {
                  src
                  alt
                }
                location
                contacts {
                  type
                  link
                  linkName
                }
              }
              experiments {
                name
                locationIcon
                description
                builtWith
                link
                sourceCode
              }
              pitchLine
              topTech
              tech {
                name
                logo
                website
                displayInTopList
              }
              softSkills {
                featured
                other
              }
              hardSkills {
                featured
                other
              }
              experience {
                company {
                  name
                  logoHeight
                  logo
                  period
                }
                projects {
                  name
                  logoHeight
                  logo
                  role
                  description
                  stack {
                    me
                    all
                  }
                  achievements
                }
              }
              volunteer {
                place
                logo
                logoHeight
                period
                description
              }
              education {
                place
                period
                degree
              }
              recommendations {
                name
                jobTitle
                photo
                linkedin
                text
              }
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
