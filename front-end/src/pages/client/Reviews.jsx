import { useState } from "react";
import { FaEdit, FaTrash, FaStar } from "react-icons/fa";
import axios from "axios"
import toast from "react-hot-toast";

function Reviews() {
 
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
  e.preventDefault();
  

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login first!");
    window.location.href = "/login";
    return;
  }

  const reviewData = {
            
            name: name,
            comment:comment,
            rating:rating
        }


        axios.post("http://localhost:5000/reviews",reviewData
        ).then(
            (res)=>{
                console.log("Review added successfully");
                console.log(res.data);
                toast.success("Review added successfully");
                
            }
        ).catch(
            (error)=>{
                console.error("Error adding review", error);
                toast.error("Failed to add review");              
            }
        )

       

  }

  return (
    <div className="h-full  p-4 md:p-2">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Placed Your Review
      </h1>

      {/* Review Form */}
      <div className="bg-white border-t-1 border-gray-200 shadow-xl rounded-2xl p-6 mb-10 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="border-t-1 border-gray-200 shadow-md shadow-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <textarea
            placeholder="Write your review..."
           value={comment}
            onChange={(e)=> setComment(e.target.value)}
            className="border-t-1 border-gray-200 shadow-md shadow-gray-300 rounded-xl px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>

          {/* Rating Selector */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-500">Rating:</label>
            <select
              value={rating}
            onChange={(e)=> setRating(e.target.value)}
              className="border border-gray-400 text-gray-600 rounded-lg px-2 py-1 focus:outline-none"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option className="text-gray-600" key={r} value={r}>
                  {r} Star{r > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-700 transition duration-300"
          >
           Add Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      
    </div>
  );
}

export default Reviews;
