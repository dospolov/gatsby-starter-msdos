import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import SEO from './SEO'
import { PageBackground } from '../shared'
import '../../css/style.scss'

const Layout = ({ children, title, image }) => {
  return (
    <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      {/* <SEO {...{ title, image }} /> */}
      <div className="flex flex-col min-h-screen overflow-hidden">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageBackground />
        </div>
        <Header />

        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
