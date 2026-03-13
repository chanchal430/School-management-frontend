import { ArrowRight } from "lucide-react"

function CTA() {
  
  return (
    <section className="w-full py-28 bg-blue-600 text-white">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Start Managing Your School Smarter
        </h2>

        <p className="mb-10 text-lg">
          Join thousands of schools using our platform.
        </p>

        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold">
          Get Started

            <ArrowRight className="inline-block ml-2" />
        </button>

      </div>

    </section>
  )
}

export default CTA;