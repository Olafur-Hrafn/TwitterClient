import styled from 'styled-components';

export const ModalImg = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
`;

export const Background = styled.div`
  /*width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;*/
`;
export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  height: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 25px !important;
`;

export const ExitButton = styled.div`
  margin-bottom: 12px;
  font-size: 1.6rem;
  font-weight: 500;
  color: #1da1f2;
  /* margin-left: 20px; */
  padding-left: 30px;
  border-bottom: 1px solid #657786;
`;

export const Spacer = styled.span`
  margin-right: 4px;
`;
export const TweetContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const ImageWrapper = styled.div`
  margin: 10px 10px 0px 20px;
`;
export const TweetCardNameSpace = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const TweetContent = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 25%;
  border-top: 1px solid #657786;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin: 75px 50px 0px 0px;
  border-radius: 20px;
  background: #1da1f2;
  border: #1da1f2;
  color: #fff;
  width: 10%;

  &:hover {
    -webkit-box-shadow: 0px 0px 100px 0px rgba(29, 161, 242, 2);
    -moz-box-shadow: 0px 0px 100px 0px rgba(29, 161, 242, 1);
    box-shadow: 0px 0px 100px 0px rgba(29, 161, 242, 1);
    transition: 0.8s ease;
  }
`;
