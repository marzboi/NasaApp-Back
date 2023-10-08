export type ApiResponse = {
  count: number;
  items: { [key: string]: any }[];
  previous: string | null;
  next: string | null;
};
