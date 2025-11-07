import { NextResponse } from "next/server";
import {
  Client,
  FilesPropertyItemObjectResponse,
  PageObjectResponse,
  SelectPropertyItemObjectResponse,
} from "@notionhq/client";
import { NOTION } from "@/constants/env";

const notion = new Client({
  auth: NOTION.API_KEY,
  notionVersion: NOTION.VERSION,
});

export async function GET(
  _request: Request,
  { params }: { params: { pageId: string } }
) {
  console.log(NOTION.API_KEY);
  try {
    const pageId = params.pageId;
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
      return NextResponse.json(
        { error: "No video file found" },
        { status: 404 }
      );
    }
    const videoUrl = videoFile.file.url;

    return NextResponse.json({ status, videoUrl });
  } catch (error: any) {
    console.error("Notion API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch page", details: error.message },
      { status: 500 }
    );
  }
}
