import cloud from "../image/cloud.png";
import mac from "../image/mac.png";
import page from "../image/page.png";
import styled from "styled-components";
import Button from "./Buttons";

/* 배경 구름 */
const Cloud1 = styled.div`
  width: 60vw;
  height: 90vh;
  display: inline-block;
  background-image: url(${cloud});
  background-repeat: no-repeat;
  background-size: 60vw 90vh;
  position: absolute;
  top: 20vh;
  right: 50vw;
`;
const Cloud2 = styled.div`
  width: 50vw;
  height: 80vh;
  display: inline-block;
  background-image: url(${cloud});
  background-repeat: no-repeat;
  background-size: 50vw 80vh;
  transform: scaleX(-1);
  position: absolute;
  top: 0;
  left: 55vw;
`;

/* 맥 장치 */
const Mac = styled.div`
  width: 60vw;
  height: 80vh;
  position: absolute;
  top: 10vh;
  left: 20vw;
  background-image: url(${mac});
  background-repeat: no-repeat;
  background-size: 60vw 80vh;
  background-position: 0 0;
`;

/* 맥 화면 */
const HomePage = styled.div`
  width: 55vw;
  height: 47.4vh;
  position: absolute;
  top: 3.7vh;
  left: 2.5vw;

  background-image: url(${page});
  background-repeat: no-repeat;
  background-size: 55vw 47.4vh;
  opacity: 0.7;
`;

/* 날짜 표시 */
const Date = styled.div`
  width: 10vw;
  height: 4vh;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 4vw;

  font-size: 2vh;
  text-align: center;
  line-height: 4vh;
  color: white;
`;

/* 장치 컴포넌트 */
function Device() {
  return (
    <>
      <Cloud1 />
      <Cloud2 />
      <Mac>
        <HomePage>
          <Date>2023.09.04</Date>
        </HomePage>
        <Button />
      </Mac>
    </>
  );
}

export default Device;
