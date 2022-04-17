const articles = [
  {
    Id: 1,
    author: "Hassan Ibrahim",
    title: "7 Big Myths About AI You Shouldn’t Believe",
    createdAt: "02/10/20",
    body: "## TSome people still thinks AI will take over the world, but the truth is the likelyhood of that happening is pretty slim",
    comments: [],
    likes: 0,
    image: "caleb.jpg",
  },
  {
    Id: 2,
    author: "Hassan Ibrahim",
    title: "7 Big Myths About AI You Shouldn’t Believe",
    createdAt: "02/10/20",
    body: "##Some people still thinks AI will take over the world, but the truth is the likelyhood of that happening is pretty slim",
    comments: [],
    likes: 0,
    image: "techie.jpg",
  },
  {
    Id: 3,
    author: "Hassan Ibrahim",
    title: "7 Big Myths About AI You Shouldn’t Believe",
    createdAt: "02/10/20",
    body: "##Some people still thinks AI will take over the world, but the truth is the likelyhood of that happening is pretty slim",
    comments: [],
    likes: 0,
    image: "jess.jpg",
  },
  {
    Id: 4,
    author: "Hassan Ibrahim",
    title: "7 Big Myths About AI You Shouldn’t Believe",
    createdAt: "02/10/20",
    body: "## Some people still thinks AI will take over the world, but the truth is the likelyhood of that happening is pretty slim",
    comments: [],
    likes: 0,
    image: "joanna.jpg",
  },
  {
    Id: 5,
    author: "Hassan Ibrahim",
    title: "7 Big Myths About AI You Shouldn’t Believe",
    createdAt: "02/10/20",
    body: "## Some people still thinks AI will take over the world, but the truth is the likelyhood of that happening is pretty slim",
    comments: [],
    likes: 0,
    image: "jeswin-thomas.jpg",
  },
];
articles.forEach((el, index) => {
  delete el.likes;
  delete el.comments;
  delete el.Id;
  el.coverImage = { url: el.image };
  delete el.image;
  el.createdAt.replace("/", "-");
  el.authorId = index;
  delete el.author;
  el.title = el.title + index;
});

module.exports = { articles };
