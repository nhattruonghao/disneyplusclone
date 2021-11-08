import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setUserLogin,
} from "../features/user/userSlice";
import styled from "styled-components";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    auth.onAuthStateChanged( async (user) =>{
      if(user){
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          }),
        );
        history.push('/');
      }
    } )
  }, [])

  const SignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      );
      history.push('/');
    });
  };

  return (
    <Container>
      <CTA>
        <CTALogoOne src="assets/images/cta-logo-one.svg" />
        <SignUp onClick={SignIn}>GET ALL THERE</SignUp>
        <Description>
          Yes! I would like to receive updates, special offers, and other
          information from Disney+ and The Walt Disney Family of Companies.
        </Description>
        <CTALogoTwo src="assets/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("assets/images/login-background.jpg");
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms linear;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
