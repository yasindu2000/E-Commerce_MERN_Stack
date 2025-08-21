import map from "../../../public/map.png"
import facebook from "../../../public/facebook.png"
import instagram from "../../../public/instagram.png"
import twitter from "../../../public/twitter.png"

function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-200 text-black py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We are here to help you! Reach out to us anytime and we will get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 text-lg">
            Have any questions or need support? Send us a message or reach out directly using the info below.
          </p>
          <div className="space-y-4 text-gray-700">
            <p><span className="font-bold">Email:</span> support@cmart.com</p>
            <p><span className="font-bold">Phone:</span> +94 123 456 789</p>
            <p><span className="font-bold">Address:</span> 123 Main Street, Colombo, Sri Lanka</p>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-blue-600 text-xl mt-4">
              <a href="#"><img src={facebook}alt="" className="w-8.5 h-8.5 rounded-full shadow-sky-600 shadow-md" /></a>
              <a href="#"><img src={instagram} alt="" className="w-8 h-8 shadow-md rounded-xl shadow-pink-800" /></a>
              
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-xl space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full shadow-md shadow-gray-300 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full shadow-md shadow-gray-300  rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full shadow-md shadow-gray-300 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full cursor-pointer hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Location</h2>
        <div className="w-full h-64 md:h-96  rounded-lg flex items-center justify-center overflow-hidden ">
          {/* Replace this with Google Maps iframe */}
          <img src={map} alt="" className="object-cover rounded-2xl w-full h-96" />
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
