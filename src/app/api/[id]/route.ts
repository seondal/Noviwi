import { Client } from "@notionhq/client";
import {
  FilesPropertyItemObjectResponse,
  PageObjectResponse,
  SelectPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NOTION } from "@/constants/env";
import { NextResponse } from "next/server";
import { ResponseI } from "@/interface/type";

const notion = new Client({
  auth: NOTION.API_KEY,
  notionVersion: NOTION.VERSION,
});

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<ResponseI>> {
  try {
    const pageId = params.id;

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
      return NextResponse.json(404);
    }
    const videoUrl = videoFile.file.url;

    console.log(videoUrl);

    return NextResponse.json({ status, videoUrl });
  } catch (error: any) {
    console.error("Notion API error:", error);
    return NextResponse.json(500);
  }
}
