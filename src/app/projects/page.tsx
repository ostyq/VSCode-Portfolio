"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Calendar, Code, ExternalLink, ChevronRight, ChevronDown, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    InteractiveCV: true,
    SearchToPlay: true,
    TacoDigest: true,
    ArcadeHub: true,
  });
  const isInitialMount = useRef(true);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, projectId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleProject(projectId);
    }
  };

  return (
    <div className="markdown-body flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] overflow-auto">
      <div className="overflow-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 border-b border-[#2d2d2d] pb-2"># Projects</h1>

        <div className="mb-8 sm:mb-10 group">
          <div 
            className="flex items-center cursor-pointer mb-2 hover:opacity-80 transition-opacity duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset rounded" 
            onClick={() => toggleProject("InteractiveCV")} 
            onKeyDown={(e) => handleKeyDown(e, "InteractiveCV")}
            tabIndex={0}
            role="button"
            aria-expanded={expandedProjects["InteractiveCV"]}
            aria-label="Toggle Interactive CV project details"
          > 
            <div className="transition-transform duration-200">
              {expandedProjects["InteractiveCV"] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#4ec9b0] ml-2 group-hover:text-[#5ed9c0] transition-colors duration-200">## Interactive CV</h2>
          </div>

          {expandedProjects["InteractiveCV"] && (
            <div className={`pl-4 sm:pl-6 ${!isInitialMount.current ? 'animate-[fadeIn_0.3s_ease-in-out]' : ''}`}>
              <div className="flex flex-wrap items-center gap-2 mb-3 text-[#cccccc] text-xs sm:text-sm">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2 text-[#cccccc]" />
                  <span>2025–Present</span>
                </div>
                <span className="text-[#555] hidden sm:inline">|</span>
                <div className="flex items-center">
                  <Globe size={14} className="mr-2 text-[#cccccc]" />
                  <a
                    href="https://cv.byveronika.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#61afef] hover:text-[#7bc5f5] hover:underline flex items-center break-all transition-colors duration-200 group/link focus:outline-none rounded"
                  >
                    cv.byveronika.dev
                    <ExternalLink size={12} className="ml-1 text-[#cccccc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              <p className="mb-4 text-[#d4d4d4] text-sm sm:text-base">
                An interactive, VS Code-inspired CV website, the one you're looking at right now! 
                Built to showcase my work in a more engaging way than a traditional CV, and as a small tribute to the tool I spend most of my time in. Feel free to look around and explore!
              </p>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <h3 className="font-semibold text-sm sm:text-base">### Tech stack:</h3>
                </div>

                <div className="flex flex-wrap">
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Vercel</Badge>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-8 sm:mb-10 group">
          <div 
            className="flex items-center cursor-pointer mb-2 hover:opacity-80 transition-opacity duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset rounded" 
            onClick={() => toggleProject("SearchToPlay")} 
            onKeyDown={(e) => handleKeyDown(e, "SearchToPlay")}
            tabIndex={0}
            role="button"
            aria-expanded={expandedProjects["SearchToPlay"]}
            aria-label="Toggle Search to Play project details"
          > 
            <div className="transition-transform duration-200">
              {expandedProjects["SearchToPlay"] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#4ec9b0] ml-2 group-hover:text-[#5ed9c0] transition-colors duration-200">## Search to Play</h2>
          </div>

          {expandedProjects["SearchToPlay"] && (
            <div className={`pl-4 sm:pl-6 ${!isInitialMount.current ? 'animate-[fadeIn_0.3s_ease-in-out]' : ''}`}>
              <div className="flex flex-wrap items-center gap-2 mb-3 text-[#cccccc] text-xs sm:text-sm">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2 text-[#cccccc]" />
                  <span>2025–Present</span>
                </div>
                <span className="text-[#555] hidden sm:inline">|</span>
                <div className="flex items-center">
                  <Globe size={14} className="mr-2 text-[#cccccc]" />
                  <a
                    href="https://searchtoplay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#61afef] hover:text-[#7bc5f5] hover:underline flex items-center break-all transition-colors duration-200 group/link focus:outline-none rounded"
                  >
                    searchtoplay.com
                    <ExternalLink size={12} className="ml-1 text-[#cccccc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              <p className="mb-2 text-[#d4d4d4] text-sm sm:text-base">
                A social platform for discovering, tracking and sharing the love for video games.
                Think Letterboxd, but for games — with a clean design and a social twist.
                Looking for your next favorite game or curious what your friends are playing? Check it out!
              </p>

              <div className="flex items-center mb-4 text-xs text-[#abb2bf]">
                <Users size={12} className="mr-2 text-[#abb2bf]" />
                <span>Built together with </span>
                <a
                  href="https://dpashutskii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61afef] hover:text-[#7bc5f5] hover:underline ml-1 flex items-center break-all transition-colors duration-200 group/link focus:outline-none rounded"
                >
                  dpashutskii
                  <ExternalLink size={10} className="ml-1 text-[#cccccc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <h3 className="font-semibold text-sm sm:text-base">### Tech stack:</h3>
                </div>

                <div className="flex flex-wrap">
                  <Badge>Ruby on Rails</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Hotwired</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Heroku</Badge>
                  <Badge>API integrations</Badge>
                  <Badge>Sentry</Badge>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-8 sm:mb-10 group">
          <div 
            className="flex items-center cursor-pointer mb-2 hover:opacity-80 transition-opacity duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset rounded" 
            onClick={() => toggleProject("TacoDigest")} 
            onKeyDown={(e) => handleKeyDown(e, "TacoDigest")}
            tabIndex={0}
            role="button"
            aria-expanded={expandedProjects["TacoDigest"]}
            aria-label="Toggle Taco Digest project details"
          > 
            <div className="transition-transform duration-200">
              {expandedProjects["TacoDigest"] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#4ec9b0] ml-2 group-hover:text-[#5ed9c0] transition-colors duration-200">## Taco Digest</h2>
          </div>

          {expandedProjects["TacoDigest"] && (
            <div className={`pl-4 sm:pl-6 ${!isInitialMount.current ? 'animate-[fadeIn_0.3s_ease-in-out]' : ''}`}>
              <div className="flex flex-wrap items-center gap-2 mb-3 text-[#cccccc] text-xs sm:text-sm">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2 text-[#cccccc]" />
                  <span>2021–2023 (Paused)</span>
                </div>
                <span className="text-[#555] hidden sm:inline">|</span>
                <div className="flex items-center">
                  <Globe size={14} className="mr-2 text-[#cccccc]" />
                  <a
                    href="https://tacodigest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#61afef] hover:text-[#7bc5f5] hover:underline flex items-center break-all transition-colors duration-200 group/link focus:outline-none rounded"
                  >
                    tacodigest.com
                    <ExternalLink size={12} className="ml-1 text-[#cccccc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              <p className="mb-2 text-[#d4d4d4] text-sm sm:text-base">
              A personal email digest service that helps users cut through information overload by aggregating content 
              from RSS feeds, blogs, and other web sources into clean, scheduled email newsletters. 
              Users can customize their sources and delivery frequency to stay informed without the noise.
              </p>

              <div className="flex items-center mb-4 text-xs text-[#abb2bf]">
                <Users size={12} className="mr-2 text-[#abb2bf]" />
                <span>Built together with </span>
                <a
                  href="https://dpashutskii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61afef] hover:text-[#7bc5f5] hover:underline ml-1 flex items-center break-all transition-colors duration-200 group/link focus:outline-none rounded"
                >
                  dpashutskii
                  <ExternalLink size={10} className="ml-1 text-[#cccccc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Code size={16} className="mr-2 text-[#9cdcfe]" />
                  <h3 className="font-semibold text-sm sm:text-base">### Tech stack:</h3>
                </div>

                <div className="flex flex-wrap">
                  <Badge>Ruby on Rails</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>React.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Heroku</Badge>
                  <Badge>Honeybadger</Badge>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-8 sm:mb-10 group">
          <div 
            className="flex items-center cursor-pointer mb-2 hover:opacity-80 transition-opacity duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset rounded" 
            onClick={() => toggleProject("ArcadeHub")} 
            onKeyDown={(e) => handleKeyDown(e, "ArcadeHub")}
            tabIndex={0}
            role="button"
            aria-expanded={expandedProjects["ArcadeHub"]}
            aria-label="Toggle Arcade Hub project details"
          > 
            <div className="transition-transform duration-200">
              {expandedProjects["ArcadeHub"] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#4ec9b0] ml-2 group-hover:text-[#5ed9c0] transition-colors duration-200">## Arcade Hub</h2>
          </div>

          {expandedProjects["ArcadeHub"] && (
            <div className={`pl-4 sm:pl-6 ${!isInitialMount.current ? 'animate-[fadeIn_0.3s_ease-in-out]' : ''}`}>
              <div className="flex flex-wrap items-center gap-2 mb-3 text-[#cccccc] text-xs sm:text-sm">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2 text-[#cccccc]" />
                  <span>2019-2020 (Paused)</span>
                </div>
                <span className="text-[#555] hidden sm:inline">|</span>
                <div className="flex items-center">
                  <Globe size={14} className="mr-2 text-[#cccccc]" />
                  <a
                    href="https://arcade-hub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#61afef] hover:text-[#7bc5f5] hover:underline flex items-center break-all transition-colors duration-200 group/link focus:outline-none rounded"
                  >
                    arcadehub.com
                    <ExternalLink size={12} className="ml-1 text-[#cccccc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              <p className="mb-2 text-[#d4d4d4] text-sm sm:text-base">
              A simple web app to explore and discover the best Apple Arcade games — all in one place.
              When Apple Arcade launched, it was exciting, but not easy to find the truly great games.
              So we built this app to help ourselves (and others) find the best titles on the service and experiment with new technologies along the way.
              </p>

              <div className="flex items-center mb-4 text-xs text-[#abb2bf]">
                <Users size={12} className="mr-2 text-[#abb2bf]" />
                <span>Built together with </span>
                <a
                  href="https://dpashutskii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61afef] hover:text-[#7bc5f5] hover:underline ml-1 flex items-center break-all transition-colors duration-200 group/link focus:outline-none rounded"
                >
                  dpashutskii
                  <ExternalLink size={10} className="ml-1 text-[#cccccc] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Code size={16} className="mr-2 text-[#9cdcfe]" />
                  <h3 className="font-semibold text-sm sm:text-base">### Tech stack:</h3>
                </div>

                <div className="flex flex-wrap">
                  <Badge>Node.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Heroku</Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
