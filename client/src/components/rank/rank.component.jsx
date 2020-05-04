import React from 'react';

import { RankContainer, RankParag, RankHeader } from './rank.styles';

export default function Rank() {
  return (
    <RankContainer>
      <RankParag>User, your current rank is:</RankParag>
      <RankHeader>#1</RankHeader>
    </RankContainer>
  );
}
