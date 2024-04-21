import Image from "next/image";

export default function Partners() {
  const images = [
    "/images/partner/sample_assist.svg",
    "/images/partner/stitch4.webp",
  ];
  return (
    <section className="w-full py-16 bg-primary flex justify-center items-center">
      <div className="flex flex-col justify-center items-start lg:max-w-screen-lg w-full">
        <span className="text-neutral uppercase font-extrabold text-sm pb-4">
          Who are we with
        </span>
        <h2 className="text-2xl md:text-4xl mb-3 font-bold leading-normal uppercase">
          Our partners
        </h2>
        <div className="w-full flex flex-col sm:flex-row gap-4 mt-7">
          {images.map((item) => (
            <div key={item} className="relative flex-grow h-36 py-4 px-2">
              <div className="w-full h-full relative">
                <Image
                  src={item}
                  fill
                  alt={`partner-${item}`}
                  className="object-contain invert grayscale"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
