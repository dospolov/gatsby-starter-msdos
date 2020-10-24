import React from 'react'
import GeneralInfo from '../components/GeneralInfo'
import Experiments from '../components/Experiments'
import PitchLine from '../components/PitchLine'
import TopTech from '../components/TopTech'

function CV() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-10 pb-10">
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">
            <GeneralInfo />
            <Experiments />
            <PitchLine />
            <TopTech />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
