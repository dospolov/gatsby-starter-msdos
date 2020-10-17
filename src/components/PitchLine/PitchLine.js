import React from 'react'
import { useSiteMetadata } from '../../hooks'

const PitchLine = () => {
  const {
    cv: { pitchLine }
  } = useSiteMetadata()
  return <div className="text-center mt-6 mb-4">{pitchLine}</div>
}

export default PitchLine
