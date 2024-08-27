interface Props {
  date: string;
  position: string;
  company?: string;
  companyUrl?: string;
  college?: string;
  collegeUrl?: string;
}

export const ListItem = ({
  date,
  position,
  company,
  companyUrl,
  college,
  collegeUrl,
}: Props) => {
  // Determine if the item is related to work or education
  const isWork = Boolean(company && companyUrl);
  const isEducation = Boolean(college && collegeUrl);

  return (
    <li className="flex flex-col gap-1 mb-2 md:gap-2 md:flex-row">
      <span className="font-bold">{date}</span>
      <span className="hidden md:block">/</span>
      <span>
        {position} @{" "}
        {isWork ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-blue-custom-dark text-blue-800 underline"
          >
            {company}
          </a>
        ) : isEducation ? (
          <a
            href={collegeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-blue-custom-dark text-blue-800 underline"
          >
            {college}
          </a>
        ) : (
          "Unknown"
        )}
      </span>
    </li>
  );
};
