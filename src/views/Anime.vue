<script>
export default {
  name: "anime",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    setImages(data) {
      this.images = data;
    },
    getImages() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        exclude: [],
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`https://api.waifu.pics/many/sfw/blush`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // console.log(result.files);
          this.setImages(result.files);
        })
        .catch((error) => console.log("error", error));
    },

    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  beforeMount() {
    this.getImages();
  },
  mounted() {
    this.getImages();
  },
};
</script>

<template>
  <div class="anime">
    <div class="btn-container">
      <button @click="getImages" class="generate-btn">
        <i class="bi bi-arrow-clockwise"></i>
      </button>
    </div>

    <ul class="waifu-list">
      <li v-for="image in images">
        <img :src="image" alt="waifu-pics" class="waifu-pics" />
      </li>
    </ul>

    <div class="btn-container">
      <button @click="toTop" class="generate-btn">
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<style>
.bi {
  font-size: 2rem;
}
.anime {
  display: flex;
  padding: 25px;
  box-sizing: border-box;
  flex-direction: column;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
}
.generate-btn {
  background: #fcca46;
  color: #000;
  margin: 5px 0;
  padding: 0px 12px 8px 12px;
  border-radius: 99px;
}
.waifu-list {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  padding: 0 25px;
  gap: 15px;
  list-style: none;
}
.waifu-pics {
  width: 250px;
}

@media only screen and (max-width: 1024px) {
  .waifu-list {
    grid-template-columns: repeat(3, 1fr);
  }
  .waifu-pics {
    width: 140px;
  }
}

@media only screen and (max-width: 768px) {
  .bi {
    font-size: 1.6rem;
  }
  .waifu-list {
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
  .waifu-pics {
    width: 120px;
  }
  .generate-btn {
    padding: 0px 8px 4px 8px;
  }
}
</style>
