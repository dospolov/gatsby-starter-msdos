import React from 'react'
import Layout from '../components/layout'
import GeneratedCV from '../partials/GeneratedCV'

const GeneratedCVTemplate = ({ location: { state } }) => {
  return (
    <Layout title="Your CV">
      <GeneratedCV {...{ state }} />
    </Layout>
  )
}

export default GeneratedCVTemplate
