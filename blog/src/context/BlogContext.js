import React from "react";

const BlogContext = React.createContext();

//Using children allows a component to accept anther compoent as an argument see vid 122
export const BlogProvider = ({ children }) => {
  const BlogPosts = [
    { title: "Blog Post No 1 " },
    { title: "Blog Post No 2 " },
    { title: "Blog Post No 3 " }
  ];

  //   return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
