import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  width: 90vw;
  height: 68vh;
  position: absolute;
  z-index: 20;
  top: 11vh;
  left: 6.5vw;
`;

const Title = styled.div`
  width: 90vw;
  position: absolute;
  top: 26vh;
  left: 10vw;
`;

const bounce = keyframes`
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #fc60c1,
                0 2px 0 #fc60c1,
                0 3px 0 #fc60c1,
                0 4px 0 #fc60c1,
                0 5px 0 #fc60c1,
                0 6px 0 #fc60c1,
                0 7px 0 #fc60c1,
                0 8px 0 #fc60c1,
                0 9px 0 #fc60c1,
                0 50px 25px rgba(0, 0, 0, .2);
  }
`;

const Words = styled.span`
  position: relative;
  display: inline-block;
  animation: ${bounce} 0.3s ease infinite alternate;
  font-family: "Rubik Iso", cursive;
  font-size: 20vw;
  color: #ffc2e8;
  text-shadow: 0 1px 0 #fc60c1, 0 2px 0 #fc60c1, 0 3px 0 #fc60c1,
    0 4px 0 #fc60c1, 0 5px 0 #fc60c1, 0 6px 0 transparent, 0 7px 0 transparent,
    0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
  &:nth-child(5) {
    animation-delay: 0.8s;
  }
  &:nth-child(6) {
    animation-delay: 1s;
  }
`;

function MobileMain() {
  let cnt = 5;
  const navigate = useNavigate();

  const countdown = () => {
    setTimeout(function () {
      if (cnt === 0) {
        navigate("/todo");
      } else {
        cnt -= 1;
        countdown();
      }
    }, 1000);
  };
  return (
    <Page onLoad={countdown()}>
      <Title>
        <Words>K</Words>
        <Words>i</Words>
        <Words>t</Words>
        <Words>s</Words>
        <Words>c</Words>
        <Words>h</Words>
      </Title>
    </Page>
  );
}

export default MobileMain;