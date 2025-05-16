import Link from "next/link";

export default function Page() {
  const videoSrc = "/assets/arbito.mp4";

  return (
    <Link href={"/"}>
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
