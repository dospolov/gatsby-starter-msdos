import React from 'react'

const Tags = ({ tags, featured }) => {
  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags?.map(tag => (
        <li className="m-1" key={tag}>
          <span
            className={`inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${
              featured
                ? 'text-purple-600 bg-gray-100 hover:bg-gray-200'
                : 'text-gray-100 bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Tags
