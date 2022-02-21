<template>
  <!-- Page Header-->
    <header class="masthead" :style="`background-image: url(${img})`">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <slot />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    img: {
      type: String,
      default: '/assets/img/about-bg.jpg'
    }
  }
}
</script>