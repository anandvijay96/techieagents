import {NavLink} from '@remix-run/react';
import type {FooterQuery} from 'storefrontapi.generated';
import {Icon} from '@iconify/react';
import ThemeToggle from './ThemeToggle';

const FOOTER_LINKS = {
  product: [
    {title: 'Agents', url: '/agents'},
    {title: 'Engineers', url: '/engineers'},
    {title: 'Enterprise', url: '/enterprise'},
    {title: 'Pricing', url: '/pricing'},
  ],
  resources: [
    {title: 'Documentation', url: '/docs'},
    {title: 'API Reference', url: '/docs/api'},
    {title: 'Changelog', url: '/changelog'},
    {title: 'Status', url: '/status'},
  ],
  company: [
    {title: 'About', url: '/about'},
    {title: 'Blog', url: '/blog'},
    {title: 'Careers', url: '/careers'},
    {title: 'Contact', url: '/contact'},
  ],
  legal: [
    {title: 'Privacy', url: '/policies/privacy-policy'},
    {title: 'Terms', url: '/policies/terms-of-service'},
  ],
};

const SOCIAL_LINKS = [
  {icon: 'lucide:github', url: 'https://github.com/techieagents', label: 'GitHub'},
  {icon: 'lucide:twitter', url: 'https://twitter.com/techieagents', label: 'Twitter'},
  {icon: 'lucide:linkedin', url: 'https://linkedin.com/company/techieagents', label: 'LinkedIn'},
  {icon: 'lucide:message-circle', url: 'https://discord.gg/techieagents', label: 'Discord'},
];

export function Footer({menu}: FooterQuery) {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Icon icon="lucide:bot" className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">TechieAgents</span>
            </NavLink>
            <p className="mb-4 text-sm text-muted-foreground">
              The marketplace for AI agents. Built by developers, for developers.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                  aria-label={link.label}
                >
                  <Icon icon={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Product</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.url}>
                  <NavLink
                    to={link.url}
                    className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.url}>
                  <NavLink
                    to={link.url}
                    className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.url}>
                  <NavLink
                    to={link.url}
                    className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.url}>
                  <NavLink
                    to={link.url}
                    className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-border/40 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechieAgents. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
