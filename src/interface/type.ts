export type ResponseI =
  | number
  | {
      status: string | undefined;
      videoUrl: string;
    };
