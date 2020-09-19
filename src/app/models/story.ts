import { IUser } from './User';

export interface IStory {
  storyId: number;
  storyName: string;
  storyShortDescription: string;
  coverImageUrl: string;
  isActive?: boolean;
  autherId: number;
}

export interface IStoryByAuther {
  stories: Array<IStory>;
  auther: IUser;
}
