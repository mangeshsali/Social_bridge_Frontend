import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuMessageCircleCode } from "react-icons/lu";
import { MdRocketLaunch } from "react-icons/md";

const features = [
  {
    title: "Find Coding Partners",
    description:
      "Discover developers with similar goals and collaborate on exciting real-world projects.",
    icon: <FiUsers className="w-8 h-8 text-indigo-600" />,
    image: "https://picsum.photos/seed/feature1/400/300",
  },
  {
    title: "Real-Time Chat",
    description:
      "Communicate instantly with your partners through our real-time chat system.",
    icon: <LuMessageCircleCode className="w-8 h-8 text-green-600" />,
    image: "https://picsum.photos/seed/feature2/400/300",
  },
  {
    title: "Project Collaboration",
    description:
      "Work together on open-source and side projects to build your portfolio and skills.",
    icon: <FaCode className="w-8 h-8 text-blue-600" />,
    image: "https://picsum.photos/seed/feature3/400/300",
  },
  {
    title: "Boost Your Career",
    description:
      "Grow your network, improve your GitHub activity, and gain visibility in the dev community.",
    icon: <MdRocketLaunch className="w-8 h-8 text-yellow-500" />,
    image: "https://picsum.photos/seed/feature4/400/300",
  },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    feedback:
      "SocialBridge helped me find my dream dev partner. We’ve built 3 projects together!",
    image: "https://picsum.photos/seed/user1/100",
  },
  {
    name: "Priya Mehta",
    role: "Full Stack Developer",
    feedback:
      "It’s the best platform to collaborate and grow. The chat feature is super smooth.",
    image: "https://picsum.photos/seed/user2/100",
  },
  {
    name: "Ravi Patel",
    role: "React Enthusiast",
    feedback:
      "SocialBridge gave me the exposure and motivation I needed as a self-taught dev.",
    image: "https://picsum.photos/seed/user3/100",
  },
];

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-indigo-600">SocialBridge</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">
            Connect, Collaborate, Code.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Meet coding partners, build real projects, and grow your developer
            journey — together.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Join Now
          </button>
        </motion.div>

        <motion.img
          src="https://picsum.photos/seed/hero/500/400"
          alt="SocialBridge Hero"
          className="w-full md:w-1/2 rounded-md shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-700">
          Features
        </h3>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <div className="flex items-center mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-700">
          How It Works
        </h3>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 text-center">
          <div>
            <h4 className="text-lg font-bold mb-2">1. Sign Up</h4>
            <p>Create your profile and set your coding interests.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">2. Connect</h4>
            <p>Find developers with similar goals and send invites.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">3. Collaborate</h4>
            <p>Start projects, chat in real-time, and grow together!</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-700">
          What Developers Say
        </h3>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-3">
                “{testimonial.feedback}”
              </p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-4 text-indigo-700">
          Start for Free
        </h3>
        <p className="text-gray-700 mb-8">
          Upgrade anytime as you grow. No credit card required.
        </p>
        <div className="inline-block bg-white p-8 rounded-lg shadow-md">
          <h4 className="text-4xl font-bold text-indigo-600 mb-4">
            ₹0 / month
          </h4>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✅ Unlimited Project Posts</li>
            <li>✅ Real-Time Chat</li>
            <li>✅ Match with Developers</li>
            <li>✅ GitHub Profile Integration</li>
          </ul>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SocialBridge. Made with ❤️ by Mangesh
        Sali.
      </footer>
    </div>
  );
};

export default LandingPage;
