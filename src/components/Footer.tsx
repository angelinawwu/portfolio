export default function Footer() {
  return (
    <footer className="pb-10 md:pb-20 bg-[#0000ff]">
      <div className="max-w-7xl mx-auto px-6 text-left geist-mono-font">
        <p className="text-white/70 text-xs">
          Last updated: {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.')}
        </p>
        <p className="text-white/70 text-xs mt-2">
          Made with ❤️ by Angelina Wu (me!)
        </p>
      </div>
    </footer>
  );
}

