

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Siddhi Singh Rathor!
      </h1>
      <p className="text-lg max-w-xl text-center">
        A passionate <span className="font-semibold">Full Stack Developer</span>{" "}
        specializing in Java, React, and Cloud technologies. I love building
        real-world scalable apps .
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:scale-105 transition-transform">
        View My Work
      </button>
    </section>
  );
};

export default Home;
                                                        