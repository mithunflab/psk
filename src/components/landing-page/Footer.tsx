import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border mt-24 pb-24">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-24 flex flex-col md:flex-row md:items-start gap-24">
        {/* Left: Logo */}
        <div className="flex-1 flex flex-col gap-8 min-w-[250px]">
          <div className="text-2xl font-bold">Onlook</div>
        </div>
        {/* Center: Links */}
        <div className="flex-1 flex flex-col md:flex-row gap-12 md:gap-24 justify-center">
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="https://docs.onlook.com" target="_blank" className="hover:underline">Docs</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="https://blog.onlook.com" target="_blank" className="hover:underline">Blog</a></li>
              <li><a href="mailto:contact@onlook.com" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="min-w-[200px]">
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><a href="/projects" className="hover:underline">My Projects</a></li>
              <li><a href="https://github.com/onlook-dev/onlook" target="_blank" className="hover:underline">GitHub Repo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Follow Us</h3>
            <div className="flex gap-6 mt-2 items-center">
              <a href="https://x.com/onlookdev" target="_blank" rel="noopener noreferrer">
                <span className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">𝕏</span>
              </a>
              <a href="https://linkedin.com/company/onlook" target="_blank" rel="noopener noreferrer">
                <span className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">in</span>
              </a>
              <a href="https://github.com/onlook-dev/onlook" target="_blank" rel="noopener noreferrer">
                <span className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">⚡</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-8 pb-4 pt-24">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full gap-0 md:gap-4 border-t border-border pt-6">
          {/* Center: Links */}
          <div className="flex gap-8 text-muted-foreground text-sm justify-center w-full md:w-auto mb-4 md:mb-0">
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/sitemap.xml" className="hover:underline">Sitemap</a>
          </div>
          {/* Right: Copyright */}
          <div className="text-muted-foreground text-sm w-full md:w-auto flex justify-center md:justify-end">
            © {new Date().getFullYear()} On Off, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};