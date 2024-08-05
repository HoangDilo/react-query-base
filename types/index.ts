export interface ITodoItem {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface IToDoResponse {
  data: ITodoItem[];
}

export interface IPostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostResponse {
  data: IPostItem[];
}
