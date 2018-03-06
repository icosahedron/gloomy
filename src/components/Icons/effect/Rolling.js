import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className={classNames('svg svg-effect svg-effect-rolling', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M300 15.652a14.588 14.588 0 0 0-10.382 4.3L19.952 289.618c-5.723 5.724-5.723 15.04 0 20.763l269.666 269.667a14.59 14.59 0 0 0 10.382 4.3 14.59 14.59 0 0 0 10.382-4.3l269.666-269.667c5.723-5.724 5.723-15.039 0-20.763L310.382 19.952a14.588 14.588 0 0 0-10.382-4.3"
        fill="#3a8335"
      />
      <path
        d="M300 589.347a19.618 19.618 0 0 1-13.917-5.765L16.417 313.916c-7.687-7.686-7.687-20.147 0-27.834L286.083 16.416A19.625 19.625 0 0 1 300 10.652a19.624 19.624 0 0 1 13.917 5.764l269.666 269.666c7.687 7.687 7.687 20.148 0 27.834L313.917 583.583A19.616 19.616 0 0 1 300 589.346m0-10a9.62 9.62 0 0 0 6.846-2.835l269.667-269.666a9.62 9.62 0 0 0 2.835-6.847 9.619 9.619 0 0 0-2.835-6.845L306.846 23.488A9.616 9.616 0 0 0 300 20.652a9.618 9.618 0 0 0-6.846 2.836L23.488 293.154A9.616 9.616 0 0 0 20.652 300a9.616 9.616 0 0 0 2.836 6.846l269.666 269.667a9.621 9.621 0 0 0 6.846 2.835"
        fill="#fff"
      />
      <path
        d="M198.777 411.946c-30.886-21.864-33.23-58.069-33.23-91.785V176.033h80.697c13.768 0 24.93 11.16 24.93 24.928v115.903c0 21.028 8.182 49.873 50.2 56.9-15.879 33.516-47.292 39.035-75.744 39.036-6.123 0-11.925-.26-17.044-.493-4.289-.193-7.99-.36-11.299-.36z"
        fill="#fff"
      />
      <path
        d="M349.578 215.017l47.911-41.484 47.911 41.484 4.426 3.83 43.485 37.678h-43.485v68.63c0 52.953-5.71 112.088-118.814 112.088-7.427 0-17.19.225-28.103.225-26.717 0-60.295-1.348-83.122-10.634 7.01 0 17.01.855 28.343.855 39.834-.002 96.058-10.556 96.058-105.823v-65.34h-42.522l42.522-36.839z"
        fill="#fff"
      />
    </g>
  </svg>
);