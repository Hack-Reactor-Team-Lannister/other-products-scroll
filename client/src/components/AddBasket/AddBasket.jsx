import React, { useState, useEffect } from 'react';
import {
  CheckMark,
  Circle,
  CheckMarkWrapper,
  BasketIcon,
  BasketWrapper,
  OuterBasketWrapper,
} from './basketStyle';

function CirclCheckAnimation() {
  const [showCheck, setShowCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowCheck(true), 550);
  });
  return (
    <div>
      { showCheck ? (
        <CheckMarkWrapper>
          <svg viewBox="0 0 48 48">
            <CheckMark />
          </svg>
        </CheckMarkWrapper>
      ) : (
        <svg viewBox="0 0  500 500">
          <Circle />
        </svg>
      ) }
    </div>
  );
}

function AddBasket({ hovering }) {
  const [added, setAdded] = useState(false);
  return (
    <OuterBasketWrapper hovering={hovering}>
      <BasketWrapper hovering={hovering} onClick={() => { setAdded(!added); }}>
        {added ? (
          <CirclCheckAnimation />
        ) : (
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <BasketIcon />
          </svg>
        ) }
      </BasketWrapper>
    </OuterBasketWrapper>
  );
}

export default AddBasket;
