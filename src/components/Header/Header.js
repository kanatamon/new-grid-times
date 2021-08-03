import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopHeaderLeft>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopHeaderLeft>
        <Logo />
        <DesktopHeaderRight>
          <CTAGroup>
            <Button>Subscribe</Button>
            <CTALink href="#">Already a subscriber?</CTALink>
          </CTAGroup>
        </DesktopHeaderRight>
      </MainHeader>
    </header>
  )
}

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
`

const DesktopHeaderLeft = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
  }
`

const DesktopHeaderRight = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
    margin-top: auto;
    margin-left: auto;
  }
`

const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const CTALink = styled.a`
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-decoration: underline;
`

export default Header
