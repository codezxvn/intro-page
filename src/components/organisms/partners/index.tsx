import Image from "next/image";

export default function Partners() {
  const images = [
    "/images/partner/sample_assist.svg",
    "/images/partner/stitch4.webp",
  ];
  return (
    <section className="w-full py-16 bg-primary text-secondary flex justify-center items-center">
      <div className="flex flex-col justify-center items-start lg:max-w-screen-lg w-full px-4 lg:px-0">
        <span className="text-neutral uppercase font-extrabold text-sm pb-2">Trusted by</span>
        <h2 className="text-2xl md:text-4xl mb-6 font-bold leading-normal uppercase">Partners & Clients</h2>
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4 mt-2">
          {images.map((item) => (
            <div key={item} className="glass rounded-xl h-24 sm:h-28 relative flex items-center justify-center p-4 hover:bg-white/10 transition-colors">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-black/10 to-transparent rounded-xl" />
              <div className="relative w-full h-full">
                <Image
                  src={item}
                  alt={`partner-${item}`}
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
