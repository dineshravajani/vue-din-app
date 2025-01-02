<template>
    <div class="post-detail">
        <div v-if="isLoading" class="loading">Loading...</div>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        <div v-if="!isLoading" class="content">
            <h2 class="title">{{ articleDetail.title.rendered }}</h2>
            <img v-if="featuredImage" :src="featuredImage" alt="Featured Image" class="featured-image" />
            <div v-html="articleDetail.content.rendered" class="article-content"></div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive, toRefs, defineProps } from 'vue';
    export default {
        name:"ArticleDetail",
        props:{
            articleID:{
                required:true
            }
        },
        setup() {
            
            const data = reactive({
                articleDetail:{},
                featuredImage:'',
                articleID:0,
                isLoading:true,
                errorMessage:''
            })
            
            onMounted( () => {
                
                const route = useRoute()
                data.articleID = route.params.articleID
                fetchPostDetail(data.articleID)
            })

            const fetchPostDetail = async(articleID) => {
                try {
                    const response = await fetch(`https://cventiuno.4you2test.com/wp-json/wp/v2/posts/${articleID}?_embed`);

                    if(! response.ok ) {
                        errorMessage.value = `HTTP error: ${response.status}`    
                    } else {
                        const posts = await response.json();
                        data.articleDetail = posts;
                        
                        // Extract the featured image
                        
                        if (posts._embedded && posts._embedded['wp:featuredmedia']) {
                            data.featuredImage = posts._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
                        }
                    }
                    
                } catch (error) {
                    data.errorMessage = `Failed to fetch posts: ${error.message}`
                } finally {
                    data.isLoading = false
                }
            }
            return {
                ...toRefs(data),
                
            }
            
        }
    }
</script>

<style scoped>
.post-detail {
    font-family: 'Arial', sans-serif;
    margin: 20px auto;
    max-width: 800px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
}

.loading {
    text-align: center;
    font-size: 18px;
    color: #888;
    margin: 20px 0;
}

.error {
    text-align: center;
    font-size: 16px;
    color: #d9534f;
    margin: 20px 0;
}

.content {
    text-align: left;
}

.title {
    font-size: 24px;
    color: #333;
    margin-bottom: 15px;
}

.featured-image {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 15px 0;
}

.article-content {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
}

.article-content p {
    margin-bottom: 15px;
}

.article-content img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

@media (max-width: 768px) {
    .post-detail {
        padding: 15px;
    }

    .title {
        font-size: 20px;
    }

    .article-content {
        font-size: 14px;
    }
}
</style>