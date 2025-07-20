<script setup lang="ts">
import { ref } from 'vue';
import logoPic from "@/assets/img/logo.png";

interface Link {
  title: string;
  href: string;
}

const headerLinks: Link[] = ref([
  { title: 'Works', href: '/' },
  { title: 'About', href: '/' },
]);

</script>

<template>
  <header class="header">
    <a class="header__main-link" href="/">
      <img :src="logoPic" class="header__main-link-img">
    </a>
    <div class="header__right-side">
      <nav class="header__links">
        <a
           v-for="(link, index) in headerLinks"
           :key="index"
           class="header__link"
           :href="link.href">
          {{ link.title }}
        </a>  
      </nav>
      <button class="header__en-version-btn">
        <!-- svg -->
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_6072_162)">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
            <path d="M2.48056 4.69434C1.53796 5.92073 0.82719 7.33424 0.41333 8.86982H6.65605L2.48056 4.69434Z" fill="#0052B4"/>
            <path d="M23.5866 8.86977C23.1728 7.33424 22.4619 5.92073 21.5194 4.69434L17.344 8.86977H23.5866Z" fill="#0052B4"/>
            <path d="M0.41333 15.1309C0.827236 16.6664 1.538 18.0799 2.48056 19.3063L6.65591 15.1309H0.41333Z" fill="#0052B4"/>
            <path d="M19.3058 2.48086C18.0794 1.53825 16.6659 0.82748 15.1304 0.413574V6.65625L19.3058 2.48086Z" fill="#0052B4"/>
            <path d="M4.69409 21.5196C5.92048 22.4622 7.334 23.173 8.86953 23.5869V17.3442L4.69409 21.5196Z" fill="#0052B4"/>
            <path d="M8.86948 0.413574C7.33395 0.82748 5.92044 1.53825 4.69409 2.48081L8.86948 6.6562V0.413574Z" fill="#0052B4"/>
            <path d="M15.1304 23.5869C16.6659 23.173 18.0794 22.4622 19.3058 21.5196L15.1304 17.3442V23.5869Z" fill="#0052B4"/>
            <path d="M17.344 15.1309L21.5194 19.3063C22.4619 18.08 23.1728 16.6664 23.5866 15.1309H17.344Z" fill="#0052B4"/>
            <path d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4347H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4694 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z" fill="#D80027"/>
            <path d="M15.1304 15.1304L20.4852 20.4852C20.7315 20.239 20.9664 19.9817 21.1906 19.7148L16.6061 15.1304H15.1304V15.1304Z" fill="#D80027"/>
            <path d="M8.86951 15.1304H8.86941L3.51465 20.4851C3.76084 20.7314 4.01823 20.9664 4.28504 21.1905L8.86951 16.6059V15.1304Z" fill="#D80027"/>
            <path d="M8.86951 8.8696V8.86951L3.5147 3.51465C3.26842 3.76084 3.03348 4.01823 2.80933 4.28504L7.39384 8.86955H8.86951V8.8696Z" fill="#D80027"/>
            <path d="M15.1304 8.8698L20.4852 3.5149C20.239 3.26862 19.9817 3.03368 19.7148 2.80957L15.1304 7.39409V8.8698Z" fill="#D80027"/>
          </g>
          <defs>
            <clipPath id="clip0_6072_162">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <button class="header__lets-work-btn">Lets work</button>
    </div>
  </header>
</template>

<style lang="scss">
@use '../assets/scss/mixins' as *;

.header {
  background-color: #fff;
  padding: 35px 40px;
  @include flex(row, space-between, center);
  &__main-link {

  }
  &__main-link-img {
    display: block;
    width: 84px;
  }
  &__right-side {
    @include flex(row, flex-end, center);
  }
  &__links {
    @include flex(row, flex-end, center);
    margin-right: 70px;
    @media (min-width: 1600px) {
      margin-right: 90px;
    }
  }
  &__link {
    display: block;
    font-family: "TT Commons";
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: #101010;
    &:not(:last-child) {
      margin-right: 38px;
      @media (min-width: 1600px) {
        margin-right: 60px;
      }
    }
  }
  &__en-version-btn {
    display: block;
    width: 52px;
    height: 52px;
    background-color: white;
    border-radius: 50%;
    @include flex(row, center, center);
    border: 2px solid #0000001A;
    margin-right: 16px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  &__lets-work-btn {
    background-color: #101010;
    display: block;
    font-family: "TT Commons";
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    color: #FFFFFF;
    padding: 16px 32px;
    border-radius: 26px;
  }
}

</style>