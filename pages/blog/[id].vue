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

const route = useRoute();
const pageId = +computed(() => route.params.id as string).value;

const articlesStore = useArticlesStore();

// load article
await useAsyncData('article', () => articlesStore.loadArticleById(pageId));

interface Article {
  id: string,
  createdAt: string,
  description: string,
  image: string,
  preview: string,
  title: string
}

const article: Article | null = articlesStore.articleById(pageId);
console.log('article in article page', article);

// define pic to article (temporary)
const definePicToArticle = (): string | undefined => {
  const picsCollection = [
    fishPicOne,
    fishPicTwo,
    fishPicThree,
    fishPicFour,
    fishPicFive,
    fishPicSix,
    fishPicSeven,
    fishPicEight
  ];

  const articleId = article?.id;
  const articleIdNum = (typeof articleId !== "undefined") ? +articleId : 0;
  const picIndex = (articleIdNum - 2) % picsCollection.length;

  return picsCollection[picIndex];
};

</script>

<template>
  <div class="blog-article-page">
    <template v-if="article === null">
      <h1 class="blog-article-page__title">Sorry, we couldn't load the article.</h1>
    </template>
    <template v-else>
      <h1 class="blog-article-page__title">{{ article.title }}</h1>
      <div class="blog-article-page__photo-wrapper">
        <img class="blog-article-page__photo" :src="definePicToArticle()" alt="article photo">
      </div>
      <p class="blog-article-page__small-text">About</p>
      <p class="blog-article-page__text">{{ article.description }}</p>
    </template>
  </div>
</template>

<style lang="scss">
@use '../../assets/scss/mixins' as *;

.blog-article-page {
  background-color: #fff;
  padding: 120px 112px 140px;
  font-family: 'TT Commons';
  @media (min-width: 1600px) {
    padding: 130px 160px 150px;
  }
  &__title {
    font-weight: 400;
    font-size: 80px;
    line-height: 100%;
    color: #101010;
    margin-bottom: 70px;
  }
  &__photo-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 550px;
    margin-bottom: 80px;
    @media (min-width: 1600px) {
      height: 750px;
    }
  }
  &__photo {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__small-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    color: #101010;
    margin-bottom: 32px;
  }
  &__text {
    font-size: 36px;
    font-weight: 400;
    line-height: 124%;
    color: #101010;
    width: 50%;
  }
}
</style>