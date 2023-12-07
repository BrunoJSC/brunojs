import Image from "next/image";

interface CardProps {
  date: string;
  title: string;
  description: string;

  image: string;
}

export function Card({ date, title, description, image }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <Image src={image} alt={title} width={200} height={200} />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {date}
      </p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
