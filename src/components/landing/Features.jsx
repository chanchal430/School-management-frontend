import Container from "../common/Container";
import {
  Users,
  Book,
  ClipboardClock,
  BookOpenCheck,
  UserRoundCog,
  Speech,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: Book,
      title: "Student Management",
      desc: "Store and manage all student records securely.",
    },
    {
      icon: ClipboardClock,
      title: "Attendance Tracking",
      desc: "Track daily attendance automatically.",
    },
    {
      icon: BookOpenCheck,
      title: "Exam & Results",
      desc: "Generate report cards and exam analytics.",
    },
    {
      icon: UserRoundCog,
      title: "Teacher Management",
      desc: "Manage teacher schedules and profiles.",
    },
    {
      icon: Speech,
      title: "Parent Communication",
      desc: "Send notifications and updates instantly.",
    },
    {
      icon: Users,
      title: "Fee Management",
      desc: "Track school payments and invoices.",
    },
  ];

  return (
    <section className="w-full py-28 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Everything Your School Needs</h2>

          <p className="mt-4 text-gray-600">
            Powerful tools to simplify school administration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="p-8 bg-blue-50
               rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <f.icon className="w-10 h-10 text-blue-600 mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>

              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
