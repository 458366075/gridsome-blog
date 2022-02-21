<template>
  <Layout>
    <!-- Page Header-->
    <Header>
      <div class="site-heading">
        <h1>Clean Blog</h1>
        <span class="subheading">A Blog Theme by Start Bootstrap</span>
      </div>
    </Header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div v-for="(post, index) in $page.posts.edges" :key="post.id">
                <!-- Post preview-->
                <div class="post-preview" >
                    <g-link :to="'/post/' + post.node.id">
                        <h2 class="post-title">{{ post.node.title }}</h2>
                        <h3 class="post-subtitle">{{ post.node.describe }}</h3>
                    </g-link>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">Start Bootstrap</a>
                        on {{ post.node.releaseDate }}
                    </p>
                </div>
                <span v-for="tag in post.node.tags.data" :key="tag.id">
                  <a href="">{{tag.attributes.name}} </a>
                </span>
                <!-- Divider-->
                <hr class="my-4" v-if="$page.posts.edges.length - 1 !== index"/>
              </div>
            </div>
        </div>
    </div>
  </Layout>
</template>

<page-query>
query {
	posts: allPosts {
    edges {
      node {
        id
        title
        releaseDate
        describe
        tags {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  mounted() {
    console.log(this.$page);
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
