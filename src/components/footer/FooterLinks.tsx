import { Link } from "react-scroll";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Education", to: "education" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const FooterLinks = () => {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            smooth
            duration={600}
            offset={-70}
            className="cursor-pointer text-slate-400 transition hover:text-cyan-400"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;