"use client"
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MediaCarousel = ({ mediaUrls }: { mediaUrls: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!mediaUrls || mediaUrls.length === 0) return null;

  const mediaUrl = mediaUrls[currentIndex];
  const isVideo = mediaUrl.endsWith(".mp4") || mediaUrl.endsWith(".mov");
  const isAudio = mediaUrl.endsWith(".mp3");

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, mediaUrls.length - 1));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Media Display */}
      <div className="w-full h-full relative">
        {isVideo ? (
          <video
          key={mediaUrl}
          className="w-full h-full object-contain" controls>
            <source src={mediaUrl} />
            Your browser does not support the video tag.
          </video>
        ) : isAudio ? (
          <audio
          key={mediaUrl}
          className="w-full h-full bg-black" controls>
            <source src={mediaUrl} />
            Your browser does not support the audio tag.
          </audio>
        ) : (
          <Image
            src={mediaUrl}
            key={mediaUrl}
            layout="fill"
            objectFit="contain"
            alt="userpost"
          />
        )}
      </div>

      {/* Navigation Arrows */}
      {mediaUrls.length > 1 && (
        <>
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg z-50"
              style={{ color: "#F75803" }}
            >
              <ChevronLeft size={14} />
            </button>
          )}
          {currentIndex < mediaUrls.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-50"
              style={{ color: "#F75803" }}
            >
              <ChevronRight size={14} />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
