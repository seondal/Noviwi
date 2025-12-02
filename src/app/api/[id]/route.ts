import { Client } from "@notionhq/client";
import {
  FilesPropertyItemObjectResponse,
  PageObjectResponse,
  SelectPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NOTION } from "@/constants/env";
import { NextResponse } from "next/server";
import { ResponseI, VideoI } from "@/interface/type";

const notion = new Client({
  auth: NOTION.API_KEY,
  notionVersion: NOTION.VERSION,
});

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<ResponseI>> {
  const { id } = params;

  try {
    const page = (await notion.pages.retrieve({
      page_id: id,
    })) as PageObjectResponse;

    const statusProp = page.properties[
      "status"
    ] as SelectPropertyItemObjectResponse;
    const videoProp = page.properties[
      "video"
    ] as FilesPropertyItemObjectResponse;

    const status = statusProp?.select?.name ?? null;
    const videoFile = videoProp?.files?.[0];

    if (!videoFile || !("file" in videoFile) || !videoFile.file?.url) {
      console.warn(`[Notion API] No video file found for page: ${id}`);
      return NextResponse.json(
        { success: false, error: "Video file not found" },
        { status: 404 }
      );
    }

    const data: VideoI = {
      status,
      videoUrl: videoFile.file.url,
    };

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error(`[Notion API] Error fetching page ${id}:`, error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
