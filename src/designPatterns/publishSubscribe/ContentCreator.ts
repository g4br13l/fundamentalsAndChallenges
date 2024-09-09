import {Video} from "./Video.ts";



export class ContentCreator {

  createVideo(title: String): Video {
    return new Video(title)
  }

}


