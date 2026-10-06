export default function Footer() {
  return (
    <footer className="py-12 bg-[#06070A] border-t border-white/5 text-neutral-400 text-sm overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left w-full">
        <div>
          <div className="font-display font-extrabold text-xl sm:text-2xl text-white flex items-center justify-center md:justify-start gap-2 tracking-tight break-words">
            <span>YOUR FIRST DESIGN!</span>
            <span>🎨</span>
          </div>
          <div className="text-neutral-300 font-medium text-sm mt-1">
            Come, Let’s Create Your First Photoshop Design.
          </div>
        </div>

        <div className="text-xs text-neutral-500">
          © 2026 Franklin Etinosa Ighile. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
