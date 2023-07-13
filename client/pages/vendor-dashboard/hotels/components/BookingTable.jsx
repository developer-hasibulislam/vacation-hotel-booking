/**
 * Title: BookingTable.jsx
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 11, July 2023
 */

import { useState } from "react";
import Pagination from "../../common/Pagination";
import {
  useDeleteAttributeMutation,
  useGetAttributeByPaginationQuery,
} from "../../../../features/attribute/attributeApi";

const BookingTable = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAttributeByPaginationQuery(page);
  const [deleteAttribute] = useDeleteAttributeMutation();

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Hotels</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {data?.attributes?.map(({ items, title, _id }) =>
                    items.map((item) => (
                      <tr key={item._id}>
                        <td className="text-blue-1 fw-500">{item.item}</td>
                        <td>{title}</td>
                        <td>
                          <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                            {item?.hotels?.length}
                          </span>
                        </td>
                        <td>
                          <div className="row x-gap-10 y-gap-10 items-center">
                            {/* edit */}
                            {/* <div className="col-auto">
                              <button className="flex-center bg-light-2 rounded-4 size-35">
                                <i className="icon-edit text-16 text-light-1" />
                              </button>
                            </div> */}
                            <div className="col-auto">
                              {/* delete */}
                              <button
                                className="flex-center bg-light-2 rounded-4 size-35"
                                onClick={() =>
                                  deleteAttribute({
                                    id: _id,
                                    item: item.item,
                                  })
                                }
                              >
                                <i className="icon-trash-2 text-16 text-light-1" />
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                  {/* End tr */}
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination totalPages={Math.ceil(data?.total / 10)} setPage={setPage} />
    </>
  );
};

export default BookingTable;
