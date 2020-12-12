import React from 'react'
import Layout from '../components/Layout'
import GeneratedCV from '../components/GeneratedCV'

const GeneratedCVTemplate = ({ location: { state } }) => {
  return (
    <Layout title="Your CV">
      <GeneratedCV {...{ state }} />
    </Layout>
  )
}

export default GeneratedCVTemplate
