'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FolderIcon, FolderOpenIcon, ArrowsPointingOutIcon, ArrowsPointingInIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const sections = [
  { path: '/about', label: 'about.md' },
  { path: '/experience', label: 'experience.md' },
  { path: '/projects', label: 'projects.md' },
  { path: '/travel', label: 'travel.md' },
  { path: '/contact', label: 'contact.md' },
];

export default function VSCodeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSectionsExpanded, setIsSectionsExpanded] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    handleFullscreenChange();
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleFullScreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  // No JS focus suppression; CSS handles outlines and focus-visible rings

  return (
    <div className={`
      min-h-screen py-4 sm:py-8 md:py-12 relative bg-gradient-to-br from-[#0ea5e9] via-[#2dd4bf] to-[#0d9488] 
      flex items-center justify-center 
      before:content-[''] before:absolute before:inset-0 
      before:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] 
      before:bg-[size:24px_24px] before:pointer-events-none
      ${isMounted && isFullScreen ? 'py-0' : ''}
    `}>
      <div className={`absolute inset-0 flex items-center justify-center ${!isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}>
      <div 
        onClick={isMinimized ? () => setIsMinimized(false) : undefined}
        className={`
          opacity-100 pointer-events-auto
          ${isMinimized 
            ? 'w-48 md:w-64 lg:w-72 xl:w-80 h-7 fixed bottom-4 left-4 cursor-pointer hover:bg-[#252526]' 
            : isFullScreen
              ? 'w-full h-full'
              : 'w-full max-w-[1200px] mx-4 sm:mx-8 md:mx-12 h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)] md:h-[800px] max-h-[90vh]'
          }
          ${!isFullScreen ? 'rounded-lg shadow-2xl' : ''}
          bg-[#1e1e1e] overflow-hidden isolate 
          transition-all duration-300 ease-in-out
        `}>
        {isMinimized ? (
        <div 
          className="h-7 bg-[#323233] flex items-center px-2 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="Restore window"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsMinimized(false); } }}
        >
          <button 
            onClick={() => setIsMinimized(false)}
            className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset"
            title="Restore"
            aria-label="Restore"
            autoFocus
          />
          <span className="text-xs ml-3 text-[#bbbbbb]">Interactive CV - VS Code</span>
        </div>
        ) : (
        <>
        <div className="h-7 bg-[#323233] flex items-center px-2">
          <div className="flex gap-2">
            <button 
              onClick={() => setIsVisible(false)} 
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset"
              title="Close"
            >
              <span className="hidden group-hover:inline text-[#4a0002] text-[10px] leading-none items-center justify-center -mt-[1px]">×</span>
            </button>
            <button 
              onClick={!isFullScreen ? () => setIsMinimized(true) : undefined} 
              disabled={isFullScreen}
              aria-disabled={isFullScreen}
              className={`w-3 h-3 rounded-full transition-colors flex items-center justify-center group focus:outline-none ${
                isFullScreen
                  ? 'bg-[#6b7280] cursor-not-allowed opacity-60'
                  : 'bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset'
              }`}
              title={isFullScreen ? 'Minimize is disabled in full screen' : 'Minimize'}
            >
              <span className="hidden group-hover:inline text-[#4a0002] text-[10px] leading-none items-center justify-center -mt-[1px]">−</span>
            </button>
            <button 
              onClick={handleFullScreen} 
              className="hidden sm:flex w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset"
              title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
            >
              {isFullScreen ? (
                <ArrowsPointingInIcon className="hidden group-hover:inline w-[8px] h-[8px] text-[#4a0002]" />
              ) : (
                <ArrowsPointingOutIcon className="hidden group-hover:inline w-[8px] h-[8px] text-[#4a0002]" />
              )}
            </button>
          </div>
          <span className="text-xs ml-auto hidden md:inline">Interactive CV - VS Code</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-auto md:hidden text-[#bbbbbb] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset rounded"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="flex h-[calc(100%-32px)] relative">
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          <div className={`
            absolute md:relative z-50 md:z-auto
            w-[18%] md:w-[20%] lg:w-[22%] xl:w-[240px] min-w-[165px] max-w-[256px]
            bg-[#252526] border-r border-[#3e3e42] h-full
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <div className="p-3">
              <div className="text-[#bbbbbb] text-xs uppercase mb-4">EXPLORER</div>
              <div 
                className="text-[#bbbbbb] text-xs uppercase mb-2 flex items-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset rounded"
                onClick={() => setIsSectionsExpanded(!isSectionsExpanded)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsSectionsExpanded(!isSectionsExpanded);
                  }
                }}
                role="button"
                aria-expanded={isSectionsExpanded}
                aria-label="Toggle CV sections"
                tabIndex={0}
              >
                {isSectionsExpanded ? (
                  <FolderOpenIcon className="w-4 h-4 mr-2 text-[#858585]" />
                ) : (
                  <FolderIcon className="w-4 h-4 mr-2 text-[#858585]" />
                )}
                CV_SECTIONS
              </div>
              {isSectionsExpanded && (
                <nav className="-mx-3">
                  {sections.map((section) => (
                    <Link
                      key={section.path}
                      href={section.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center py-[2px] text-[13px] transition-all duration-200 outline-none ${
                        pathname === section.path
                          ? 'bg-[#37373d] text-white'
                          : 'text-[#bbbbbb] hover:bg-[#2a2d2e]'
                      } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset`}
                    >
                      <span className="px-5 flex items-center flex-1">
                        <i className="codicon codicon-markdown mr-2 text-[#858585]"></i>
                        {section.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </div>

          <div className="flex-1 flex flex-col min-w-0">
            {/* Tab Bar */}
            <div className="flex bg-[#252526] border-b border-[#3e3e42] overflow-x-auto">
              {sections.map((section) => (
                <Link
                  key={section.path}
                  href={section.path}
                  className={`px-3 sm:px-4 py-1 text-[11px] sm:text-[13px] whitespace-nowrap border-r border-[#3e3e42] transition-all duration-200 outline-none ${
                    pathname === section.path
                      ? 'bg-[#1e1e1e] text-white'
                      : 'bg-[#2d2d2d] text-[#969696] hover:bg-[#2a2a2a] hover:text-[#bbbbbb]'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#61afef] focus-visible:ring-inset`}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            <div className="flex-1 p-4 sm:p-6 overflow-auto">
              {children}
            </div>
          </div>
        </div>
        </>
        )}
      </div>
      </div>
    </div>
  );
} 
