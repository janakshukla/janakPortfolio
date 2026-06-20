import { GitHubCalendar } from 'react-github-calendar';

const GithubActivity = () => {
  // Custom monochrome theme for the strict editorial aesthetic
  const monochromeTheme = {
    dark: ['#111111', '#333333', '#666666', '#aaaaaa', '#ffffff']
  };

  return (
    <section id="github-activity" className="pt-12 md:pt-24 pb-8 md:pb-16 border-t border-white/10 mt-8 md:mt-16">
      <div className="flex flex-col gap-12 md:gap-16">
        
        {/* Top: Heading */}
        <div className="w-full">
          <h2 
            className="text-5xl md:text-6xl text-white tracking-tight leading-none"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Code <span className="italic text-gray-500">Contributions</span>
          </h2>
        </div>

        {/* Bottom: GitHub Calendars */}
        <div className="w-full flex flex-col gap-12">
          
          {/* Work Account */}
          <div className="flex flex-col">
             <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-8">
               <h3 className="text-xs text-gray-500 font-sans tracking-[0.2em] uppercase">
                 Work
               </h3>
               <a 
                 href="https://github.com/janakshukla-wft" 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-[10px] text-white hover:text-gray-300 tracking-wider uppercase"
               >
                 @janakshukla-wft
               </a>
             </div>
             <div className="w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
               <div className="min-w-[800px] text-gray-300" style={{ color: '#d1d5db' }}>
                 <GitHubCalendar 
                   username="janakshukla-wft" 
                   colorScheme="dark"
                   theme={monochromeTheme}
                   blockSize={12}
                   blockMargin={4}
                   fontSize={12}
                 />
               </div>
             </div>
          </div>

          {/* Personal Account */}
          <div className="flex flex-col">
             <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-8">
               <h3 className="text-xs text-gray-500 font-sans tracking-[0.2em] uppercase">
                 Personal
               </h3>
               <a 
                 href="https://github.com/janakshukla/" 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-[10px] text-white hover:text-gray-300 tracking-wider uppercase"
               >
                 @janakshukla
               </a>
             </div>
             <div className="w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
               <div className="min-w-[800px] text-gray-300" style={{ color: '#d1d5db' }}>
                 <GitHubCalendar 
                   username="janakshukla" 
                   colorScheme="dark"
                   theme={monochromeTheme}
                   blockSize={12}
                   blockMargin={4}
                   fontSize={12}
                 />
               </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubActivity;
