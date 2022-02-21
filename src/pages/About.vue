<template>
  <Layout>
    <!-- Page Header-->
    <Header :img="GRIDSOME_API_URL + about.image.data.attributes.url">
      <div class="page-heading">
          <h1>{{about.title}}</h1>
          <span class="subheading">{{about.subTitle}}</span>
      </div>
    </Header>
    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7" v-html="about.body">
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
  },
  mounted() {
    this.about = this.$page.about.edges[0].node
  }
}
</script>
