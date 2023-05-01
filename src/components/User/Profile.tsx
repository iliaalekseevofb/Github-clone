import { UsersIcon } from "@heroicons/react/24/outline";
import { UserDetailsItem } from "../../utils/types";

const Profile = ({ userData }: { userData: UserDetailsItem }) => {
  return (
    <div className="shrink-0 w-full lg:w-72 lg:min-w-72 lg:-mt-16 mr-6 mb-4 lg:mb-0 duration-default">
      <div className="flex flex-row lg:flex-col w-full">
        <img
          src={userData?.avatar_url}
          className="h-24 lg:h-72 lg:min-h-72 rounded-full object-cover duration-default border bg-white dark:bg-gray-800 border-gray-250 dark:border-gray-600"
          alt="User avatar"
        />
        <div className='w-full py-4 ml-4 lg:ml-0'>
          <h2 className="text-2xl text-gray-900 dark:text-gray-100">{userData?.name}</h2>
          <h3 className="text-xl text-gray-400">{userData?.login}</h3>
        </div>
      </div>
      <p className="text-base text-gray-900 dark:text-gray-100 mt-4 lg:mt-0">{userData?.bio}</p>
      <div className="mt-4 flex items-center text-gray-400 text-sm">
        <p className="group flex items-center hover:text-blue-700 cursor-pointer duration-default">
          <UsersIcon className="w-4 h-4 mr-1" />
          <span>
            <span className="text-gray-900 dark:text-gray-100 group-hover:text-blue-700 duration-default">{userData?.followers}</span>
            <span className="ml-1">{userData?.followers === 1 ? 'follower' : 'followers'}</span>
          </span>
        </p>
        <span className="mx-2 text-gray-900 dark:text-gray-100">·</span>
        <p className="group hover:text-blue-700 cursor-pointer">
          <span className="text-gray-900 dark:text-gray-100 group-hover:text-blue-700 duration-default">{userData?.following}</span>
          <span className="ml-1">following</span>
        </p>
      </div>
    </div>
  )
}
export default Profile
