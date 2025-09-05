import { useState } from "react";
import { Play, Bookmark, BookmarkCheck, CheckCircle, Dot } from "lucide-react";

export default function VideoTutorialCard({video}) {
    console.log(video, 'video in card');
    
  const [bookmarked, setBookmarked] = useState(false);

    const handleOpenVideo = (url) => {
        console.log('Opening video URL:', url);
    }

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
        {/* Thumbnail */}
        <div className="relative rounded-xl overflow-hidden">
          <div
            // href={video.videoUrl}
            className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleOpenVideo(video.videoUrl)}
          >
            <Play className="text-white w-12 h-12" />
          </div>
          <img
            src="https://pixner.net/html/tradexy/tradexy/assets/images/tutorial/tutorial1.png"
            alt="video tutorial"
            className="w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex gap-3 p-4">
          <div className="w-10 h-10">
            <img
              src="assets/images/tutorial/sub-crrent1.png"
              alt="video tutorial icon"
              className="rounded-full w-10 h-10 object-cover"
            />
          </div>
          <div className="flex-1">
            {/* Title + Bookmark */}
            <div className="flex items-center justify-between mb-2">
              <h6 className="font-semibold text-gray-900 text-sm">
                <a
                  href="video-tutorial-details.html"
                  className="hover:text-blue-600"
                >
                  {video.title}
                </a>
              </h6>
              {bookmarked ? (
                <BookmarkCheck
                  className="w-5 h-5 text-blue-500 cursor-pointer"
                  onClick={() => setBookmarked(false)}
                />
              ) : (
                <Bookmark
                  className="w-5 h-5 text-gray-400 cursor-pointer"
                  onClick={() => setBookmarked(true)}
                />
              )}
            </div>

            {/* Academy */}
            <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
              Global Forex Academy
              <CheckCircle className="w-3 h-3 text-green-500" fill="currentColor" />
            </div>

            {/* Views + Time */}
            <div className="flex items-center flex-wrap gap-1 text-xs text-gray-500">
              <span>11K views</span>
              <Dot className="w-4 h-4 text-gray-400" />
              <span>1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
