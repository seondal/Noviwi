import { SITE } from "@/constants/env";
import { ResponseI } from "@/interface/type";

interface OptionsT {
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  controls: boolean;
}

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

  const options: OptionsT = {
    autoPlay: parseBool(searchParams?.autoplay, true),
    loop: parseBool(searchParams?.loop, true),
    muted: parseBool(searchParams?.muted, true),
    controls: parseBool(searchParams?.controls, false),
  };

  function VideoComponent({
    videoUrl,
    options,
  }: {
    videoUrl: string;
    options: OptionsT;
  }) {
    const { autoPlay, loop, muted, controls } = options;

    return (
      <video
        src={videoUrl}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={controls}
        preload="auto"
        className="w-full overflow-hidden">
        Your browser does not support the video tag.
      </video>
    );
  }

  if (id == "arbito") {
    return (
      <a href="/">
        <VideoComponent videoUrl="/assets/arbito.mp4" options={options} />
      </a>
    );
  }

  const res: ResponseI = await (await fetch(SITE + "/api/" + id)).json();

  if (typeof res === "number") {
    console.error("Failed to fetch Notion data:", res);
    return (
      <a href="/">
        <h1>문제가 발생했습니다. 오카방으로 문의주세요</h1>
      </a>
    );
  }

  if (res.status !== "deployed") {
    return (
      <a href="/">
        <VideoComponent videoUrl="/assets/noviwi.mp4" options={options} />
      </a>
    );
  }

  const videoUrl = res.videoUrl;
  if (options.controls)
    return <VideoComponent videoUrl={videoUrl} options={options} />;
  return (
    <a href="/" target="_blank">
      <VideoComponent videoUrl={videoUrl} options={options} />
    </a>
  );
}
