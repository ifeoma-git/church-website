import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Welcome to ICCK Tampere
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The International Congregation of Christ the King (ICCK) is a
          multicultural church community in Tampere, Finland, committed to
          worship, fellowship, prayer, and service. Whether you are new to the
          city or looking for a spiritual home, you are warmly welcome to join
          us.
        </p>

        <div className="space-y-2 text-gray-800">
          <p>
            <span className="font-semibold">Service Time:</span> Sundays at 4:00 PM
          </p>
          <p>
            <span className="font-semibold">Sunday School:</span> For children at
            all services unless announced otherwise.
          </p>
        </div>
      </section>

      {/* Church Offerings Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Church Offerings
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your generous offerings support our ministry, outreach programs,
            and community services. Thank you for your kindness and faithfulness.
          </p>

          <Link
            to="/church-offerings"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Church Offerings
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We invite you to worship with us and become part of our vibrant church
          family. Everyone is welcome!
        </p>

        <Link
          to="/contact"
          className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;