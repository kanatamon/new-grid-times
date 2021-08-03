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
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
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
`

const MainStorySection = styled.section`
  grid-area: main-story;
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
    border-left: 1px solid var(--color-gray-300);
  }
`

const StoryList = styled.div`
  --gap: 16px;
  --border: 1px solid var(--color-gray-300);

  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: var(--gap);
    padding-top: var(--gap);
    border-top: var(--border);
  }
`

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;

    & > * {
      flex: 1;
      --gap: 0;
      --border: 0;
    }
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`

export default MainStoryGrid
