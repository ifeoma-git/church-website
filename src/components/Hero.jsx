import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to ICCK Tampere
        </h2>
        <p className="text-lg md:text-xl mb-8">
          A multicultural church community in Tampere, Finland committed to
          worship, fellowship, prayer, and service.
        </p>
        <p className="mb-8">
          <strong>Service Time:</strong> Sundays at 4:00 PM
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Visit Us
          </Link>
          <Link
            to="/donate"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;