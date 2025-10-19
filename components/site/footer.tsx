import Link from "next/link";
import Image from "next/image";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Schedule",
    href: "/schedule",
  },
  {
    title: "Teams",
    href: "/teams",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.198-1.558-.75-.947-1.011-2.165-.675-3.35.336-1.186 1.229-2.121 2.386-2.554 1.157-.433 2.447-.312 3.501.324s1.758 1.676 1.893 2.902c.135 1.226-.391 2.437-1.402 3.241s-2.287 1.195-3.505.995zm7.718 1.855c-1.097 0-2.143-.239-3.095-.705-.952-.466-1.772-1.137-2.385-1.976-.613-.839-1-1.819-1.126-2.855-.126-1.036.013-2.087.405-3.049.392-.962.999-1.799 1.772-2.441.773-.642 1.684-1.069 2.661-1.239.977-.17 1.984-.077 2.912.266.928.343 1.744.941 2.366 1.732.622.791 1.028 1.747 1.177 2.767.149 1.02.035 2.065-.33 3.017-.365.952-.976 1.777-1.775 2.394-.799.617-1.756 1.005-2.792 1.129-1.036.124-2.087-.02-3.049-.412z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1E4A] border-t border-[#F58220]/20 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              {/* Replace with your actual logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#F58220] rounded-full flex items-center justify-center">
                  <div>
                    <Image
                      src="/moi-cup-logo.png"
                      alt="MOI CUP Logo"
                      width={40}
                      height={40}
                      className="mr-3"
                    />
                  </div>
                </div>
                <span className="text-white text-2xl font-bold font-montserrat">
                  MOI CUP
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm max-w-md leading-relaxed">
              Empowering Youth, Showcasing Talent, Celebrating Football. Join us
              for the ultimate football championship experience in Nairobi,
              Kenya.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-white/70 hover:text-[#F58220] transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-montserrat">
              Quick Links
            </h3>
            <div className="space-y-3">
              {links.slice(0, 4).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-[#F58220] transition-colors duration-150 block text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-montserrat">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>+254-728-111-564</p>
              <p>+254-721-483-309</p>
              <p>+254-727-901-488</p>
              <p className="pt-2">
                <Link
                  href="mailto:info@moicup.com"
                  className="hover:text-[#F58220] transition-colors"
                >
                  info@moicup.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <span className="text-white/60 text-sm text-center md:text-left order-2 md:order-1 mt-4 md:mt-0">
            © {new Date().getFullYear()} MOI CUP 2025. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
