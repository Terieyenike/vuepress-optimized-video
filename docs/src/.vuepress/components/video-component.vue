<template>
  <div>
    <cld-video cloud-name="terieyenike" controls public-id="video-player/gushing-waterfall">
      <cld-transformation quality="70:qmax_20" />
      <cld-transformation width="500" crop="scale" />
      <cld-transformation fetch-fomat="auto" />
    </cld-video>
  </div>
</template>


<script>
import Cloudinary from 'cloudinary-vue'
import Vue from 'vue'

Vue.use(Cloudinary);

export default {
  data() {
    return {
      // publicId: 'video-player/water-gushing'
    }
  }
}
</script>

