import TituloPrincipal from './components/TituloPrincipal';

import './App.css';
import BlogPostModel from './models/BlogPostModel';
import BlogPost from './components/BlogPost';

function App() {
  const blogModel = new BlogPostModel(
    "First Post.",
    "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
  );
  return (
    <div className="App">
      <TituloPrincipal propsTitle = "Click me!" />
      <BlogPost post={ blogModel } />
    </div>
  );
}

export default App;
