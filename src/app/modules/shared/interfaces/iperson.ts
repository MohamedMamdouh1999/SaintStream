import { IMedia } from "./imedia";

export interface IPerson {
  id: number,
  name: string,
  adult: boolean,
  gender: number,
  media_type: string,
  popularity: number,
  known_for: IMedia[],
  profile_path: string,
  original_name: string,
  known_for_department: string
}
