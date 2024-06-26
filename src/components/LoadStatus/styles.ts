'use client'
import { styled } from 'styled-components'
export const DIVWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  height: 300px;
  width: 100%;
  .loader {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    > .dot {
      animation-fill-mode: forwards;
      animation-name: busy;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in;
      height: 48px;
      width: 48px;
      background: radial-gradient(
        circle at 65% 15%,
        hsl(146, 85%, 90%) 1px,
        hsl(146, 85%, 61%) 3%,
        hsl(146, 85%, 41%) 60%,
        hsl(146, 85%, 21%) 100%
      );
      border-radius: 50%;

      &:nth-child(2) {
        animation-delay: 0.25s;
      }

      &:nth-child(3) {
        animation-delay: 0.5s;
      }
    }
  }

  @keyframes busy {
    0% {
      transform: translateY(0) scale(1);
      filter: drop-shadow(0 32px 12px rgba(0, 0, 0, 0.05));
    }
    100% {
      transform: translateY(100%) scale(0.75);
      filter: drop-shadow(0 2px rgba(0, 0, 0, 0.25));
    }
  }
`
