import Image from "next/image";
import avatar from "../../public/me.webp";

export const BlurbSection = () => {
  const yearsSince2017 = new Date().getFullYear() - 2017;
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[1.5fr_1fr] md:gap-x-24 md:gap-y-12 lg:grid-cols-[2fr_1fr]">
      <div>
        <p className="text-2xl md:text-3xl">Hi, I&apos;m Darren.</p>
        <p className="mt-4">
          I am a front-end engineer{" "}
          {yearsSince2017 > 0
            ? `with ${yearsSince2017} years of experience`
            : ""}{" "}
          focused on building web UI and user experiences with React and
          TypeScript.
        </p>
        <p className="mt-4">
          Originally from Waterford, Ireland, I studied and worked in Cork,
          Ireland before moving to the US in 2018.
        </p>
        <p className="mt-4">
          I currently live in NYC with my wife Calla and my{" "}
          {new Date().getFullYear() - 2012} year old Pembroke Welsh Corgi{" "}
          <a
            href="https://www.instagram.com/georgethewelshcorgi/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 dark:text-blue-custom-dark hover:underline"
          >
            George
          </a>
          .
        </p>
        <p className="mt-4">
          My other interests include video games,{" "}
          <a
            href="https://flickr.com/photos/dazftw"
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 dark:text-blue-custom-dark hover:underline"
          >
            photography
          </a>
          , and being in the ocean.
        </p>
      </div>

      <div className="mb-4">
        <Image
          src={avatar}
          alt="darren carlin headshot"
          placeholder="blur"
          className="object-cover rounded-lg max-h-[350px] max-w-full md:max-h-[350px] md:max-w-[330px]"
        />
      </div>
    </div>
  );
};
