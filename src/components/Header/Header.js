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
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubLink href="#">Already a subscriber?</SubLink>
        </SubscribeWrapper>
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
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;

    margin-top: 16px;
    margin-bottom: 84px;
  }
`

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
    justify-self: end;
    position: relative;
  }
`

const SubLink = styled.a`
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-decoration: underline;

  /*
  [Great Technicue]: By disable this element from flow layout, which make
  the Subscribe's button and the left ActionGroup to be aligned perfectly center
  on horizon.
  */
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 8px;
`

export default Header
