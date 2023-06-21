import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>llm wiki</span>,
  project: {
    link: 'https://github.com/pabl-o-ce/llm-wiki',
  },
  chat: {
    link: 'https://discord.gg/Jq4vkcDakD',
  },
  docsRepositoryBase: 'https://github.com/pabl-o-ce/llm-wiki',
  footer: {
    text: 'llm wiki',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="llm wiki" />
      <meta property="og:description" content="TheBlock wiki" />
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s – llm wiki'
    }
  }
}

export default config
