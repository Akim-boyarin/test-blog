<script setup lang="ts">
import { useArticlesStore } from "~/stores/articles";

interface ButtonsData {
  num: number;
  isChosen: boolean;
}

const articlesStore = useArticlesStore();

const buttonsData = computed(() => {
  const currentPageNumber = articlesStore.currentPage;

  const minNumValue = 0;
  const maxNumValue = articlesStore.maxArticlesPage;

  const result: ButtonsData[] = [];

  if (currentPageNumber === minNumValue) {
    for (let i = 0; i < 4; i++) {
      const data: ButtonsData = {
        num: i,
        isChosen: (!i),
      };

      result.push(data);
    }
  } else if (currentPageNumber > minNumValue && currentPageNumber < maxNumValue) {
    for (let i = (currentPageNumber - 1); i < (currentPageNumber + 2); i++) {
      const data: ButtonsData = {
        num: i,
        isChosen: (i === currentPageNumber),
      };

      result.push(data);
    }
  } else {
    for (let i = (maxNumValue - 3); i < (maxNumValue + 1); i++) {
      const data: ButtonsData = {
        num: i,
        isChosen: (i === maxNumValue),
      };

      result.push(data);
    }
  }

  return result;
});
</script>

<template>
  <div class="blog-pagination">
    <!-- arrow-button left -->
    <div
        class="blog-pagination__arrow-button blog-pagination__arrow-button_left"
        :class="{ 'button-hidden': articlesStore.currentPage === 0 }"
        @click="articlesStore.decreaseCurrentPage">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9.5 7.5L14.5 12.5L9.5 17.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <!-- page-num-button -->
    <div
        v-for="(buttonData, index) in buttonsData"
        :key="index"
        class="blog-pagination__page-num-button"
        :class="{ 'blog-pagination__page-num-button_is-chosen': buttonData.isChosen }"
        @click="articlesStore.chooseCurrentPage(buttonData.num)">
      {{ buttonData.num + 1 }}
    </div>
    <!-- arrow-button right -->
    <div
        class="blog-pagination__arrow-button"
        :class="{ 'button-hidden': articlesStore.currentPage === articlesStore.maxArticlesPage }"
        @click="articlesStore.increaseCurrentPage">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9.5 7.5L14.5 12.5L9.5 17.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/scss/mixins' as *;

.blog-pagination {
  @include flex(row, flex-start, center);
  gap: 8px;
  &__arrow-button {
    @include pagination-button-style(#FFF, #F3F3F3);
    &:hover {
      background-color: #E8E8E8;
    }
  }
  &__arrow-button_left {
    transform: rotate(180deg);
  }
  &__page-num-button {
    @include pagination-button-style(#F3F3F3, #F3F3F3);
    font-family: "TT Commons";
    font-size: 16px;
    line-height: 100%;
    font-weight: 400;
    color: #101010;
    &:hover {
      background-color: #E8E8E8;
    }
  }
  &__page-num-button_is-chosen {
    background-color: #101010;
    border-color: #101010;
    color: #fff;
    &:hover {
      background-color: #101010;
      border-color: #101010;
    }
  }
  .button-hidden {
    display: none;
  }
}
</style>