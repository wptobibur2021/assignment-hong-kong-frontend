import React from "react";
const AddLists = ({ selectors, onSubmit, handleSubmit, register }) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1">
          <div>
            <input
              className="border p-2"
              required
              type="text"
              placeholder="Enter name"
              {...register("userName", { required: true })}
            />
          </div>
          <div className="my-10 w-52">
            <select
              {...register("category", { required: true })}
              multiple
              className="border"
              size={5}
            >
              {selectors?.map((selector, index) => {
                if (selector.subItems) {
                  return (
                    <>
                      <option key={index} value={selector.title}>
                        {selector.title}
                      </option>
                      ;
                      {selector.subItems?.map((item, index) => (
                        <>
                          <option key={index} value={item.title}>
                            &nbsp;&nbsp;&nbsp;&nbsp;{item.title}
                          </option>
                          {item?.items?.map((subItem, index) => {
                            return (
                              <>
                                <option key={index} value={subItem.itemTitle}>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  {subItem.itemTitle}
                                </option>
                                {subItem?.itemSub?.map((itemSub, index) => {
                                  return (
                                    <>
                                      <option
                                        key={index}
                                        value={itemSub.itemSubTitle}
                                      >
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {itemSub.itemSubTitle}
                                      </option>
                                    </>
                                  );
                                })}
                              </>
                            );
                          })}
                        </>
                      ))}
                    </>
                  );
                } else {
                  return (
                    <option value={selector.title}>{selector.title}</option>
                  );
                }
              })}
            </select>
          </div>
          <div>
            <input
              {...register("aggree", { required: true })}
              type="checkbox"
              required
              label="Agree to terms"
            />
            <label> Agree to terms</label>
          </div>
          <div>
            <button
              className=" py-2 px-5 mt-5 rounded bg-blue-400 text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddLists;
