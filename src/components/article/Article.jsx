import React from 'react';
import PropTypes from 'prop-types'; // Importă PropTypes
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

// Adaugă validarea cu PropTypes
Article.propTypes = {
  imgUrl: PropTypes.string.isRequired, // imgUrl trebuie să fie un string și este obligatoriu
  date: PropTypes.string.isRequired, // date trebuie să fie un string și este obligatoriu
  title: PropTypes.string.isRequired, // title trebuie să fie un string și este obligatoriu
};

export default Article;
