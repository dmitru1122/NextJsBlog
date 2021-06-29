import styled from 'styled-components';

const Spinner = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  border: 3px solid #5f5a5a;
  border-radius: 50%;
  line-height: 155px;
  font-family: sans-serif;
  font-size: 20px;
  color: #00a4e6;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #00a4e6;
  box-shadow: 0 0 20px rgba(16, 16, 16, 0.5);

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #00a4e6;
    border-right: 3px solid #00a4e6;
    border-radius: 50%;
    animation: animateCircle 2s linear infinite;
`;

const Bullet = styled.span`
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 2s linear infinite;

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #00a4e6;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #00a4e6;
  }
`;

const SpinnerTemplate = (): JSX.Element => (
  <Spinner>
    Loading
    <span className="spinner__span"></span>
  </Spinner>
);

export default SpinnerTemplate;

// @keyframes animateCircle {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes animate {
//   0% {
//     transform: rotate(45deg);
//   }
//   100% {
//     transform: rotate(405deg);
//   }
// }
// </style>
