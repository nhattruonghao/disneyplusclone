import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

async function getMoviesById(db, id) {
  let result = null;
  const moviesCol = collection(db, "movies");
  const moviesSnapshot = await getDocs(moviesCol);
  moviesSnapshot.docs.map((doc) => {
    if (doc.id === id) {
      return result = doc.data();
    }
  });
  return result;
}

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMoviesById(db, id).then((resp) => setMovie(resp));
  }, []);

  console.log(movie);
  return (
    <Container>
      <Background>
        <img
          src={movie.backgroundImg}
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src={movie.titleImg}
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/assets/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/assets/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
        <img src="/assets/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        {movie.subTitle}
      </SubTitle>
      <Description>
        {movie.description}
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30wh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 42px;

  img {
    width: 100%;
    height: 100%;
    object: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 5px;
  font-size: 14px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  height: 56px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgba(249, 249, 249);
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 1);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 750px;
`;
