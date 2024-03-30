import { siteConfig } from '@/lib/config'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='space-x-3 text-xl text-gray-600 dark:text-gray-400 flex-wrap flex justify-center '>
      {siteConfig('CONTACT_GITHUB') && <a target='_blank' rel='noreferrer' title={'github'} href={siteConfig('CONTACT_GITHUB')} >
        <i className='fab fa-github transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {siteConfig('CONTACT_TWITTER') && <a target='_blank' rel='noreferrer' title={'twitter'} href={siteConfig('CONTACT_TWITTER')} >
        <i className='fab fa-twitter transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {siteConfig('CONTACT_TELEGRAM') && <a target='_blank' rel='noreferrer' href={siteConfig('CONTACT_TELEGRAM')} title={'telegram'} >
        <i className='fab fa-telegram transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {siteConfig('CONTACT_LINKEDIN') && <a target='_blank' rel='noreferrer' href={siteConfig('CONTACT_LINKEDIN')} title={'linkedIn'} >
        <i className='transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {siteConfig('CONTACT_WEIBO') && <a target='_blank' rel='noreferrer' title={'weibo'} href={siteConfig('CONTACT_WEIBO')} >
        <i className='fab fa-weibo transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {siteConfig('CONTACT_INSTAGRAM') && <a target='_blank' rel='noreferrer' title={'instagram'} href={siteConfig('CONTACT_INSTAGRAM')} >
        <i className='fab fa-instagram transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {siteConfig('CONTACT_EMAIL') && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${siteConfig('CONTACT_EMAIL')}`} >
        <i className='fas fa-envelope transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {JSON.parse(siteConfig('ENABLE_RSS')) && <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='fas fa-rss transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {siteConfig('CONTACT_BILIBILI') && <a target='_blank' rel='noreferrer' title={'bilibili'} href={siteConfig('CONTACT_BILIBILI')} >
        <i className='fab fa-bilibili transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {siteConfig('CONTACT_YOUTUBE') && <a target='_blank' rel='noreferrer' title={'youtube'} href={siteConfig('CONTACT_YOUTUBE')} >
        <i className='fab fa-youtube transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
    </div>
}
export default SocialButton
