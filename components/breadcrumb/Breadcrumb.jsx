import Link from "next/link";

const Breadcrumb = ({ paths }) => {
  return (
    <nav
      className="flex items-start w-[26.5rem] py-[1.375rem] px-[1.5rem]"
      aria-label="Breadcrumb"
    >
      {paths.map((path, index) => (
        <span key={index} className="text-primary-34">
          {index !== 0 && <span className="mx-1">/</span>}
          {index === paths.length - 1 ? (
            <span>{path.label}</span>
          ) : (
            <Link href={path.href || "#"}>
              <span className="hover:text-primary-26">{path.label}</span>
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
