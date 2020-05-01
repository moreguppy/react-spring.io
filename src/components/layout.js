import React from 'react'
import styled from '@emotion/styled'
import { MDXProvider } from '@mdx-js/react'

import ThemeProvider from './theme/themeProvider'
import mdxComponents from './mdxComponents'
import Sidebar from './sidebar'
import RightSidebar from './rightSidebar'
import config from '../../config.js'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.15s;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

const Content = styled('main')`
  width: 75ch;
  max-width: 100vw;
  margin: 0px 3rem;
  padding-top: 1.5rem;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    margin: 0;
    padding: 0 1.25em;
    padding-top: 1.5rem;
  }
`

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`

const LeftSideBarWidth = styled('div')`
  width: 298px;
  padding-top: 8vh;
`

const RightSideBarWidth = styled('div')`
  padding-top: 8vh;
  width: 224px;
`

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <Wrapper>
          <LeftSideBarWidth className={'hiddenMobile'}>
            <Sidebar location={location} />
          </LeftSideBarWidth>
          {config.sidebar.title ? (
            <div
              className={'sidebarTitle sideBarShow'}
              dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
            />
          ) : null}
          <Content>
            <MaxWidth>{children}</MaxWidth>
          </Content>
          <RightSideBarWidth className={'hiddenMobile'}>
            <RightSidebar location={location} />
          </RightSideBarWidth>
        </Wrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout
