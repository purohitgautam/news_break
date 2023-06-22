import React from 'react'

export default function NewsCard({article}) {

  return (
    <div className='news-card ' key={article.url}>
        <a href={article.url} target='_blank'  rel="noreferrer">
          <img src={article.urlToImage === null ? require('./images/news.jpg')
           : article.urlToImage} alt="postImage" />
        </a>
        <span><b>author :</b> {!article.author ? "unknown" : article.author}</span>
        <span><b>source :</b> {!article.source.name ? "unknown" : article.source.name}</span>
        <span><b>published at : </b>{new Date(article.publishedAt).toDateString()}</span>
        <span>{article.content}</span>
        <span>{article.title}</span>
    </div>
  )
}
