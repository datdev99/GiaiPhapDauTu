export const SkeletonRectangle = ({ width = "100%", height = "200px", className = "" }) => (
    <div 
        className={`bg-gray-200 rounded animate-pulse ${className}`}
        style={{ width, height }}
    />
);

export const SkeletonLine = ({ width = "100%", height = "1rem" }) => (
    <div 
        className="bg-gray-200 rounded animate-pulse" 
        style={{ width, height }}
    />
);

export const SkeletonCircle = ({ size = "2.5rem" }) => (
    <div 
        className="bg-gray-200 rounded-full animate-pulse" 
        style={{ width: size, height: size }}
    />
);

const ArticleDetailSkeleton = () => {
  return (
    <article className="lg:w-2/3">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image Skeleton */}
            <SkeletonRectangle height="384px" className="w-full" />

            {/* Article Header Skeleton */}
            <div className="p-8">
                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <SkeletonLine width="80px" height="28px" />
                    <SkeletonLine width="90px" height="28px" />
                </div>

                {/* Title Skeleton */}
                <div className="mb-6 space-y-3">
                    <SkeletonLine width="100%" height="2.5rem" />
                    <SkeletonLine width="80%" height="2.5rem" />
                </div>

                {/* Meta Info Skeleton */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b">
                    <div className="flex items-center gap-3">
                        <SkeletonCircle size="2.5rem" />
                        <div className="space-y-2">
                            <SkeletonLine width="120px" height="1rem" />
                            <SkeletonLine width="100px" height="0.875rem" />
                        </div>
                    </div>
                    <SkeletonLine width="100px" height="1rem" />
                    <SkeletonLine width="80px" height="1rem" />
                    <SkeletonLine width="90px" height="1rem" />
                </div>

                {/* Content Skeleton */}
                <div className="space-y-4 mb-8">
                    <SkeletonLine width="100%" height="1.5rem" />
                    <SkeletonLine width="95%" height="1rem" />
                    <SkeletonLine width="88%" height="1rem" />
                    <SkeletonLine width="92%" height="1rem" />
                    
                    <div className="py-4">
                        <SkeletonLine width="200px" height="1.5rem" />
                    </div>
                    
                    <SkeletonLine width="100%" height="1rem" />
                    <SkeletonLine width="97%" height="1rem" />
                    <SkeletonLine width="85%" height="1rem" />
                    
                    <SkeletonRectangle width="100%" height="120px" className="my-6" />
                    
                    <SkeletonLine width="100%" height="1rem" />
                    <SkeletonLine width="90%" height="1rem" />
                </div>

                {/* Actions Skeleton */}
                <div className="flex items-center justify-between pt-8 mt-8 border-t">
                    <div className="flex items-center gap-4">
                        <SkeletonLine width="80px" height="2.5rem" />
                        <SkeletonLine width="70px" height="2.5rem" />
                    </div>
                    <SkeletonLine width="100px" height="2.5rem" />
                </div>
            </div>
        </div>

        {/* Comments Section Skeleton */}
        <div className="bg-white rounded-2xl shadow-xl mt-8 p-8">
            <div className="flex items-center gap-2 mb-6">
                <SkeletonLine width="150px" height="1.5rem" />
            </div>

            {/* Comment Form Skeleton */}
            <div className="mb-8">
                <div className="flex gap-4">
                    <SkeletonCircle size="2.5rem" />
                    <div className="flex-1">
                        <SkeletonRectangle width="100%" height="96px" className="mb-3" />
                        <div className="flex justify-end">
                            <SkeletonLine width="120px" height="2.5rem" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments List Skeleton */}
            <div className="space-y-6">
                {[1, 2].map((item) => (
                    <div key={item} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                        <SkeletonCircle size="2.5rem" />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3">
                                <SkeletonLine width="100px" height="1rem" />
                                <SkeletonLine width="80px" height="0.875rem" />
                            </div>
                            <SkeletonLine width="100%" height="1rem" />
                            <SkeletonLine width="70%" height="1rem" />
                            <div className="flex items-center gap-4 pt-2">
                                <SkeletonLine width="50px" height="0.875rem" />
                                <SkeletonLine width="60px" height="0.875rem" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </article>
  )
}

export default ArticleDetailSkeleton