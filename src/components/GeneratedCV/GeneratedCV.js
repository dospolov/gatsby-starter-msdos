import React from 'react'

const CV = ({ state: { email, city } }) => (
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div className="relative pt-10 pb-10">
        <div className="max-w-3xl mx-auto pb-12 md:pb-16">{email}</div>
        <div className="max-w-3xl mx-auto pb-12 md:pb-16">{city}</div>
      </div>
    </div>
  </section>
)

function GeneratedCV({ state }) {
  console.log(state)

  return state ? (
    <CV {...{ state }} />
  ) : (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-10 pb-10">You need generate CV first</div>
      </div>
    </section>
  )
}

export default GeneratedCV
