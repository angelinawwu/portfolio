export default function Footer() {
  return (
    <footer className="border-t border-[#8888ff]/50 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#8888ff] text-sm">
          Last updated: {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.')}
        </p>
        <p className="text-[#8888ff] text-xs mt-2">
          Made with ❤️ by Angelina Wu (me!)
        </p>
      </div>
    </footer>
  );
}

