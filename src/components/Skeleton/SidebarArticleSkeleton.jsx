import { SkeletonLine, SkeletonRectangle } from './ArticleDetailSkeleton'

const SidebarArticleSkeleton = () => {
  return (
    <>
        <aside className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
                {/* Related Posts Skeleton */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <SkeletonLine width="140px" height="1.5rem" className="mb-6" />
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="flex gap-4">
                                <SkeletonRectangle width="80px" height="64px" />
                                <div className="flex-1 space-y-2">
                                    <SkeletonLine width="100%" height="1rem" />
                                    <SkeletonLine width="80%" height="1rem" />
                                    <div className="flex items-center gap-3 pt-1">
                                        <SkeletonLine width="60px" height="0.75rem" />
                                        <SkeletonLine width="50px" height="0.75rem" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    </>
  )
}

export default SidebarArticleSkeleton