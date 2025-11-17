import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="markdown-body flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] overflow-auto">
      <div className="overflow-auto space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 border-b border-[#2d2d2d] pb-2"># Contact Information</h1>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">## Get in Touch</h2>
        <p className="mb-4 text-sm sm:text-base text-[#d4d4d4]">I'm always open to discussing new opportunities, projects, or collaborations. 
        For the fastest response, please reach out via email.</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm sm:text-base group">
            <FaEnvelope className="text-[#cccccc] group-hover:scale-110 transition-transform duration-200" />
            <a href="mailto:hi@byveronika.dev" className="text-[#61afef] hover:text-[#7bc5f5] hover:underline break-all transition-colors duration-200 focus:outline-none rounded px-1" aria-label="Email">hi@byveronika.dev</a>
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base group">
            <FaGlobe className="text-[#cccccc] group-hover:scale-110 transition-transform duration-200" />
            <a href="https://byveronika.dev" target="_blank" rel="noopener noreferrer" className="text-[#61afef] hover:text-[#7bc5f5] hover:underline break-all transition-colors duration-200 focus:outline-none rounded px-1" aria-label="Website">byveronika.dev</a>
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base group">
            <FaGithub className="text-[#cccccc] group-hover:scale-110 transition-transform duration-200" />
            <a href="https://github.com/ostyq" target="_blank" rel="noopener noreferrer" className="text-[#61afef] hover:text-[#7bc5f5] hover:underline break-all transition-colors duration-200 focus:outline-none rounded px-1" aria-label="GitHub">github.com/ostyq</a>
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base group">
            <FaLinkedin className="text-[#cccccc] group-hover:scale-110 transition-transform duration-200" />
            <a href="https://linkedin.com/in/veronika-tolpeeva" target="_blank" rel="noopener noreferrer" className="text-[#61afef] hover:text-[#7bc5f5] hover:underline break-all transition-colors duration-200 focus:outline-none rounded px-1" aria-label="LinkedIn">linkedin.com/in/veronika-tolpeeva</a>
          </li>
        </ul>
      </div>

      <div className="pt-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">## Location</h2>
        <p className="text-sm sm:text-base text-[#d4d4d4]">Amsterdam Area, The Netherlands</p>
      </div>

      <div className="pt-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">## Availability</h2>
        <p className="mb-2 text-sm sm:text-base text-[#d4d4d4]">Currently open to:</p>
        <ul className="list-disc list-inside ml-2 sm:ml-4 text-sm sm:text-base space-y-1 text-[#d4d4d4]">
          <li>Full-time positions (remote or hybrid in Amsterdam)</li>
          <li>Collaboration on open-source or community initiatives</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
