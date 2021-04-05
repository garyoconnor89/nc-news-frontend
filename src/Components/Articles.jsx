import React, { Component } from "react";

class Articles extends Component {
  render() {
    return (
      <section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <main className="homepage-articles">
          <h1 className="articles-title">Articles</h1>
          <label htmlFor="filter-topic">Filter by topic: </label>
          <select name="filter-topic" id="filter-topic">
            <option value="Example">Example</option>
            <option value="Example1">Example1</option>
            <option value="Example2">Example2</option>
            <option value="Example3">Example3</option>
            <option value="Example4">Example4</option>
          </select>
          <br />
          <label htmlFor="sort-topic">Sort by category: </label>
          <select name="sort-topic" id="sort-topic">
            <option value="sort">sort</option>
            <option value="sort1">sort1</option>
            <option value="sort2">sort2</option>
            <option value="sort3">sort3</option>
            <option value="sort4">sort4</option>
          </select>
          <br />
          <label htmlFor="order-topic">Order by: </label>
          <select name="order-topic" id="order-topic">
            <option value="order">order</option>
            <option value="order1">order1</option>
            <option value="order2">order2</option>
            <option value="order3">order3</option>
            <option value="order4">order4</option>
          </select>

          <article className="homepage-article">
            <h3 className="homepage-article-title">Title Example</h3>
            <h4 className="homepage-article-topic">Topic Example</h4>
            <p className="homepage-article-body">
              Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
              totam itaque nulla et dolorem qui quo iste vero labore similique
              adipisci!
            </p>
            <h4 className="homepage-article-author">Author Example</h4>
            <h5 className="homepage-article-posted">Posted at Example</h5>
          </article>
          <article className="homepage-article">
            <h3 className="homepage-article-title">Title Example</h3>
            <h4 className="homepage-article-topic">Topic Example</h4>
            <p className="homepage-article-body">
              Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
              totam itaque nulla et dolorem qui quo iste vero labore similique
              adipisci!
            </p>
            <h4 className="homepage-article-author">Author Example</h4>
            <h5 className="homepage-article-posted">Posted at Example</h5>
          </article>
          <article className="homepage-article">
            <h3 className="homepage-article-title">Title Example</h3>
            <h4 className="homepage-article-topic">Topic Example</h4>
            <p className="homepage-article-body">
              Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
              totam itaque nulla et dolorem qui quo iste vero labore similique
              adipisci!
            </p>
            <h4 className="homepage-article-author">Author Example</h4>
            <h5 className="homepage-article-posted">Posted at Example</h5>
          </article>
          <article className="homepage-article">
            <h3 className="homepage-article-title">Title Example</h3>
            <h4 className="homepage-article-topic">Topic Example</h4>
            <p className="homepage-article-body">
              Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
              totam itaque nulla et dolorem qui quo iste vero labore similique
              adipisci!
            </p>
            <h4 className="homepage-article-author">Author Example</h4>
            <h5 className="homepage-article-posted">Posted at Example</h5>
          </article>
          <article className="homepage-article">
            <h3 className="homepage-article-title">Title Example</h3>
            <h4 className="homepage-article-topic">Topic Example</h4>
            <p className="homepage-article-body">
              Body Example. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam quam quod in, nostrum sequi ipsa soluta doloribus velit
              totam itaque nulla et dolorem qui quo iste vero labore similique
              adipisci!
            </p>
            <h4 className="homepage-article-author">Author Example</h4>
            <h5 className="homepage-article-posted">Posted at Example</h5>
          </article>
        </main>
      </section>
    );
  }
}

export default Articles;
