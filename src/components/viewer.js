import React from "react";
import styled from "styled-components";

function viewer() {
  return (
    <Container>
      <Item>
        <img src="/assets/images/viewers-disney.png" alt="" />
      </Item>
      <Item>
        <img src="/assets/images/viewers-pixar.png" alt="" />
      </Item>
      <Item>
        <img src="/assets/images/viewers-marvel.png" alt="" />
      </Item>
      <Item>
        <img src="/assets/images/viewers-starwars.png" alt="" />
      </Item>
      <Item>
        <img src="/assets/images/viewers-national.png" alt="" />
      </Item>
    </Container>
  );
}

export default viewer;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Item = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, .8);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`
