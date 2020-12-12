import React from 'react'
import dayjs from 'dayjs'

const AuthorAndDate = ({ date }) => {
  return (
    <>
      <div className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
        <div className="text-gray-500">
          <time dateTime={dayjs(date).format('MMMM D, YYYY')}>
            {dayjs(date).format('MMMM DD, YYYY')}
          </time>
        </div>
      </div>
    </>
  )
}

export default AuthorAndDate
