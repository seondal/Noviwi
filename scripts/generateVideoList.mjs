import fs from "fs";
import path from "path";

const assetsDir = path.join(process.cwd(), "public", "assets");
const outputPath = path.join(
  process.cwd(),
  "src",
  "constants",
  "videoList.json"
);

const videoList = fs
  .readdirSync(assetsDir)
  .map((file) => file.replace(".mp4", ""));

fs.writeFileSync(outputPath, JSON.stringify(videoList, null, 2));

console.log(`✅ Video list generated: ${outputPath}`);
