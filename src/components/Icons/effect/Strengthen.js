import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className={classNames('svg svg-effect svg-effect-strengthen', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M300 15.652a14.588 14.588 0 0 0-10.382 4.3L19.952 289.618c-5.723 5.724-5.723 15.04 0 20.763l269.666 269.667a14.59 14.59 0 0 0 10.382 4.3 14.59 14.59 0 0 0 10.382-4.3l269.666-269.667c5.723-5.724 5.723-15.039 0-20.763L310.382 19.952a14.588 14.588 0 0 0-10.382-4.3"
        fill="#5996d6"
      />
      <path
        d="M300 589.347a19.616 19.616 0 0 1-13.916-5.765L16.417 313.916c-7.686-7.686-7.686-20.147 0-27.834L286.084 16.416A19.623 19.623 0 0 1 300 10.652a19.624 19.624 0 0 1 13.917 5.764l269.667 269.666c7.686 7.687 7.686 20.148 0 27.834L313.917 583.583A19.616 19.616 0 0 1 300 589.346m0-10a9.62 9.62 0 0 0 6.846-2.835l269.667-269.666a9.62 9.62 0 0 0 2.836-6.847 9.62 9.62 0 0 0-2.836-6.845L306.846 23.488A9.616 9.616 0 0 0 300 20.652a9.618 9.618 0 0 0-6.846 2.836L23.488 293.154c-3.775 3.774-3.775 9.917 0 13.691l269.666 269.667a9.621 9.621 0 0 0 6.846 2.835"
        fill="#fff"
      />
      <path
        d="M425.457 193.997s-24.844-6.475-64.496 12.496c-26.241-11.928-50.147-16.526-77.02-11.928-18.58 3.179-36.426 8.892-54.627 13.902-27.542 7.582-52.712 13.072-55.79 17.792-5.112 7.839-17.338 49.254 3.749 99.852 12.279 29.462 23.54 52.356 25.219 64.41.594 4.27 1.363 36.465 48.734 53.164 47.37 16.7 78.382 10.906 86.22-4.089 7.838-14.995 6.803-51.618-2.045-50.779-13.878 1.318-27.564-5.378-40.981-4.014-13.418 1.363-28.881 10.781-32.971 8.25-4.09-2.532-7.441-17.951-9.542-28.926-3.093-16.16 10.907-40.818 11.928-59.985 6.475 5.612 25.697 15.344 49.074 16.176 21.185.753 29.309-4.43 44.644-19.766 5.112 4.168 29.684 22.119 71.26 20.415.247-27.108 6.013-47.622 6.013-77.46 0-46.199-9.37-49.51-9.37-49.51"
        fill="#fff"
      />
    </g>
  </svg>
);