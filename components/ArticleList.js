import React from 'react';
import ArticleItem from './ArticleItem';
import articleStyles from '../styles/article.module.css';

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
