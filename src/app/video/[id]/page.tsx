export default async function Page({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const parseBool = (v: string | string[] | undefined, def = true) => {
    if (v === undefined) return def;
    const s = Array.isArray(v) ? v[0] : v;
    return s === "true";
  };

  const autoPlay = parseBool(searchParams?.autoplay, true);
  const loop = parseBool(searchParams?.loop, true);
  const muted = parseBool(searchParams?.muted, true);
  const controls = parseBool(searchParams?.muted, false);

  const videoSrc = `/assets/${id}.mp4`;

  return (
    // <a href="/" target="_blank" rel="noopener noreferrer">
    <video
      src={videoSrc}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      controls={controls}
      // preload="metadata"
      className="w-full overflow-hidden">
      Your browser does not support the video tag.
    </video>
    // </a>
  );
}
