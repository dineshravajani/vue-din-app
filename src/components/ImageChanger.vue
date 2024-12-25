<template>
    <div class="image-changer-container">
        <h1>Image Changer</h1>
        <img :src="imageList[imageIndex]" />
        <br>
        <button @click="previousImage">Previous</button>
        <button @click="nextImage">Next</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                imageIndex:0,
                imageList:[
                    "https://i.imgur.com/CzXTtJV.jpg",
                    "https://i.imgur.com/OB0y6MR.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                    "https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg"
                ]
            }
        },
        methods: {
            previousImage () {
                this.imageIndex = (this.imageIndex - 1 + this.getTotalImages) % this.getTotalImages;
            },
            nextImage () {
                this.imageIndex = (this.imageIndex + 1) % this.getTotalImages;
            }
        },
        computed:{
            getTotalImages() {
                return this.imageList.length;
            }
        }
    }
</script>

<style scoped>
.image-changer-container {
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 0 auto;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
}

img {
    border-radius: 8px;
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

button:focus {
    outline: none;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

@media (max-width: 600px) {
    .image-changer-container {
        width: 90%;
    }

    h1 {
        font-size: 20px;
    }

    button {
        font-size: 14px;
    }
}
</style>
