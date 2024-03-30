/* eslint-disable react/no-unknown-property */

import { siteConfig } from '@/lib/config'

/**
 * 这里的css样式对全局生效
 * 主题客制化css
 * @returns
 */
const GlobalStyle = () => {
  // 从NotionConfig中读取样式
  const GLOBAL_CSS = siteConfig('GLOBAL_CSS')
  return (<style jsx global>{`

    ${GLOBAL_CSS}

  `}</style>)
}

export { GlobalStyle }
