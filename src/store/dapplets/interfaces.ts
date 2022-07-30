export interface IResponse {
  success: boolean;
  data?: Array<IData> | null;
  total: number;
}
export interface IData {
  id: string;
  icon: string;
  title: string;
  author: string;
  rating?: number | null;
  address: string;
  released: string;
  downloads: number;
  description: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  text_5: string;
  text_6: string;
  text_7: string;
  text_8: string;
  text_9: string;
  tags?: (string | null)[] | null;
}
