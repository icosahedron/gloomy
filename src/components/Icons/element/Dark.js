import React from 'react';
import classNames from 'classnames';

export default ({ className, consume, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className={classNames('svg svg-element svg-element-Dark', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M300 28c-72.653 0-140.959 28.293-192.333 79.667C56.293 159.041 28 227.347 28 300c0 72.653 28.293 140.959 79.667 192.333C159.041 543.707 227.347 572 300 572c72.653 0 140.959-28.293 192.333-79.667C543.707 440.959 572 372.653 572 300c0-72.653-28.293-140.959-79.667-192.333C440.959 56.293 372.653 28 300 28"
        fill="#202830"
      />
      <path
        d="M300 580c-37.793 0-74.464-7.405-108.993-22.011-33.345-14.102-63.287-34.29-88.997-59.999-25.709-25.71-45.897-55.652-59.999-88.997C27.405 374.464 20 337.793 20 300c0-37.793 7.405-74.464 22.011-108.993 14.102-33.345 34.29-63.287 59.999-88.997 25.71-25.709 55.652-45.896 88.997-59.999C225.536 27.405 262.207 20 300 20c37.793 0 74.464 7.405 108.993 22.011 33.345 14.103 63.287 34.29 88.997 59.999 25.709 25.71 45.897 55.652 59.999 88.997C572.595 225.536 580 262.207 580 300c0 37.793-7.405 74.464-22.011 108.993-14.102 33.345-34.29 63.287-59.999 88.997-25.71 25.709-55.652 45.897-88.997 59.999C374.464 572.595 337.793 580 300 580m0-16c145.803 0 264-118.196 264-264 0-145.803-118.197-264-264-264S36 154.197 36 300c0 145.804 118.197 264 264 264"
        fill="#fff"
      />
      <path
        d="M345.83 154.215c-8.87 0-17.56.8-26 2.32a157.302 157.302 0 0 1 17.54 9.44 155.197 155.197 0 0 1 5.276 3.454c73.09 1.203 131.963 59.194 131.963 130.566 0 71.385-58.877 129.378-131.97 130.577a161.116 161.116 0 0 1-5.28 3.454 156.88 156.88 0 0 1-17.529 9.439 146.505 146.505 0 0 0 26 2.32c80.38 0 145.78-65.4 145.78-145.79 0-80.38-65.4-145.78-145.78-145.78m-45.83 7.38c-6.42-2.14-13.05-3.83-19.83-5.06-8.44-1.52-17.12-2.32-25.99-2.32-80.39 0-145.79 65.4-145.79 145.78 0 80.39 65.4 145.79 145.79 145.79 8.87 0 17.55-.8 25.99-2.32 6.78-1.23 13.41-2.92 19.83-5.06a143.737 143.737 0 0 0 17.51-7.11c48.75-23.61 82.45-73.59 82.45-131.3 0-57.7-33.7-107.68-82.45-131.29a144.058 144.058 0 0 0-17.51-7.11m45.83 296.19c-15.93 0-31.31-2.37-45.82-6.79-14.51 4.42-29.9 6.79-45.83 6.79-87.01 0-157.79-70.78-157.79-157.79 0-87 70.78-157.78 157.79-157.78 15.93 0 31.32 2.37 45.83 6.79 14.51-4.42 29.89-6.79 45.82-6.79 87 0 157.78 70.78 157.78 157.78 0 87.01-70.78 157.79-157.78 157.79"
        fill="#fff"
      />
    </g>
    {consume && (
      <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
        <path
          d="M300 554C159.944 554 46 440.056 46 300 46 159.944 159.944 46 300 46c140.056 0 254 113.944 254 254 0 140.056-113.944 254-254 254m0-529.566c-37.189 0-73.281 7.289-107.271 21.666-32.816 13.879-62.284 33.746-87.584 59.045-25.301 25.302-45.166 54.769-59.045 87.584C31.723 226.718 24.434 262.809 24.434 300s7.289 73.282 21.666 107.27c13.879 32.816 33.744 62.283 59.045 87.585 25.301 25.301 54.769 45.166 87.584 59.045 33.99 14.377 70.082 21.666 107.271 21.666 37.189 0 73.281-7.289 107.271-21.666 32.815-13.879 62.283-33.744 87.584-59.045 25.3-25.301 45.167-54.769 59.046-87.585 14.376-33.988 21.665-70.08 21.665-107.27s-7.289-73.282-21.665-107.271c-13.879-32.815-33.746-62.283-59.046-87.584-25.3-25.299-54.768-45.166-87.584-59.045C373.281 31.723 337.189 24.434 300 24.434"
          fill="#fff"
        />
        <path
          d="M470.472 90.256c-2.607 0-4.236 1.082-5.144 1.99L300 257.573 134.672 92.246c-.907-.908-2.537-1.99-5.144-1.99-9.428 0-33.532 18.093-39.001 31.297-2.906 7.014-.17 11.23 1.719 13.119L257.574 300 92.246 465.328c-2.085 2.084-5.047 6.872-1.467 15.515 5.437 13.127 23.817 30.064 35.888 30.064 3.175 0 5.944-1.09 8.005-3.153L300 342.427l165.328 165.327c2.062 2.063 4.83 3.153 8.005 3.153 12.072 0 30.452-16.937 35.889-30.064 3.58-8.643.617-13.431-1.468-15.515L342.427 300l165.327-165.328c1.89-1.89 4.626-6.106 1.718-13.123C504 108.344 479.9 90.256 470.474 90.256z"
          fill="#e34e61"
        />
        <path
          d="M88.71 461.792L250.502 300 88.71 138.208c-2.231-2.231 47.271-51.726 49.498-49.498L300 250.502 461.792 88.71c2.228-2.228 51.73 47.267 49.498 49.498L349.498 300 511.29 461.792c2.389 2.389-46.477 52.518-49.498 49.498L300 349.497 138.208 511.29c-3.019 3.019-51.887-47.109-49.498-49.498m384.623 44.114c13.091 0 39.483-28.446 30.886-37.043L335.355 300l168.864-168.863c9.048-9.048-24.846-35.882-33.746-35.882-.703 0-1.252.169-1.61.526L300 264.645 131.137 95.781c-.358-.358-.906-.526-1.61-.526-8.902 0-42.793 26.834-33.746 35.882L264.645 300 95.781 468.863c-8.597 8.598 17.795 37.046 30.886 37.043 1.773 0 3.305-.522 4.47-1.687L300 335.355l168.863 168.864c1.166 1.165 2.696 1.687 4.47 1.687"
          fill="#fff"
        />
        <path
          d="M300 580c-37.793 0-74.463-7.405-108.994-22.011-33.344-14.102-63.286-34.29-88.996-59.999-25.709-25.71-45.897-55.652-59.999-88.997C27.405 374.464 20 337.793 20 300c0-37.793 7.405-74.464 22.011-108.993 14.102-33.345 34.29-63.287 59.999-88.997 25.71-25.709 55.652-45.896 88.996-59.999C225.537 27.405 262.207 20 300 20c37.793 0 74.463 7.405 108.994 22.011 33.344 14.103 63.286 34.29 88.996 59.999 25.709 25.71 45.897 55.652 60 88.997C572.595 225.536 580 262.207 580 300c0 37.793-7.405 74.464-22.01 108.993-14.103 33.345-34.291 63.287-60 88.997-25.71 25.709-55.652 45.897-88.996 59.999C374.463 572.595 337.793 580 300 580m0-16c145.803 0 264-118.196 264-264 0-145.803-118.197-264-264-264S36 154.197 36 300c0 145.804 118.197 264 264 264"
          fill="#e34e61"
        />
      </g>
    )}
  </svg>
);