// import React from "react";
import React, { Component } from "react";
import { fetchTop5Articles } from "../api.js";
import { Link } from "@reach/router";

class Homepage extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    fetchTop5Articles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;

    return (
      <section className="homepage-section">
        <header className="homepage-header">
          <h1 className="homepage-title">NC-NEWS</h1>
          <h2 className="homepage-subtitle">Where News Happens</h2>{" "}
          <p className="homepage-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            alias // perspiciatis nisi voluptatem mollitia, illo eligendi harum
            repudiandae // unde eos error labore deleniti sapiente officiis
            explicabo repellendus // modi! Dolores, earum!
          </p>
        </header>
        {isLoading ? (
          <h1>Is Loading</h1>
        ) : (
          <main className="homepage-articles">
            {articles.map((article) => {
              console.log(article.article_id);
              return (
                <article key={article.id} className="homepage-article">
                  <Link to={`/articles/${article.article_id}`}>
                    <h3 className="homepage-article-title">{article.title}</h3>
                  </Link>

                  <h4 className="homepage-article-topic">{`Topic: ${article.topic}`}</h4>
                  <h4 className="homepage-article-author">{`Author: ${article.author}`}</h4>
                  <h4 className="homepage-article-votes">{`Votes: ${article.votes}`}</h4>
                  <h4 className="homepage-article-comments">{`Comments: ${article.comment_count}`}</h4>
                  <h5 className="homepage-article-posted">
                    {article.created_at}
                  </h5>
                </article>
              );
            })}
          </main>
        )}
      </section>
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
