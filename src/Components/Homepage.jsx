import React, { Component } from "react";
import { fetchTop5Articles } from "../api.js";
import { Link } from "@reach/router";
import Voter from "../Components/Voter";
import ErrorDisplayer from "../Components/ErrorDisplayer";

class Homepage extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    fetchTop5Articles()
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
    }
    return (
      <main>
        <br />
        <br />
        <section className="homepage-section">
          <header className="homepage-header">
            <h1 className="homepage-title">NC-NEWS</h1>
            <h2 className="homepage-subtitle">Where News Happens</h2>{" "}
            <p className="homepage-desc">
              Welcome to NC-News. You're currently logged in as jessjelly to
              show you individual user functionality. One day, in the distant
              future, you may be able to signup as a user. We can but dream.
            </p>
          </header>
          {isLoading ? (
            <h1>Is Loading</h1>
          ) : (
            <article className="homepage-articles">
              {articles.map((article) => {
                return (
                  <article key={article.id} className="homepage-article">
                    <Link to={`/articles/${article.article_id}`}>
                      <h3 className="homepage-article-title">
                        {article.title}
                      </h3>
                    </Link>

                    <h4 className="homepage-article-topic">{`Topic: ${article.topic}`}</h4>
                    <Link to={`/users/${article.author}`}>
                      <h4 className="homepage-article-author">{`Author: ${article.author}`}</h4>
                    </Link>

                    <h4 className="homepage-article-comments">{`Comments: ${article.comment_count}`}</h4>
                    <h5 className="homepage-article-posted">
                      {article.created_at}
                    </h5>
                    <Voter
                      section="articles"
                      id={article.article_id}
                      votes={article.votes}
                    />
                  </article>
                );
              })}
            </article>
          )}
        </section>
      </main>
    );
  }
}

export default Homepage;

// function Homepage(props) {
//   return (
//     <section className="homepage-section">
//       <br></br>
//       <header className="homepage-header">
//         <h1 className="homepage-title">NC-NEWS</h1>
//         <h2 className="homepage-subtitle">Where News Happens</h2>
//         <p className="homepage-desc">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum alias
//           perspiciatis nisi voluptatem mollitia, illo eligendi harum repudiandae
//           unde eos error labore deleniti sapiente officiis explicabo repellendus
//           modi! Dolores, earum!
//         </p>
//       </header>
//       <main className="homepage-articles">
//         <article className="homepage-article">
//           <h3 className="homepage-article-title">Title Example</h3>
//           <h4 className="homepage-article-topic">Topic Example</h4>
//           <p className="homepage-article-body">
//             Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
//             totam itaque nulla et dolorem qui quo iste vero labore similique
//             adipisci!
//           </p>
//           <h4 className="homepage-article-author">Author Example</h4>
//           <h5 className="homepage-article-posted">Posted at Example</h5>
//         </article>
//         <article className="homepage-article">
//           <h3 className="homepage-article-title">Title Example</h3>
//           <h4 className="homepage-article-topic">Topic Example</h4>
//           <p className="homepage-article-body">
//             Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
//             totam itaque nulla et dolorem qui quo iste vero labore similique
//             adipisci!
//           </p>
//           <h4 className="homepage-article-author">Author Example</h4>
//           <h5 className="homepage-article-posted">Posted at Example</h5>
//         </article>
//         <article className="homepage-article">
//           <h3 className="homepage-article-title">Title Example</h3>
//           <h4 className="homepage-article-topic">Topic Example</h4>
//           <p className="homepage-article-body">
//             Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
//             totam itaque nulla et dolorem qui quo iste vero labore similique
//             adipisci!
//           </p>
//           <h4 className="homepage-article-author">Author Example</h4>
//           <h5 className="homepage-article-posted">Posted at Example</h5>
//         </article>
//         <article className="homepage-article">
//           <h3 className="homepage-article-title">Title Example</h3>
//           <h4 className="homepage-article-topic">Topic Example</h4>
//           <p className="homepage-article-body">
//             Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
//             totam itaque nulla et dolorem qui quo iste vero labore similique
//             adipisci!
//           </p>
//           <h4 className="homepage-article-author">Author Example</h4>
//           <h5 className="homepage-article-posted">Posted at Example</h5>
//         </article>
//         <article className="homepage-article">
//           <h3 className="homepage-article-title">Title Example</h3>
//           <h4 className="homepage-article-topic">Topic Example</h4>
//           <p className="homepage-article-body">
//             Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
//             totam itaque nulla et dolorem qui quo iste vero labore similique
//             adipisci!
//           </p>
//           <h4 className="homepage-article-author">Author Example</h4>
//           <h5 className="homepage-article-posted">Posted at Example</h5>
//         </article>
//       </main>
//     </section>
//   );
// }

// export default Homepage;
