import React from 'react';
import { LoadMoreBtn } from './Button.styled';

export function LoadMoreButton({ onClick }) {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
}
