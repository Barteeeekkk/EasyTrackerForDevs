const Hero = () => {
  return (
    <section className="text-center py-24 px-4 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">
        Simplify your task and issue tracking
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        A minimal issue tracker with a clean UI designed for solo developers and small teams.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-900 text-white rounded-xl shadow hover:bg-blue-800">
          Get Started
        </button>
        <button className="px-6 py-3 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default Hero