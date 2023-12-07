import Image from "next/image";

export default function Resume() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center mt-5">
      <div className="max-w-screen-md w-full">
        <Image
          src="/resume.jpg"
          alt="resume"
          width={800}
          height={800}
          layout="responsive"
        />
      </div>
    </section>
  );
}
