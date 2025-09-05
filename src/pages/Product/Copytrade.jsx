import ArticleItem from "../../components/client/ArticleItem";
import { useArticles } from "../../queries/article.query";

const Copytrade = () => {
  const {data: articles} = useArticles(2003);
  console.log(articles, 'articles');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          articles?.data && articles?.data.map((article) => (
              <ArticleItem data={article} />
          ))
        }
      </div>
    </div>
  )
}

export default Copytrade