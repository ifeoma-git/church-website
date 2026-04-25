const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "4:00 PM",
    location: "ICCK Church Hall, Tampere, Finland",
  },
  {
    title: "Prayer Meeting",
    date: "First Saturday of Every Month",
    time: "6:00 PM",
    location: "ICCK Church Hall",
  },
];

const Events = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
        Upcoming Events
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-700"
          >
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;