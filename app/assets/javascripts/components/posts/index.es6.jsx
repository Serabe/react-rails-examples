class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let posts = this.props.posts.map((post) => {
      return this.renderPost(post)
    });

    return (
      <div>
        <h1>All Posts</h1>
        <ul>
          {posts}
        </ul>
        <br/>
      </div>
    );
  }

  renderPost(post) {
    return (
      <li key={post.id}>
        <a href={post.url}>{post.title}</a>
      </li>
    )
  }
}
