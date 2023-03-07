import { chakra } from "@chakra-ui/react";
const TokenomicsChart = ({
  size,
  style,
}: {
  size: string;
  style?: React.SVGAttributes<SVGSVGElement>;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="sv"
    width={size}
    height={size}
    viewBox="0 0 300 300"
    {...style}
  >
    <chakra.path
      id="0"
      fill="#276749"
      d="M156.5429081048004, 0.1427667627213225 A150,150 0 0 1 190.08449502089863,5.455082209994146 L166.03379800835944,92.18203288399766 A60,60 0 0 0 152.61716324192017,90.05710670508853 Z"
    />
    <path
      id="1"
      fill="#1681bf"
      d="M202.52988108589133, 9.498713197700141 A150,150 0 0 1 267.3887788783715,56.61973124131204 L196.9555115513486,112.64789249652482 A60,60 0 0 0 171.01195243435654,93.79948527908006 Z"
    />
    <path
      id="2"
      fill="#9C4221"
      d="M275.08070581573736, 67.20617756959786 A150,150 0 0 1 294.5466666684515,190.07818802091188 L207.81866666738063,166.03127520836475 A60,60 0 0 0 200.03228232629496,116.88247102783914 Z"
    />
    <path
      id="3"
      fill="#97266D"
      d="M290.5035787170034, 202.52375051074358 A150,150 0 0 1 243.3853907215357,267.3847042837614 L187.3541562886143,196.95388171350456 A60,60 0 0 0 206.20143148680137,171.00950020429744 Z"
    />
    <path
      id="4"
      fill="#553C9A"
      d="M232.79928002695453, 275.0770931346662 A150,150 0 1 1 143.43093697370736,0.1439109980625517 L147.37237478948293,90.05756439922501 A60,60 0 1 0 183.11971201078183,200.03083725386648 Z"
    />
  </svg>
);
export default TokenomicsChart;