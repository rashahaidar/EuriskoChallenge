import React from 'react'

const Article = ({ article }) => {
    return (
         <div className="card">
         <div className="card-body">
           <h5 className="card-title">{article.headline.main}</h5>
           <p className="card-text">{article.lead_paragraph}</p>
           <a href={article.web_url} className="btn btn-primary">View Article</a>
        </div>
        </div>

    )
}

export default Article
