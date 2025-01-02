<template>
    <li :key="article.id">
        <h3 class="article-title">{{ article.title.rendered }}</h3>
        <p v-html="article.excerpt.rendered" class="article-excerpt"></p>
        <p><router-link :to="'/article/'+article.id" class="read-more">Read More</router-link></p>
    </li>
</template>

<script>
    export default {
        name:"ArticleCard",
        props:{
            article:{
                required:true,
                type:Object
            }
        }
    }
</script>

<style scoped>
.article-title {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

.article-excerpt {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
}

.read-more {
    font-size: 14px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.read-more:hover {
    text-decoration: underline;
}

</style>