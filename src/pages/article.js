import { useEffect, useState } from "react";
import { FetchStory } from "src/services/medium-service";

export function Article(){
    const defaultImage = require("../assets/image/default-article.png")
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const result = await FetchStory();
            setData(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        getData();
      }, []);
    
    if (loading|| data.length===0) {
    return <div></div>;
    }

    if (error) {
        return <div></div>;
    }

    return (
        <div id = "article" className="bg-gray-100 px-5 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
          <div className="flex flex-col container justify-center items-center gap-8">
            <div className="text-2xl font-bold md:text-4xl text-center">Read Our Articles & News</div>
            <div className="flex">
                {data.slice(0,2).map(feed => (
                    <div>
                        <a target="_blank" href={feed.link} className="flex flex-row gap-2 items-center justify-center py-5">
                            <img src={defaultImage} className="w-20 lg:w-24"/>
                            <div>
                                <div className="text-lg md:text-xl text-left font-semibold">{feed.title}</div>
                                <div className="text-xs font-medium text-gray-800">{feed.pubDate}</div>
                            </div>
                        </a>
                        <hr className="border-[1.5px] bg-slate-500 "/>
                    </div>
                ))}
            </div>
            <a a target="_blank" href="https://medium.com/@halaumereka" className="font-semibold text-yellow-500">See All</a>
          </div>
        </div>
      );
}