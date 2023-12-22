const Services = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center text-3xl font-bold p-6">
        <h1>Who Benefits from Our Task Management app</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
        <div className="bg-green-300 p-4">
          <h1 className="text-2xl font-bold flex justify-center pb-1">Remote workes</h1>
          <h1>
            Remote workers" are individuals who perform their job duties outside
            of a traditional office setting, often working from their homes or
            other locations outside a central office. They use technology and{" "}
          </h1>
        </div>
        <div className="bg-green-300 p-4">
          <h1  className="text-2xl font-bold flex justify-center pb-1">Project management</h1>
          <h1>
            Project management" involves planning, organizing, leading, and
            controlling resources and tasks to achieve specific objectives
            within a defined timeframe and budget. It encompasses overseeing
          </h1>
        </div>
        <div className="bg-green-300 p-4">
          <h1  className="text-2xl font-bold flex justify-center pb-1">Student</h1>
          <h1>A "student" is an individual who is enrolled in an educational institution such as a school, college, or university, pursuing learning, acquiring knowledge, and gaining skills in various subjects or fields </h1>
        </div>
        <div className="bg-green-300 p-4">
          <h1  className="text-2xl font-bold flex justify-center pb-1">Small Business Owners</h1>
          <h1>Small business owners" are individuals who initiate, operate, and oversee small-scale enterprises. They are responsible for the overall management, decision-making, and direction of </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
