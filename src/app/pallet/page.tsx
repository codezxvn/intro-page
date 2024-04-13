const colorSample = (color: string, title: string) => {
  return (
    <div
      className={`group w-full h-32 ${color} flex items-center text-2xl pl-10 uppercase relative font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255)] `}
    >
      <div className="absolute group-hover:w-1/4 left-0 h-full bg-primary w-0"></div>
      <span className="z-10 text-zinc">{title}</span>
    </div>
  );
};

export default function Pallet() {
  return (
    <>
      {colorSample("bg-primary", "Primary")}
      {colorSample("bg-secondary", "Secondary")}
      {colorSample("bg-neutral", "neutral")}
    </>
  );
}
