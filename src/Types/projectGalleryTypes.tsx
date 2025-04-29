export interface Project {
  id: number;
  title: string;
  state: string;
  district: string;
  city: string;
  address: string;
  description: string;
  images: readonly string[];
}
