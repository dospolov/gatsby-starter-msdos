import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import localForage from 'localforage'
import useStickyState from './useStickyState'
// import GeneralInfo from '../components/GeneralInfo'
// import Experiments from '../components/Experiments'
// import PitchLine from '../components/PitchLine'
// import TopTech from '../components/TopTech'

const objWithBlobsToURLs = obj =>
  Object.fromEntries(
    Object.keys(obj).map(fieldName =>
      obj[fieldName] instanceof Blob
        ? [fieldName, window.URL.createObjectURL(obj[fieldName])]
        : [fieldName, obj[fieldName]]
    )
  )

function CVMaker() {
  const [CVData, setCVData] = useState({
    name: '',
    position: '',
    city: '2',
    email: '',
    github: '',
    avatar: ''
  })

  useEffect(() => {
    localForage
      .getItem('CVData')
      .then(storedCVData => setCVData(objWithBlobsToURLs(storedCVData)))
  }, [])

  const updateCVData = CVDataWithBlobs => {
    setCVData(objWithBlobsToURLs(CVDataWithBlobs))
    localForage.setItem('CVData', CVDataWithBlobs)
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-10 pb-10">
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">
            <div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center">
                  <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    {CVData.avatar ? (
                      <img
                        src={CVData.avatar}
                        alt=""
                        className="h-full w-full text-gray-300"
                      />
                    ) : (
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </span>
                  <input
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="file"
                    onChange={e => updateCVData({ ...CVData, avatar: e.target.files[0] })}
                  />
                </div>
              </div>

              <input
                type="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900 mb-3"
                placeholder="name"
                value={CVData.name}
                onChange={({ target: { value } }) =>
                  updateCVData({ ...CVData, name: value })
                }
              />
              <input
                type="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900 mb-3"
                placeholder="position"
                value={CVData.position}
                onChange={({ target: { value } }) =>
                  updateCVData({ ...CVData, position: value })
                }
              />
              <input
                type="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900 mb-3"
                placeholder="city"
                value={CVData.city}
                onChange={({ target: { value } }) =>
                  updateCVData({ ...CVData, city: value })
                }
              />
              <input
                type="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900 mb-3"
                placeholder="email"
                value={CVData.email}
                onChange={({ target: { value } }) =>
                  updateCVData({ ...CVData, email: value })
                }
              />
              <input
                type="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900 mb-3"
                placeholder="github"
                value={CVData.github}
                onChange={({ target: { value } }) =>
                  updateCVData({ ...CVData, github: value })
                }
              />

              <button
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5"
                onClick={() =>
                  navigate('/generated-cv', {
                    state: CVData,
                    replace: true
                  })
                }
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
