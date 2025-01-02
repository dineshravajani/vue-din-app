<template>
    <div class="article-list">
        <h1 class="page-title">Articles</h1>
        <input type="text" v-model.trim="searchQuery" placeholder="Search Articles" class="search-box" @input="searchPost"/>
        <p v-if="searchQuery.length > 0">Search term: {{ searchQuery }}</p>
        <div v-if="isLoading && currentPage == 1" class="loading">Loading...</div>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        <ul v-else class="article-grid">
            <ArticleCard v-for="post in postsData" :key="post.id" :article="post"/>
            
        </ul>
        <div v-if="isLoading && currentPage > 1" class="loading">Loading...</div>
        <button v-if="!isLoading && hasMore" class="load-more" @click="loadMore">Load More</button>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import ArticleCard from './ArticleCard.vue';

    export default {
        name:"Articles",
        components:{
            ArticleCard,
        },
        
        setup() {
              // Reactive references
            const postsData = ref([]);
            const isLoading = ref(true);
            const errorMessage = ref('');
            const currentPage = ref(1);
            const perPage = ref(9);
            const hasMore = ref(true);
            const searchQuery = ref('');
            onMounted( () => {
                fetchPosts()
            })

            const fetchPosts = async() => {
                try {
                    const response = await fetch(`https://cventiuno.4you2test.com/wp-json/wp/v2/posts?search=${searchQuery.value}&per_page=${perPage.value}&page=${currentPage.value}`);

                    if(! response.ok ) {
                        errorMessage.value = `HTTP error: ${response.status}`    
                    } else {
                        const posts = await response.json();
                        postsData.value.push(...posts);
                        currentPage.value++
                        
                        if( posts.length < perPage.value ) {
                            hasMore.value = false;
                        }
                    }
                    
                } catch (error) {
                    errorMessage.value = `Failed to fetch posts: ${error.message}`
                } finally {
                    isLoading.value = false
                }
            }
            function loadMore() {
                isLoading.value = true;
                fetchPosts();
            }
            function searchPost() {
                console.log('Length',searchQuery.value.length)
                if(searchQuery.value.length >=3 || searchQuery.value.length == 0) {
                    isLoading.value = true;
                    postsData.value = [];
                    currentPage.value = 1;
                    fetchPosts();
                }
            }
            return {
                postsData,
                isLoading,
                errorMessage,
                hasMore,
                currentPage,
                loadMore,
                searchQuery,
                searchPost
            }
        }
    }
</script>

<style scoped>
.search-box {
  padding: 10px;
  width: auto%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.article-list {
    font-family: 'Arial', sans-serif;
    margin: 20px auto;
    max-width: 1200px;
    padding: 20px;
}

.page-title {
    font-size: 28px;
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.loading {
    text-align: center;
    font-size: 18px;
    color: #888;
}

.error {
    text-align: center;
    font-size: 16px;
    color: #d9534f;
}

.article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.article-item {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.article-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}


/* Reuse styles from previous code */
.load-more {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin: 20px auto;
    display: block;
}

.load-more:hover {
    background-color: #0056b3;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 24px;
    }

    .article-item {
        padding: 15px;
    }

    .article-title {
        font-size: 18px;
    }

    .article-excerpt {
        font-size: 13px;
    }
}
</style>