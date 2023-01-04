import React, { useEffect, useState } from 'react';
import { StyledTitle } from 'components/atoms/Title.styles';
import {
  ArticuleWrapper,
  Title,
  Category,
  Article,
  PhotoWrapper,
} from './Articules.styles';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

const DATO_TOKEN = '4d82a9df470a0dab52ca7806449674';
const query =
  '{ allArticles { id title category article image { id url alt } } }';

const Articules = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((response) => response.json())
      .then(({ data: { allArticles } }) => setArticles(allArticles))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ViewWrapper>
        <StyledTitle>Students News</StyledTitle>
        {articles.length ? (
          articles.map((data) => (
            <ArticuleWrapper>
              <Title>{data.title}</Title>
              <Category>{data.category}</Category>
              <PhotoWrapper>
                <Article>{data.article}</Article>
              </PhotoWrapper>
              <Button>See more</Button>
            </ArticuleWrapper>
          ))
        ) : (
          <StyledTitle>No articles</StyledTitle>
        )}
      </ViewWrapper>
    </>
  );
};

export default Articules;
