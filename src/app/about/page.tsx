import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function About() {
  return (
    <div className="markdown-body flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] overflow-auto">
      <div className="overflow-auto space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 border-b border-[#2d2d2d] pb-2"># About</h1>
          <p className="mb-2 text-sm sm:text-base text-[#d4d4d4]">
            Hey there! 👋
          </p>
          <p className="mb-2 text-sm sm:text-base text-[#d4d4d4]">
            I'm Veronika, a Senior Software Engineer with 7+ years of experience building & maintaining scalable web apps, specializing in Ruby on Rails and full-stack development. 
            In my current role, I also lead the development of a SaaS e-commerce platform, shaping product strategy and roadmap.
            I focus on high-quality product improvements that make a lasting impact and contribute to long-term business success.
          </p>
          <p className="mb-2 text-sm sm:text-base text-[#d4d4d4]">
            Feel free to explore this little app to learn more about me or <Link href="/contact" className="text-[#61afef] hover:text-[#7bc5f5] hover:underline transition-colors duration-200 focus:outline-none rounded">reach out to me</Link> to connect!
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">## Primary Skills</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">### Backend & Database</h3>
              <ul className="list-disc list-inside ml-2 sm:ml-4 text-sm sm:text-base space-y-1 text-[#d4d4d4]">
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">Ruby, Ruby on Rails</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">PostgreSQL, Redis, SQL</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">GraphQL</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">### Frontend & UI</h3>
              <ul className="list-disc list-inside ml-2 sm:ml-4 text-sm sm:text-base space-y-1">
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">JavaScript, React, Stimulus</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">HTML, CSS, Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">### Infrastructure, DevOps & Deployment</h3>
              <ul className="list-disc list-inside ml-2 sm:ml-4 text-sm sm:text-base space-y-1">
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">Heroku, Vercel</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">CircleCI, Pipedream, GitHub Actions</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">AppSignal, Sentry, Honeybadger</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">Docker, AWS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">### Other Skills</h3>
              <ul className="list-disc list-inside ml-2 sm:ml-4 text-sm sm:text-base space-y-1">
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">Cross-functional team leadership</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">Strategic roadmap & product planning</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">Project management</li>
                <li className="hover:text-[#e4e4e4] transition-colors duration-150">Agentic prompt engineering</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <h3 className="font-semibold text-sm sm:text-base">### Favorite tools & a glimpse into my day:</h3>
              </div>

              <div className="flex flex-wrap">
                <Badge>Linear</Badge>
                <Badge>GitHub</Badge>
                <Badge>Spotify</Badge>
                <Badge>Tailwind</Badge>
                <Badge>Figma</Badge>
                <Badge>Cursor</Badge>
                <Badge>Devin</Badge>
                <Badge>v0</Badge>
                <Badge>ChatGPT</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
