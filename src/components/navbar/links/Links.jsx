import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "homepage",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
