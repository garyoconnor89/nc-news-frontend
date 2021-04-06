import axios from "axios";

const request = axios.create({
  baseURL: "https://go-nc-news-backend.herokuapp.com/api",
});

export const fetchTop5Articles = () => {
  return request.get("/articles?sort_by=created_at").then(({ data }) => {
    return data.articles.slice(0, 5);
  });
};

export const fetchTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics.topics;
  });
};

export const fetchArticles = () => {
  console.log("IN FETCH");
  return request.get("/articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
};
