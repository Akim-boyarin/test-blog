<script setup lang="ts">
import { useArticlesStore } from "~/stores/articles";
import { useAsyncData } from "#app";
import fishPicOne from "@/assets/img/fishArticlePics/fish-pic_1.png";
import fishPicTwo from "@/assets/img/fishArticlePics/fish-pic_2.png";
import fishPicThree from "@/assets/img/fishArticlePics/fish-pic_3.png";
import fishPicFour from "@/assets/img/fishArticlePics/fish-pic_4.png";
import fishPicFive from "@/assets/img/fishArticlePics/fish-pic_5.png";
import fishPicSix from "@/assets/img/fishArticlePics/fish-pic_6.png";
import fishPicSeven from "@/assets/img/fishArticlePics/fish-pic_7.png";
import fishPicEight from "@/assets/img/fishArticlePics/fish-pic_8.png";
import BlogPagination from "~/components/BlogPagination.vue";

const fishPicsList: string[] = [
  fishPicOne,
  fishPicTwo,
  fishPicThree,
  fishPicFour,
  fishPicFive,
  fishPicSix,
  fishPicSeven,
  fishPicEight
];

const articlesStore = useArticlesStore();

// get articles from API
await useAsyncData('articles', () => articlesStore.loadArticles());
</script>

<template>
  <div class="blog-page">
    <h1 class="blog-page__title">Articles</h1>
    <div class="blog-page__articles-wrapper">
      <NuxtLink
          v-for="(article, index) in articlesStore.chosenArticles"
          :key="+article.id"
          :to="`/blog/${article.id}`"
          class="blog-article">
        <div class="blog-article__content-wrapper">
          <img :src="fishPicsList[index]" alt="article-photo" class="blog-article__photo">
          <div class="blog-article__text-wrapper">
            {{ article.description }}
          </div>
          <div class="blog-article__read-more-message-wrapper">
            <p class="blog-article__read-more-message">Read more</p>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="blog-page__pagination-interface">
      <BlogPagination/>
    </div>
  </div>
</template>

<style lang="scss">
@use '../../assets/scss/mixins' as *;

.blog-page {
  background-color: #fff;
  padding: 120px 112px 140px;
  @media (min-width: 1600px) {
    padding: 130px 160px 150px;
  }
  &__title {
    font-family: 'TT Commons';
    font-weight: 400;
    font-size: 80px;
    line-height: 100%;
    color: #101010;
    margin-bottom: 40px;
  }
  &__articles-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 50px 22px;
    align-items: self-end;
    margin-bottom: 50px;
    @media (min-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 60px 30px;
    }
  }
  &__pagination-interface {

  }
}

.blog-article {
  display: block;
  position: relative;
  &__content-wrapper {
    position: relative;
  }
  &__photo {
    display: block;
    width: 100%;
    margin-bottom: 24px;
  }
  &__text-wrapper {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'TT Commons';
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: #101010;
  }
  &__read-more-message-wrapper {
    padding-top: 12px;
  }

  &__read-more-message {
    font-family: 'TT Commons';
    font-weight: 400;
    color: #E2BEFF;
    opacity: 0;
    font-size: 20px;
    line-height: 120%;
    transition: all 0.2s ease;
  }
}

.blog-article:hover .blog-article__read-more-message-wrapper {
  display: block;
}
.blog-article:hover .blog-article__read-more-message {
  opacity: 0.5;
}
</style>