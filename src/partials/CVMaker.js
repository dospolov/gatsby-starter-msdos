import React, { useState } from 'react'
import { navigate } from 'gatsby'
// import GeneralInfo from '../components/GeneralInfo'
// import Experiments from '../components/Experiments'
// import PitchLine from '../components/PitchLine'
// import TopTech from '../components/TopTech'

function CVMaker() {
  const [state, setState] = useState({
    email: ''
  })
  const createPage = () => {
    console.log(state)

    navigate('/generated-cv', {
      state,
      replace: true
    })
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-10 pb-10">
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  value={state.email}
                  onChange={({ target: { value } }) =>
                    setState({ ...state, email: value })
                  }
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={createPage}
              >
                Button text
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CVMaker
