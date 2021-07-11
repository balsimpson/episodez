<template>
  <div class="max-w-4xl mx-auto mt-12 text-brand-blue-500">
    <div class="grid grid-cols-3 divide-x">
      <article class="col-span-2 pr-4 leading-relaxed">
        <!-- <!-- <h1>{{ page.title }}</h1> -->
        <!-- <p>{{ page }}</p> -->
        <img
          class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 "
          :src="require(`~/assets/images/${article.img}`)"
        />
        <nuxt-content :document="article" />
      </article>

      <section class="overflow-hidden text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="text-2xl font-bold">Related</div>
          <div class="w-full h-1 bg-blue-500 rounded"></div>
          <div class="">
            <div class="flex flex-wrap pt- md:flex-nowrap">
              <div class="md:flex-grow">
                <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
                  Bitters hashtag waistcoat fashion axe chia unicorn
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a class="inline-flex items-center mt-1 text-blue-500"
                  >Read More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex flex-wrap pt-6 md:flex-nowrap">
              <div class="md:flex-grow">
                <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a class="inline-flex items-center mt-4 text-blue-500"
                  >Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex flex-wrap pt-6 md:flex-nowrap">
              <div class="md:flex-grow">
                <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a class="inline-flex items-center mt-4 text-blue-500"
                  >Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, useFetch, useContext } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { $content } = useContext();
    const { params } = useContext();

    const article = ref();

    useFetch(async () => {
      let res = await $content("blog", params.value.slug)
        .sortBy("createdAt", "desc")
        .fetch();

      article.value = res;
    });

    return { article };
  },
  
};
</script>

<style lang="postcss">
article {
  font-size: 1em;
  line-height: 1.4;
  word-wrap: break-word;

  &::before {
    display: table;
    content: '';
  }

  &::after {
    display: table;
    clear: both;
    content: '';
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .absent {
    color: 'blue';
  }

  .anchor {
    float: left;
    padding-right: 1em;
    margin-left: -20px;
    line-height: 1;

    &:focus {
      outline: none;
    }
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 2.4em;
  }

  hr {
    height: $em-spacer-3;
    padding: 0;
    margin: 1em 0;
    background-color: 'gray';
    border: 0;
  }

  blockquote {
    padding: 0 1em;
    color: 'blue';
    border-left: 0.25em;

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0.7em;
  /* margin-bottom: 0.5em; */
  font-weight: 600;

  .octicon-link {
    color: black;
    vertical-align: middle;
    visibility: hidden;
  }

  &:hover .anchor {
    text-decoration: none;

    .octicon-link {
      visibility: visible;
    }
  }

  tt,
  code {
    font-size: inherit;
  }
}

h1 {
  /* padding-bottom: 0.3em; */
  font-size: 2em;
}

h2 {
  padding-bottom: 0.3em;
  font-size: 1.5em;
}

h3 {
  font-size: 1.25em;
}

h4 {
  font-size: 1em;
}

h5 {
  font-size: 0.875em;
}

h6 {
  font-size: 0.85em;
  color: var(--color-text-tertiary);
}

p {
  margin-top: 0.4em;
  margin-bottom: 1em;
}

ul,
ol {
  padding-left: 2em;
  list-style: disc;
  line-height: 1.4;

  &.no-list {
    padding: 0;
    list-style-type: none;
  }
}

ol[type='1'] {
  list-style-type: decimal;
}

ol[type='a'] {
  list-style-type: lower-alpha;
}

ol[type='i'] {
  list-style-type: lower-roman;
}

div > ol:not([type]) {
  list-style-type: decimal;
}

ul ul,
ul ol,
ol ol,
ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

li > p {
  margin-top: 0.5em;
}

li + li {
  margin-top: 0.5em;
}

dl {
  padding: 0;

  dt {
    padding: 0;
    margin-top: 0.5em;
    font-size: 1em;
    font-style: italic;
    font-weight: $font-weight-bold;
  }

  dd {
    padding: 0 $spacer-3;
    margin-bottom: $spacer-3;
  }
}
</style>