import React from 'react'

const CV = ({ state: { name, city, position, email, github } }) => (
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div className="relative pt-10 pb-10">
        <div className="max-w-3xl mx-auto">{name}</div>
        <div className="max-w-3xl mx-auto">{city}</div>
        <div className="max-w-3xl mx-auto">{position}</div>
        <div className="max-w-3xl mx-auto">{email}</div>
        <div className="max-w-3xl mx-auto">{github}</div>
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
