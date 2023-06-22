import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
// import Navbar from "./Navbar";
import Loading from "./Loading";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const News = () => {

  //   let isLoading = true;
  // const pageSize = "20";

  // let API = "https://hn.algolia.com/api/v1/search?query=html";
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [activeCountry, setActiveCountry] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)
  const [loading, setLoading] = useState(false);
  
  
  let API = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${totalResults}&category=${category}&apiKey=4ce0e6de831e480281e918b992e08171`;

  const fetchApiData = async (url) => {
    try {
      setLoading(true)
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const dataArticles = data.articles;
      setArticles(dataArticles);
      setTotalResults(data.totalResults);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, [API]);

  return (
    <div>
      <Navbar
        setCountry={setCountry}
        setCategory={setCategory} 
        activeCountry={activeCountry} 
        setActiveCountry={setActiveCountry} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      <div className="total-results"><p>total results : {totalResults}</p></div>
      {loading ? <Loading /> : 
        <div className="news">
          {articles?.map((article, index) => {
            return (
              <Routes key={index}>
                <Route exact path={`${category === 'general' ? '/' : `/${category}`}`} element={<NewsCard article={article}  key={index} />} />
              </Routes>
            );
          })}
        </div>
      }
    </div>
  );
};

export default News;
