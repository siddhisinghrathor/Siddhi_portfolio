const Contact = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-orange-600">Let’s</span> <span className="text-violet-600">Build</span> Something Together
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Have an opportunity, idea, or just want to connect?
          I’m always open to conversations.
        </p>

        <form className="mt-12 space-y-6 max-w-md mx-auto">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 
              focus:outline-none focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 
              focus:outline-none focus:border-violet-500"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 
              focus:outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg 
              bg-violet-600 hover:bg-violet-700 
              transition font-medium"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
