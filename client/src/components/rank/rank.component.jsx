import React, { useContext } from 'react';
import CurrentUserContext from '../../contexts/current-user.context';
import { RankContainer, RankParag, RankHeader } from './rank.styles';

export default function Rank() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <RankContainer>
      <RankParag>User, your current rank is:</RankParag>
      <RankHeader>#{currentUser?.entries ?? 0}</RankHeader>
    </RankContainer>
  );
}
