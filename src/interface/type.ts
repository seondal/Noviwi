export interface VideoI {
  status: string | null;
  videoUrl: string;
}

export type ResponseI =
  | { success: true; data: VideoI }
  | { success: false; error: string };
