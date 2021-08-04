import React from 'react'
import styled from 'styled-components/macro'

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data'

import SectionTitle from '../SectionTitle'
import MainStory from '../MainStory'
import SecondaryStory from '../SecondaryStory'
import OpinionStory from '../OpinionStory'
import Advertisement from '../Advertisement'
import { QUERIES } from '../../constants'

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStory key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStory>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStory key={story.id}>
              <OpinionStory {...story} />
            </VerticalStory>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --spacing-gap: 16px;

  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px 16px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story main-story secondary-stories'
      'advertisement advertisement advertisement'
      'opinion-stories opinion-stories opinion-stories';
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${QUERIES.desktopAndUp} {
    margin-bottom: 58px;
    gap: 0;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 477px 418px 1fr;
  }
`

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.desktopAndUp} {
    padding-right: var(--spacing-gap);
    margin-right: var(--spacing-gap);
    border-right: var(--border-divider);
  }
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: var(--spacing-gap);
    border-left: var(--border-divider);
  }

  @media ${QUERIES.desktopAndUp} {
    border: 0;
    padding: 0;

    border-right: var(--border-divider);
    padding-right: var(--spacing-gap);
    margin-right: var(--spacing-gap);
  }
`

const VerticalStory = styled.div`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: var(--border-divider);
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 16px;

    & ${VerticalStory} {
      flex: 1;
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: 0;
    }
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    padding-top: var(--spacing-gap);
    margin-top: var(--spacing-gap);
    border-top: var(--border-divider);
  }
`

export default MainStoryGrid
