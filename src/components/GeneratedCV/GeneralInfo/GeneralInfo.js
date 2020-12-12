import React from 'react'
import { useSiteMetadata } from '../../../hooks'

const GeneralInfo = () => {
  const {
    cv: { generalInfo }
  } = useSiteMetadata()
  return (
    <div>
      <div className="sm:flex">
        <div className="w-full sm:w-2/6 text-lg">
          <div>{generalInfo.location}</div>
          <>
            {generalInfo.contacts.map(contact => (
              <div key={contact.type}>
                {contact.type}:{' '}
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600"
                >
                  {contact.linkName}
                </a>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
