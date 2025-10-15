export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/50 text-sm">
          Last updated: {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.')}
        </p>
        <p className="text-white/30 text-xs mt-2">
          Created with ❤️ by Angelina Wu (me!)
        </p>
      </div>
    </footer>
  );
}

