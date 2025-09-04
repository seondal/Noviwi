import fs from "fs";

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
  const controls = parseBool(searchParams?.controls, false);

  const videoSrc = `/assets/${id}.mp4`;
  const videoExists = fs.existsSync(videoSrc);

  if (!videoExists) {
    return (
      <a href="/" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <h1>Noviwi</h1>
          <h5>노션 비디오 위젯 제작</h5>
        </div>
      </a>
    );
  }

  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <video
        src={videoSrc}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={controls}
        preload="metadata"
        className="w-full overflow-hidden">
        Your browser does not support the video tag.
      </video>
    </a>
  );
}
