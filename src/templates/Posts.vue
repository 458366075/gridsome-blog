<template>
  <Layout>
    <!-- Page Header-->
    <Header>
      <div class="post-heading">
          <h1>{{$page.post.title}}</h1>
          <h2 class="subheading">{{$page.post.describe}}</h2>
          <span class="meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on {{$page.post.releaseDate}}
          </span>
      </div>
    </Header>
    <!-- Post Content-->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7" v-html="$page.post.body"></div>
            </div>
        </div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: posts (id: $id) {
    title
    describe
    body
    releaseDate
  }
}
</page-query>

<script>
export default {
  name: 'Post',
  metaInfo: {
    title: 'Post'
  },
  mounted() {
    console.log(this.$page);
  }
}
</script>
