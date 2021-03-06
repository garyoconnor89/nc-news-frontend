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

export const fetchArticles = (topic, sort_by, order) => {
  return request
    .get("/articles", {
      params: { topic: topic, sort_by: sort_by, order: order },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, username, body) => {
  const comment = { username, body };
  return request
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`).then((response) => {});
};

export const updateVotes = (section, id, increment) => {
  return request
    .patch(`/${section}/${id}`, { inc_votes: increment })
    .then((response) => {});
};

export const fetchArticlesByAuthor = (author) => {
  return request.get(`/articles?author=${author}`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchUser = (username) => {
  return request.get(`/users/${username}`).then(({ data }) => {
    return data.user.user;
  });
};
