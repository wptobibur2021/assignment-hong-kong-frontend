import React from "react";
const Lists = ({ users, deleteHandle }) => {
  return (
    <div>
      {users.length > 0 ? (
        <div className="overflow-x-auto relative mt-5 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Username
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Agree
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.userName}
                  </th>
                  <td className="py-4 px-6">{user.category}</td>
                  <td className="py-4 px-6">
                    {user.aggree === true && "Agree"}
                  </td>
                  <td className="py-4 px-6">
                    <a
                      onClick={(e) => deleteHandle(user._id)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        "No user found"
      )}
    </div>
  );
};
export default Lists;
