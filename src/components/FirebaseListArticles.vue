<template>
    <div class="article-container">
        <h1>Firebase - List Articles</h1>
            <div v-for="article in notes" :key="article.id">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>

                <router-link :to="`/firebase/update-article/${article.id}`">Update Info</router-link>
                <hr/>
            </div>
            
    </div>
</template>

<script setup>
    import { DB } from '@/firebase/config';
    import { collection, getDocs } from 'firebase/firestore';
    import { ref } from 'vue';

    const notes = ref([]);

    const notesCollection = collection(DB,'notes');

    getDocs(notesCollection)
    .then(snapshot => {
        let documents = [];

        snapshot.docs.forEach( doc => {
            documents.push({...doc.data(), id:doc.id})
        })
        notes.value = documents;
        console.log(notes);
    })

</script>

<style scoped>

</style>