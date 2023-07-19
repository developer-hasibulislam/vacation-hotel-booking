import { useState } from "react";
import { useGetHotelByPaginationQuery } from "../../../../features/hotel/hotelApi";
import Pagination from "../../common/Pagination";

const BookingTable = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetHotelByPaginationQuery();

  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* End theade */}
          <tbody>
            {data?.hotels?.map((hotel) => (
              <tr key={hotel?._id}>
                <td className="text-blue-1 fw-500">{hotel?.name}</td>

                <td>{hotel?.location}</td>

                <td>{hotel?.price?.regularPrice}</td>

                <td>
                  <div className="row x-gap-10 y-gap-10 items-center">
                    <div className="col-auto">
                      <button className="flex-center bg-light-2 rounded-4 size-35">
                        <i className="icon-eye text-16 text-light-1" />
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="flex-center bg-light-2 rounded-4 size-35">
                        <i className="icon-edit text-16 text-light-1" />
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="flex-center bg-light-2 rounded-4 size-35">
                        <i className="icon-trash-2 text-16 text-light-1" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
            {/* End tr */}
          </tbody>
          {/* End tbody */}
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
