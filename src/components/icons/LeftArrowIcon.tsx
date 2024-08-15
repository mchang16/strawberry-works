export function LeftArrowIcon({
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
      <title>Artboard-66</title>
      <g id="Left">
        <path
          d="M14,17a1,1,0,0,1-.707-.293l-4-4a1,1,0,0,1,0-1.414l4-4a1,1,0,1,1,1.414,1.414L11.414,12l3.293,3.293A1,1,0,0,1,14,17Z"
          fill={fill}
          stroke={stroke}
        />
      </g>
    </svg>
  );
}
