import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="sinlgePostAuthor">
            Author: <b>Caster</b>
          </span>
          <span className="sinlgePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae
          vel nisi impedit excepturi veritatis officia, nam laboriosam minus
          soluta, nobis, aliquid quos illo. Optio dolor minima officia
          laudantium commodi dolore totam delectus iusto ratione blanditiis
          amet, iste quis consequuntur. Tenetur quae minus tempora aut id,
          voluptates hic reiciendis! Laudantium dicta aliquid nulla delectus
          doloremque atque doloribus, alias tenetur est possimus perspiciatis
          rem expedita neque porro, laborum, earum cum? Sapiente quod, explicabo
          illo perferendis neque debitis autem magni porro voluptate expedita
          nobis illum amet dignissimos accusantium, tenetur deleniti. Molestiae
          dolorem similique sequi doloribus eligendi consectetur minus repellat
          hic saepe! Atque?
        </p>
      </div>
    </div>
  );
}
