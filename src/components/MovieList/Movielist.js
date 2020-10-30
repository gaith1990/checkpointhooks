import React from "react";
import MovieCard from "../MovieCard/MovieCard";


function MovieList(props) {
  return (
    <div style={{ display: "flex", position: "relative", flexWrap: "wrap" }}>
      {props.item.filter((list) =>
        list.title.toLowerCase().includes(props.search.toLowerCase())
      )
        .filter((list) => list.rate >= props.rate)
        .map((list, i) => {
          return (
            <MovieCard
              key={i}
              title={list.title}
              description={list.description}
              posteUrl={list.posteUrl}
              rate={list.rate}
            />
          );
        })}
    </div>
  );
}
export default MovieList;
