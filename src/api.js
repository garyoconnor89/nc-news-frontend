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
  return request.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchCommentsByArticleId = (article_id, article) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    const articleWithComments = { article };
    articleWithComments.article.comments = data.comments;
    return articleWithComments.article;
  });
};
