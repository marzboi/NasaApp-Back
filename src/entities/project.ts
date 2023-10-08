export interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endData: string;
  isActive: boolean;
  dataUpdated: string;
  img: string;
  author: Author;
  participants: Author[];
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
