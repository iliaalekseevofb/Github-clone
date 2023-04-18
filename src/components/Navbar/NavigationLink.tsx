import {NavLink} from 'react-router-dom';
import {NavigationLinkItem} from "../../utils/models";

const NavigationLink = (props: NavigationLinkItem) => {
  const commonNavLinkClassName = "ml-4 text-sm text-gray-200 hover:text-gray-500 font-semibold duration-default"

  if (props.disabled) {
    return (
      <span className={`${commonNavLinkClassName} cursor-not-allowed`}>
        {props.text}
      </span>
    )
  }

  return (
    <NavLink
      to={props.path!}
      className={`${commonNavLinkClassName} cursor-pointer"`}
    >
      {props.text}
    </NavLink>
  )
}

export default NavigationLink;