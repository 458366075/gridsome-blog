<template>
  <Layout>
    <!-- Page Header-->
    <Header :img="GRIDSOME_API_URL + $page.about.edges[0].node.image.data.attributes.url">
      <div class="page-heading">
          <h1>{{$page.about.edges[0].node.title}}</h1>
          <span class="subheading">{{$page.about.edges[0].node.subTitle}}</span>
      </div>
    </Header>
    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7" v-html="$page.about.edges[0].node.body">
                </div>
            </div>
        </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  about: allAbout {
    edges {
      node {
        id
        title
        subTitle
        body
        image {
          data {
            attributes {
              url
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
    title: 'About us'
  },
  data() {
    return {
      about: {},
    }
  }
}
</script>
