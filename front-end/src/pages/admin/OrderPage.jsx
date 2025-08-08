import axios from "axios";
import React, { useEffect, useState } from "react";
import Paginator from "../../components/Paginator";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [orderNotes, setOrderNotes] = useState("");
  const [orderStatus, setOrderStatus] = useState("pending");
  const [clickedOrder, setClickedOrder] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (loading) {
      axios
        .get("http://localhost:5000/orders/" + page +
						"/" +
						limit, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setOrders(res.data.orders);
          setTotalPages(res.data.totalPages);
          setLoading(false);
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
          // Handle error appropriately
        });
    }
  }, [loading, page, limit]);

  return (
    <div className="w-full h-full flex ">
      <table className="w-full border-[3px]">
        <thead>
          <tr>
            <th className="p-[10px]">Order ID</th>
            <th className="p-[10px]">email</th>
            <th className="p-[10px]">name</th>
            <th className="p-[10px]">Address</th>
            <th className="p-[10px]">Phone</th>
            <th className="p-[10px]">Status</th>
            <th className="p-[10px]">Date</th>
            <th className="p-[10px]">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            return (
              <tr
                key={index}
                className="border-b-[1px] hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  setOrderStatus(order.status);
                  setOrderNotes(order.notes);
                  setClickedOrder(order);
                  setPopupVisible(true);
                }}
              >
                <td className="p-[10px]">{order.orderId}</td>
                <td className="p-[10px]">{order.email}</td>
                <td className="p-[10px]">{order.name}</td>
                <td className="p-[10px]">{order.address}</td>
                <td className="p-[10px]">{order.phone}</td>
                <td className="p-[10px]">{order.status}</td>
                <td className="p-[10px]">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="p-[10px] text-end">
                  {order.total.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Paginator
				currentPage={page}
				totalPages={totalPages}
				setCurrentPage={setPage}
				limit={limit}
				setLimit={setLimit}
				setLoading={setLoading}
			/>
    </div>
  );
}

export default OrderPage;
