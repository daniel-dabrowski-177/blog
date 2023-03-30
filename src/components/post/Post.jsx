import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://slp-statics.astockcdn.net/static_assets/staging/23winter/home/EMEA/curated-collections/card-3.jpg?width=580&format=webp"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          doloribus iste.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        eius harum accusantium est, nulla hic quo autem inventore fugiat, magnam
        adipisci consequuntur ex commodi quibusdam, beatae quis sint. Sint omnis
        ea possimus quasi asperiores laboriosam consequuntur autem architecto
        molestias, ullam labore quae, mollitia excepturi nesciunt, modi officia
        accusamus ab placeat!
      </p>
    </div>
  );
}
