import React from 'react'
import { useSiteMetadata } from '../../hooks'

const GeneralInfo = () => {
  const {
    cv: { generalInfo }
  } = useSiteMetadata()
  return (
    <div>
      <div className="flex">
        {/* <div className="hide-mobile">
          <a href="/cv.pdf" target="_blank" className="no-print">
            <img src="/logos/pdf.svg" height="50" alt="pdf icon" />
          </a>
        </div> */}
        <div className="w-2/6 text-right">
          <h2 className="text-2xl">{generalInfo.name}</h2>
          <h5>{generalInfo.position}</h5>
        </div>
        <div className="w-2/6 text-center">
          <img
            src={generalInfo.img.src}
            alt={generalInfo.img.alt}
            width={80}
            className="rounded-full inline-block"
          />
        </div>
        <div className="w-2/6 text-lg">
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
