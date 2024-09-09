import {Viewer} from "./Viewer.ts";
import {Video} from "./Video.ts";


export class YoutubeChannel {

  private subscribed: Viewer[] = []

  public subscribe(viewer: Viewer) {
    this.subscribed.push(viewer)
  }

  public unsubscribe(viewer: Viewer) {
    throw new Error('Segmentation fault.')
  }

  public publish(video: Video) {
    this.subscribed.forEach( viewer => viewer.accept(video) )
  }

}