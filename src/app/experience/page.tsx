export default function Experience() {
  return (
    <div className="markdown-body flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] overflow-auto">
      <div className="overflow-auto space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 border-b border-[#2d2d2d] pb-2"># Professional Experience</h1>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">## Head of Product</h2>
        <p className="text-[#bbbbbb] mb-2 text-sm sm:text-base">Firmhouse • 2024-Present</p>
        <p className="mb-2 text-sm sm:text-base text-[#d4d4d4]">Leading product development at a fast-growing SaaS e-commerce platform, I focus on driving continuous product development improvements. 
          My goal is to ensure we ship rapidly while maintaining high quality and offering a great user experience. I prioritize high-impact initiatives, balancing client needs with long-term business goals.
        </p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">## Senior Software Engineer</h2>
        <p className="text-[#bbbbbb] mb-2 text-sm sm:text-base">Firmhouse • 2018-Present (concurrent with Head of Product since 2024)</p>
        <p className="mb-2 text-sm sm:text-base text-[#d4d4d4]">
          As a core member of the engineering team, I design, build, and maintain scalable client-facing applications 
          using Ruby on Rails, PostgreSQL, GraphQL, and JavaScript (Turbo & Stimulus). I work across the full stack to deliver robust features, optimize performance, maintain code quality and mentor junior developers.
        </p>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">## Full Stack Software Engineer</h2>
        <p className="text-[#bbbbbb] mb-2 text-sm sm:text-base">Freelance • 2018-2019</p>
        <p className="mb-2 text-sm sm:text-base text-[#d4d4d4]">
          Worked with clients to design and build full-stack web applications using JavaScript (React/Vue) 
          on the frontend and Ruby on Rails, PostgreSQL, and GraphQL on the backend.
          Delivered high-quality, well-tested features that met client goals and deadlines.
        </p>
        </div>
      </div>
    </div>
  );
}
