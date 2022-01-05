import { IWithClassName } from "@/types";

export interface SwiperPreviewProps extends IWithClassName {
  items: Array<AdviceSlide>;
}

export type AdviceSlide = {
  id: number;
  img: string;
  title: string;
  text: string;
  alt?: string;
};
