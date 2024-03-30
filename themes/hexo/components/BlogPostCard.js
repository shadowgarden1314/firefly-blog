import Link from 'next/link'
import CONFIG from '../config'
import { BlogPostCardInfo } from './BlogPostCardInfo'
import { siteConfig } from '@/lib/config'
import LazyImage from '@/components/LazyImage'
// import Image from 'next/image'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = siteConfig('HEXO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (post && !post.pageCoverThumbnail && siteConfig('HEXO_POST_LIST_COVER_DEFAULT', null, CONFIG)) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover = siteConfig('HEXO_POST_LIST_COVER', null, CONFIG) && post?.pageCoverThumbnail && !showPreview
  //   const delay = (index % 2) * 200

  return (

        <div className={`${siteConfig('HEXO_POST_LIST_COVER_HOVER_ENLARGE', null, CONFIG) ? ' hover:scale-110 transition-all duration-150' : ''}`} >
            <div key={post.id}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                id='blog-post-card'
                className={`group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse ${siteConfig('HEXO_POST_LIST_IMG_CROSSOVER', null, CONFIG) && index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                    overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray`}>

                {/* 文字内容 */}
                <BlogPostCardInfo index={index} post={post} showPageCover={showPageCover} showPreview={showPreview} showSummary={showSummary} />

                {/* 图片封面 */}
                {showPageCover && (
                    <div className="md:w-5/12 overflow-hidden">
                        <Link href={`${siteConfig('SUB_PATH', '')}/${post.slug}`} passHref legacyBehavior>
                        <LazyImage priority={index === 1} src={post?.pageCoverThumbnail} className='h-56 w-full object-cover object-center group-hover:scale-110 duration-500' />
                        </Link>
                    </div>
                )}

            </div>

        </div>

  )
}

export default BlogPostCard
