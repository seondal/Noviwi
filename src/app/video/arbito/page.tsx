export default function Page() {
  const videoSrc = "/assets/arbito.mp4";

  return (
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
  );
}
