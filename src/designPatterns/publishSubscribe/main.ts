import { YoutubeChannel } from "./YoutubeChannel";
import {Viewer} from "./Viewer.ts";
import {ContentCreator} from "./ContentCreator.ts";




const channel = new YoutubeChannel()
const joaoViewer = new Viewer('Joao')
const pedroViewer = new Viewer('Pedro')

channel.subscribe(joaoViewer)
channel.subscribe(pedroViewer)

const contentCreator = new ContentCreator()
const video = contentCreator.createVideo('Video Content...')
channel.publish(video)

joaoViewer.watchAll()
pedroViewer.watchAll()
