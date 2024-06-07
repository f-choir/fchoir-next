'use client';
import 'next-cloudinary/dist/cld-video-player.css';
import { CldVideoPlayer } from 'next-cloudinary';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const playerId = `f-video-${videoId}`;
  return <CldVideoPlayer id={'foo'} width="480" height="360" src={videoId} />;
};

export default VideoPlayer;
