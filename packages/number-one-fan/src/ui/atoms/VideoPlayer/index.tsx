'use client';
import 'next-cloudinary/dist/cld-video-player.css';
import { CldVideoPlayer } from 'next-cloudinary';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return <CldVideoPlayer id={videoId} width="1920" height="1080" src={videoId}/>;
};

export default VideoPlayer;
