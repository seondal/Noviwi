import Link from "next/link";

export default function Page() {
  const videoSrc = "/assets/arbito.mp4";

  return (
    <Link href={"/"} target="_blank">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full overflow-hidden"
      >
        Error
      </video>
    </Link>
  );
}
