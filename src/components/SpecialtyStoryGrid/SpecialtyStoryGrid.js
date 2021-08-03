import React from 'react'
import styled from 'styled-components/macro'

import { MARKET_DATA, SPORTS_STORIES } from '../../data'

import MarketCard from '../MarketCard'
import SectionTitle from '../SectionTitle'
import MiniStory from '../MiniStory'
import { QUERIES } from '../../constants'

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
`

const MarketsSection = styled.section``

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
`

const SportsSection = styled.section``

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;

    & > * {
      flex: 0 0 220px;
    }
  }
`

export default SpecialtyStoryGrid
