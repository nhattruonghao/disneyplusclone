import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
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

  const SignOut = () => {
    signOut(auth).then((resp) => {
      dispatch(setSignOut());
      history.push('/login');
    });
  };
  return (
    <Nav>
      <Logo src="/assets/images/logo.svg" />
      {!userName ? (
        <Login onClick={SignIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/assets/images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/assets/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/assets/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/assets/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/assets/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/assets/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} onClick={SignOut} />
        </>
      )}
    </Nav>
  );
}
export default Header;

const Login = styled.div`
  position: absolute;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #f9f9f9;
  right: 36px;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover {
    background-color: rgb(249, 249, 249);
    color: rgb(1, 1, 1);
  }
`;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left: 25px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                position: absolute;
                height: 1px;
                background-color: white;
                bottom: -6px;
                right: 2px;
                left: 0;
                opacity: 0.5;
                transform: scaleX(0);
                transform-origin: left;
                transition: all 0.2s ease-out;
            }       
            }
            &:hover {
                span:after {
                    transform: scaleX(1);
                    opacity: 1;
                }
            }  
        }
    }

`;

const UserImg = styled.img`
  border-radius: 50%;
  over-flow: hidden;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
