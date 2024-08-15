export function RightArrowIcon({
  stroke,
  fill,
}: {
  stroke: string;
  fill: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <title>Artboard-65</title>
      <g id="Right">
        <path
          d="M14.707,12.707l-4,4a1,1,0,0,1-1.414-1.414L12.586,12,9.293,8.707a1,1,0,1,1,1.414-1.414l4,4A1,1,0,0,1,14.707,12.707Z"
          fill={fill}
          stroke={stroke}
        />
      </g>
    </svg>
  );
}
