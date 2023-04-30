import { NavigationLinkItem } from "../../utils/types";

const NavigationLink = (props: NavigationLinkItem) => {
  return (
    <a
      href={props.path}
      target="_blank"
      className="ml-4 text-sm text-gray-200 hover:text-gray-500 font-semibold duration-default cursor-pointer whitespace-nowrap"
    >
      {props.text}
    </a>
  )
}

export default NavigationLink;