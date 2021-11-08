import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "./imgSlider";
import Viewer from "./viewer";
import Movies from "./Movies";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movies/moviesSlice";

async function getMovies(db) {
  const moviesCol = collection(db, "movies");
  const moviesSnapshot = await getDocs(moviesCol);
  const moviesList = moviesSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return moviesList;
}
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies(db).then((resp) => dispatch(setMovies(resp)));
  }, []);

  return (
    <Container>
      <Slider />
      <Viewer />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px) 50px;
  position: relative;
  overflow: hidden;

  &:before {
    background: url("assets/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
