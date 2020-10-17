import React from 'react'

const Tags = ({ tags }) => {
  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags?.map(tag => (
        <li className="m-1" key={tag}>
          <span className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Tags
