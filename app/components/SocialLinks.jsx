
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/dheeraj-kk",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/jatin-sharma-8874162b2?",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://x.com/dheeraj_basotra?s=21",
  },
  {
    name: "Email",
    icon: <MdEmail />,
    url: "mailto:your.dheerajbasotra24@gmail.com",
  },
  {
    name: "Medium",
    icon: <FaMedium />,
    url: "http://medium.com/@dheerajbasotra24",
  },
];

const SocialLinks = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
    {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
            {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
