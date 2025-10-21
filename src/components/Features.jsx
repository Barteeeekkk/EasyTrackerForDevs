const Features = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 py-16 max-w-5xl mx-auto">
      <div>
        <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
        <p className="text-gray-600">
          A simple and intuitive interface makes it easy to create, manage, and track issues.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Smart Issue Forms</h3>
        <p className="text-gray-600">
          Guided forms help you submit issues with relevant information.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Slack Integration</h3>
        <p className="text-gray-600">
          Create issues from Slack and keep everyone in sync.
        </p>
      </div>
    </section>
  )
}

export default Features