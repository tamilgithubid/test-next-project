export default function UserCard() {
  return (
    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {/* Avatar */}
      <div className="mb-4 flex justify-center">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
      </div>

      {/* User Name */}
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100">
        John Doe
      </h2>

      {/* User Role */}
      <p className="text-center text-sm font-medium text-blue-600 dark:text-blue-400">
        Full Stack Developer
      </p>

      {/* Bio */}
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        Passionate about building amazing web applications with modern technologies.
      </p>

      {/* Stats */}
      <div className="mt-6 flex justify-around border-t border-gray-200 pt-4 dark:border-gray-700">
        <div className="text-center">
          <p className="text-lg font-bold text-gray-800 dark:text-gray-100">42</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-800 dark:text-gray-100">1.2K</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-800 dark:text-gray-100">8</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Years</p>
        </div>
      </div>

      {/* Action Button */}
      <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
        View Profile
      </button>
    </div>
  );
}
