import React, { useState,useEffect } from "react";
import Paginator from "../Paginator"
import axios from 'axios';
import VerticalCard from "../VerticalCards";
const Horizontal = () => {
    const [News, setNews] = useState([]);
    useEffect(()=>{
      const getArticles = async () => {
        const res = await axios.get(`https://corona.lmao.ninja/v2/countries`);
        setNews(res.data);
        console.log(res.data.cases)
      };
      getArticles();
    }, [])
    const [showPerPage,setShowPerPage] = useState(6);
    const [pagination, setPagination] = useState({
        start:0,
        end: showPerPage,
    });

    const onPaginationChange = (start,end) => {
       setPagination({start:start, end:end})
    };
    return (
        <>
            <div class="card-wrapper">
              {News.slice(pagination.start,pagination.end).map((result) => (
                   <VerticalCard
                   Country = {result.country}
                   cases={result.cases}
                   todayCases={result.todayCases}
                   todayDeaths={result.todayDeaths}
                   deaths={result.deaths}
                   img={result.countryInfo.flag}
                   />
              ))}
            </div>
            <Paginator total={News.length} showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
        </>
    );
};

export default Horizontal;