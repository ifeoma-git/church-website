const Hero = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <h2 className="text-4xl font-bold mb-4">Welcome to ICCK Tampere</h2>
      <p className="text-lg mb-6">
        A multicultural church community in Tampere, Finland committed to worship, fellowship, prayer, and service.
      </p>
      <a
        href="/donate"
        className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded shadow-lg transition"
      >
        Church Offerings
      </a>
    </div>
  );
};

export default Hero;