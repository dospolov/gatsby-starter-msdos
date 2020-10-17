import React, { useEffect } from 'react'
import AOS from 'aos'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import PageIllustration from '../partials/PageIllustration'
import SEO from '../components/seo'
import '../css/style.scss'

const Layout = ({ children, title, image }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine'
    })
  }, [])

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
            <PageIllustration />
          </div>

          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
