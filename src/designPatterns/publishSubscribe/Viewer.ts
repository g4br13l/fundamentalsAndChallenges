import {Video} from "./Video.ts";



export class Viewer {

  public watchList: Video[] = []

  constructor(private name: String) { }

  public accept(video: Video) {
    this.watchList.push(video)
  }

  public watchAll() {
    this.watchList.forEach(video => {
      console.log(this.name ,'started watching a video.')
      video.watch()
    })
  }

}
