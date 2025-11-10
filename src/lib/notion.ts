import { Client } from "@notionhq/client";
import {
  FilesPropertyItemObjectResponse,
  PageObjectResponse,
  SelectPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NOTION } from "@/constants/env";

const notion = new Client({
  auth: NOTION.API_KEY,
  notionVersion: NOTION.VERSION,
});

export async function getNotionVideoData(pageId: string) {
  try {
    const page = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;

    const statusProps = page.properties[
      "status"
    ] as SelectPropertyItemObjectResponse;
    const status = statusProps.select?.name;

    const videoProps = page.properties[
      "video"
    ] as FilesPropertyItemObjectResponse;
    const videoFile = videoProps.files[0];
    if (!(videoFile && "file" in videoFile && "url" in videoFile.file)) {
      console.error(`No Video File : ${pageId}`);
      console.error(page);
      return 404;
    }
    const videoUrl = videoFile.file.url;

    console.log(videoUrl);

    return { status, videoUrl };
  } catch (error: any) {
    console.error("Notion API error:", error);
    return 500;
  }
}
