<template>
  <Layout>
    <!-- Page Header-->
    <Header>
      <div class="post-heading">
          <h1>{{$page.posts.edges[0].node.title}}</h1>
          <h2 class="subheading">{{$page.posts.edges[0].node.describe}}</h2>
          <span class="meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on {{$page.posts.edges[0].node.releaseDate}}
          </span>
      </div>
    </Header>
    <!-- Post Content-->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7" v-html="$page.posts.edges[0].node.body"></div>
            </div>
        </div>
    </article>
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
  name: 'Post',
  metaInfo: {
    title: 'Post'
  },
}
</script>
