import VideoTutorialCard from '../../components/client/VideoTutorialCard'
import { useVideos } from '../../queries/video.query';

const VideoTutorial = () => {
    const {data: videoData, isLoading, isError, error} = useVideos();
    // console.log(videoData, 'videoData');
    
  return (
    <div className='container mx-auto px-4 py-8 flex flex-wrap'>
        {
            videoData?.data && videoData?.data.map((video) => (
                <VideoTutorialCard key={video.id} video={video} />
            ))
        }
    </div>
  )
}

export default VideoTutorial