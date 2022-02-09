import React, { useState } from 'react';
import * as S from './style';
import reactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '',
  padding: '200px',
  zIndex: 1000,
  width: '50%',
  height: '40%',
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, .5)',
  zIndex: 1000,
};

export default function Modal({
  open,
  children,
  onClose,
  postReply,
  data,
  userinfo,
}) {
  if (!open) return null;

  return reactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <S.ModalWrapper>
            <S.ExitButton onClick={onClose}>X</S.ExitButton>
            <S.TweetContainer>
              <S.ImageWrapper>
                <S.ModalImg src={data.userAvatar} />
              </S.ImageWrapper>
              <S.Wrapper>
                <S.TweetCardNameSpace>
                  <h5>
                    <S.Spacer>{data.userName}</S.Spacer>
                  </h5>
                  <h6>
                    <S.Spacer>{data.userHandle}</S.Spacer>
                  </h6>
                  <h6>
                    <S.Spacer>{data.dateOfPost}</S.Spacer>
                  </h6>
                </S.TweetCardNameSpace>
                <S.TweetContent>{data.tweetText}</S.TweetContent>
              </S.Wrapper>
            </S.TweetContainer>
            <S.ReplyContainer>
              <S.ImageWrapper>
                <S.ModalImg onClick={() => console.log(data)} src={userinfo.userAvatar} />
              </S.ImageWrapper>
              {children}
            </S.ReplyContainer>
            <S.ButtonWrapper>
              <S.Button onClick={postReply}>Reply</S.Button>
            </S.ButtonWrapper>
          </S.ModalWrapper>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
