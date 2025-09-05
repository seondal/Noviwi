import fs from "fs";
import path from "path";

const EXPIRED = [
  "2647557c738580249aaffda1f6b80827",
  "2647557c738581ea9583cf9e3bfe0d44",
];

const assetsDir = path.join(process.cwd(), "public", "assets");
const outputPath = path.join(
  process.cwd(),
  "src",
  "constants",
  "videoList.json"
);

const videoList = fs
  .readdirSync(assetsDir)
  .map((file) => file.replace(".mp4", ""))
  .filter((file) => !EXPIRED.includes(file));

fs.writeFileSync(outputPath, JSON.stringify(videoList, null, 2));

console.log(`✅ Video list generated: ${outputPath}`);
