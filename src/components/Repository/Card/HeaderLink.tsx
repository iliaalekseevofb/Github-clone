import React from 'react'

type HeaderLinkProps = {
  url: string
  text: string
  initial_color?: string
  width?: string
  icon?: React.ReactNode
}

const HeaderLink = ({ url, text, initial_color, width, icon }: HeaderLinkProps): JSX.Element => {
  return (
    <a
      className={`flex items-center ${initial_color === 'white' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400'} truncate hover:text-blue-700 hover:underline cursor-pointer`}
      href={ url }
      target="_blank" rel="noreferrer"
    >
      { icon }
      <span
        style={{ width }}
        className="text-sm truncate"
      >
        { text }
      </span>
    </a>
  )
}
export default HeaderLink
