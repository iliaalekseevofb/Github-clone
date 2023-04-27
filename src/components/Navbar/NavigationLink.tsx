import { NavigationLinkItem } from "../../types/types";

const NavigationLink = (props: NavigationLinkItem) => {
  const commonNavLinkClassName: string =
    "ml-4 text-sm text-gray-200 hover:text-gray-500 font-semibold duration-default";

  return (
    <a
      href={props.path}
      target="_blank"
      className={`${commonNavLinkClassName} cursor-pointer"`}
    >
      {props.text}
    </a>
  )
}

export default NavigationLink;