import { defineStore } from 'pinia';

interface Article {
    id: string,
    createdAt: string,
    description: string,
    image: string,
    preview: string,
    title: string
}
type Dictionary = {
    [key: `${number}`]: Article
}
interface State {
    articles: Article[],
    currentPage: number,
    articlesDictionary: Dictionary,
}

export const useArticlesStore = defineStore('articles', {
    state: (): State => ({
        articles: [],
        currentPage: 0,
        articlesDictionary: {},
    }),
    getters: {
        articlesList(): Article[] {
            return this.articles;
        },
        articlesAreLoaded(): boolean {
            return this.articles.length > 0;
        },
        chosenArticles(): Article[] {
            const maxArticlesToShow: number = 8;
            const startElToChoose: number = maxArticlesToShow * this.currentPage;
            const finishElToChoose: number = startElToChoose + maxArticlesToShow;

            return this.articles.slice(startElToChoose, finishElToChoose);
        },
        maxArticlesPage(): number {
            const maxArticlesToShow: number = 8;
            const articlesNum: number = this.articles.length;
            const result = Math.ceil(articlesNum / maxArticlesToShow) - 1;

            return result;
        },
    },
    actions: {
        async loadArticles(): Promise<void> {
            if (this.articles.length > 0) return;

            try {
                const href = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/';
                const result = await $fetch<Article[]>(href);
                this.articles = result;
            } catch (error) {
                console.error('Ошибка при загрузке статей:', error);
            }
        },
        increaseCurrentPage(): void {
            this.currentPage = this.currentPage + 1;
        },
        decreaseCurrentPage(): void {
            this.currentPage = this.currentPage - 1;
        },
        chooseCurrentPage(value: number): void {
            this.currentPage = value;
        },
        articleById(id: number): Article | null {
            return this.articlesDictionary[`${id}`] ?? null;
        },
        async loadArticleById(id: number): Promise<void> {
            const stringID = `${id}`;

            if (stringID in this.articlesDictionary) return;

            try {
                const href = `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${stringID}`;
                const result = await $fetch<Article>(href);
                this.articlesDictionary[`${id}`] = result;
            } catch (error) {
                console.error('Ошибка при загрузке статьи по id:', error);
            }
        },
        showData() {
            console.log('список статей полный', this.articles);
            console.log('список статей, которые отображаются', this.chosenArticles);
            console.log('максимальная страница группы статей', this.maxArticlesPage);
        }
    },
});