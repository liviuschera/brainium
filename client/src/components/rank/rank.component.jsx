import React, { useContext } from 'react';
import CurrentUserContext from '../../contexts/current-user.context';
import { RankContainer, RankParag, RankHeader } from './rank.styles';

export default function Rank() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <RankContainer>
      <RankParag>{currentUser?.name}, your current entry count is:</RankParag>
      <RankHeader>#{currentUser?.entries ?? 0}</RankHeader>
    </RankContainer>
  );
}
