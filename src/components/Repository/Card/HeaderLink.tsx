import React from "react";

type HeaderLinkProps = {
  url: string,
  text: string,
  initial_color?: string,
  width?: string,
  icon?: React.ReactNode
}

const HeaderLink = ({ url, text, initial_color, width, icon }: HeaderLinkProps) => {
  return (
    <a
      className={`flex items-center ${initial_color === "white" ? "text-gray-100" : "text-gray-400"} truncate hover:text-blue-700 hover:underline cursor-pointer`}
      href={ url }
      target="_blank"
    >
      { icon }
      <span
        style={{ width: width }}
        className="text-sm truncate"
      >
        { text }
      </span>
    </a>
  )
}
export default HeaderLink;
