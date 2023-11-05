<template>
  <div class="home-page__section features">
    <div class="features__lines features__lines_top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="148"
        viewBox="0 0 375 148"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M733.05 -214.12C701.33 -227.648 672.193 -243.296 636.035 -249.691C610.209 -254.258 583.64 -253.931 556.83 -247.513C506.843 -235.547 457.279 -216.141 415.02 -189.097C371.837 -161.462 325.764 -135.211 289.505 -101.023C255.794 -69.2369 225.778 -33.918 190.149 -3.58695C130.453 47.2333 48.2487 73.6745 -29.4921 94.2165C-70.62 105.084 -111.958 115.732 -153.319 125.662C-179.274 131.894 -206.456 135.847 -231.418 145.167"
          stroke="#A596FF"
          stroke-width="4.01667"
          stroke-linecap="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="166"
        viewBox="0 0 375 166"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M733.883 -169.034C704.525 -181.563 677.557 -196.055 644.09 -201.98C620.188 -206.212 595.598 -205.911 570.785 -199.972C524.522 -188.898 478.652 -170.936 439.543 -145.9C399.58 -120.318 356.941 -96.0168 323.387 -64.3662C292.19 -34.939 264.414 -2.24062 231.442 25.839C176.197 72.887 100.118 97.36 28.1698 116.371C-9.89362 126.429 -48.1515 136.284 -86.431 145.474C-110.453 151.241 -135.609 154.898 -158.711 163.525"
          stroke="#A596FF"
          stroke-width="4.01667"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="features__section">
      <h3 class="features__title">10K+</h3>
      <p class="features__description">
        Satisfied Costumers <br />
        All Great Over The World
      </p>
    </div>
    <div class="features__section">
      <h3 class="features__title">4M</h3>
      <p class="features__description">
        Healthy Dishes Sold <br />
        Including Milk Shakes Smooth
      </p>
    </div>
    <div class="features__section features__section_last">
      <h3 class="features__title">99.99%</h3>
      <p class="features__description">
        Reliable Customer Support <br />
        We Provide Great Experiences
      </p>
    </div>
    <div class="features__lines features__lines_bottom">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="232"
        viewBox="0 0 40 232"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M106.57 1.81408C91.706 11.1433 74.8797 19.9219 61.3991 30.9995C48.2081 41.8391 35.5969 55.7913 25.7343 68.7825C7.55961 92.7226 3.52461 115.433 2.24054 140.746C0.121454 182.519 10.4079 219.546 27.9093 254.942C39.4953 278.375 52.0497 301.021 66.2238 323.051C70.5513 329.778 74.2768 338.083 82.5834 341.585"
          stroke="#A596FF"
          stroke-width="3.21454"
          stroke-linecap="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="233"
        viewBox="0 0 76 233"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M103.751 1.99944C89.3189 11.0571 72.9816 19.5804 59.8925 30.3352C47.0846 40.8589 34.8392 54.4042 25.2626 67.0162C7.61486 90.2577 3.69522 112.304 2.44615 136.876C0.384832 177.428 10.3682 213.37 27.3567 247.729C38.6032 270.475 50.7899 292.457 64.5492 313.842C68.7501 320.371 72.3663 328.434 80.4307 331.832"
          stroke="#A596FF"
          stroke-width="3.21454"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.features {
  position: relative;
  background-color: $violet-normal;
  padding: 40px 60px;

  &__section {
    overflow: auto;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding: 60px 0;
    border-bottom: 1px solid rgba(197, 197, 197, 0.15);

    &_last {
      border: 0;
    }
  }

  &__title {
    width: 100%;
    text-align: center;
    @extend .public-sans-bold;
    color: #ffffff;
    font-size: 43px;
    line-height: 54px;
    margin-bottom: 10px;
  }

  &__description {
    @extend .inter;
    color: $text-violet-second;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
  }

  &__lines {
    position: absolute;

    &_top {
      top: 0;
      left: 0;
      & svg {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &_bottom {
      bottom: 0;
      right: 0;
      & svg {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
