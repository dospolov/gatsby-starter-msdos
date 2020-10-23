import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import PageBackground from '../components/Illustrations/PageBackground'
import SEO from '../components/seo'
import '../css/style.scss'

const Layout = ({ children, title, image }) => {
  return (
    <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <SEO {...{ title, image }} />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />

        <main className="flex-grow">
          {/*  Page illustration */}
          <div
            className="relative max-w-6xl mx-auto h-0 pointer-events-none"
            aria-hidden="true"
          >
            <PageBackground />
          </div>

          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
