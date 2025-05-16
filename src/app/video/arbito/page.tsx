export default function Page() {
  const videoSrc = "/assets/arbito.mp4";

  return (
    <video
      src={videoSrc}
      controls
      autoPlay
      loop
      muted
      playsInline
      className="w-full"
    >
      Error
    </video>
  );
}
