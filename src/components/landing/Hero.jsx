import Container from "../common/Container"

function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-28">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            The Smart Way to
            <span className="text-blue-600"> Manage Schools</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Manage students, teachers, attendance, exams and communication
            all in one powerful platform.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Start Free Trial
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Book Demo
            </button>

          </div>

        </div>

      </Container>
    </section>
  )
}

export default Hero