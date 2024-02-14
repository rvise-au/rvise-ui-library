import classes from './radialSpot.module.css';

export const RadialSpot = ({ size, color, ...others }) => {
  return (
    <svg className={classes.root} viewBox="0 0 1024 1024" aria-hidden="true">
      <circle
        cx="512"
        cy="512"
        r="512"
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fill-opacity="0.7"
      ></circle>
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stop-color="#7775D6"></stop>
          <stop offset="1" stop-color="#E935C1"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};
