<template>
  <div
    class="text-gray-600 transition-colors duration-200 bg-gray-200  dark:bg-gray-800 dark:text-gray-300 "
  >
    <div>
      <div class="max-w-5xl p-4 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div
            class="flex flex-col items-center justify-center text-center  md:text-left "
          >
            <h1
              class="w-4/5 mx-auto text-4xl font-semibold leading-none tracking-tighter text-center text-gray-600  dark:text-gray-400 md:w-full md:text-left sm:w-1/2 sm:text-4xl title-font "
            >
              Create and share episode
              <span class="text-red-500">playlists</span>
            </h1>
            <div class="max-w-md px-6 mt-4 leading-5 md:px-0">
              Find playlists of episodes of your favorite TV Shows based on
              mood, theme, character or just about anything.

              <div></div>
            </div>
          </div>
          <div class="p-6">
            <img
              src="couchsurfer.svg"
              alt=""
              class="mx-auto max-h-36 md:max-h-96"
            />
          </div>
          <div class="flex flex-col items-center justify-center space-y-2">
            <div
              class="max-w-md p-2 px-4 text-red-500 transition border border-red-500 rounded cursor-pointer  hover:bg-red-500 hover:text-gray-200 dark:text-red-300 dark:border-red-300 dark:hover:text-red-200 "
            >
              <NuxtLink to="/cxsdsdsd">
                <div class="font-bold">Pranking Is Fun</div>
                <div class="text-xs">
                  8 Episodes from Brooklyn Nine Nine, Parks and Recreations and
                  The Office
                </div>
              </NuxtLink>
            </div>

            <div
              class="max-w-md p-2 px-4 text-red-500 transition border border-red-500 rounded cursor-pointer  hover:bg-red-500 hover:text-gray-200 "
            >
              <div class="font-bold">Pranking Is Fun</div>
              <div class="text-xs">
                8 Episodes from Brooklyn Nine Nine, Parks and Recreations and
                The Office
              </div>
            </div>

            <div
              class="max-w-md p-2 px-4 text-red-500 transition border border-red-500 rounded cursor-pointer  hover:bg-red-500 hover:text-gray-200 "
            >
              <div class="font-bold">Pranking Is Fun</div>
              <div class="text-xs">
                8 Episodes from Brooklyn Nine Nine, Parks and Recreations and
                The Office
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12">
      <button @click="showToast">Toast</button>
    </div>

    <div class="p-4">
      <!-- Trending -->
      <div class="max-w-5xl mx-auto">
        <SectionHeader title="trending" highlighted="lists" icon="poll" />

        <div class="grid gap-2 pt-4 pb-2 lg:grid-cols-3 sm:grid-cols-2">
          <BaseCardWithList />
          <BaseCardWithList />
          <BaseCardWithList />
        </div>
      </div>

      <!-- Popular -->
      <div class="max-w-5xl mx-auto">
        <SectionHeader title="popular" highlighted="lists" icon="thumbs-up" />

        <div class="grid gap-2 pt-4 pb-2 lg:grid-cols-3 sm:grid-cols-2">
          <BaseCardWithList />
          <BaseCardWithList />
          <BaseCardWithList />
        </div>
      </div>

      <ComponentsPlaygroundNew />
    </div>

    <BaseModal :isActive="false">
      <template #header>
        <section class="text-blueGray-700">
          <div class="container items-center px-5 py-12 lg:px-20">
            <div
              class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg  md:mt-0 "
            >
              <div class="mt-8">
                <div class="mt-6">
                  <form action="#" method="POST" class="space-y-6">
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-black"
                      >
                        Email address
                      </label>
                      <div class="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required=""
                          placeholder="Your Email"
                          class="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                        />
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="password"
                        class="block text-sm font-medium text-black"
                      >
                        Password
                      </label>
                      <div class="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autocomplete="current-password"
                          required=""
                          placeholder="Your Password"
                          class="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                        />
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          class="w-4 h-4 text-blue-400 border-gray-200 rounded  focus:ring-blue-500 "
                        />
                        <label
                          for="remember-me"
                          class="block ml-2 text-sm text-black"
                        >
                          Remember me
                        </label>
                      </div>
                      <div class="text-sm">
                        <a
                          href="#"
                          class="font-medium text-blue-400 hover:text-blue-500"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400  rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <div class="relative my-4">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 text-black bg-white">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="
                        w-full
                        items-center
                        block
                        px-10
                        py-3.5
                        text-base
                        font-medium
                        text-center text-blue-400
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border-2 border-white
                        shadow-md
                        rounded-xl
                        focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                      "
                    >
                      <div class="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="w-6 h-6"
                          viewBox="0 0 48 48"
                        >
                          <defs>
                            <path
                              id="a"
                              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            ></path>
                          </defs>
                          <clipPath id="b">
                            <use xlink:href="#a" overflow="visible"></use>
                          </clipPath>
                          <path
                            clip-path="url(#b)"
                            fill="#FBBC05"
                            d="M0 37V11l17 13z"
                          ></path>
                          <path
                            clip-path="url(#b)"
                            fill="#EA4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                          ></path>
                          <path
                            clip-path="url(#b)"
                            fill="#34A853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                          ></path>
                          <path
                            clip-path="url(#b)"
                            fill="#4285F4"
                            d="M48 48L17 24l-4-3 35-10z"
                          ></path>
                        </svg>
                        <span class="ml-4"> Log in with Google</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </BaseModal>
  </div>
</template>

<script>
import tmdb from "assets/js/useTmdbApi";
import { ref, onMounted, useContext } from "@nuxtjs/composition-api";
import store from "~/store";
import SearchBar from "~/components/SearchBar.vue";
import ShowSearchResults from "~/components/ShowSearchResults.vue";
import BaseModal from "~/components/BaseModal.vue";
import SortableTableTransitions from "~/components/SortableTableTransitions.vue";
import ListPublisher from "~/components/ListPublisher.vue";
import ProfileDropdown from "~/components/ProfileDropdown.vue";
import ComponentsPlayground from "../../episodez-nuxt/components/ComponentsPlayground.vue";
import AppCommentItem from "~/components/AppCommentItem.vue";

export default {
  head: {
    script: [
      {
        src: "https://kit.fontawesome.com/34356f09a5.js",
        defer: true,
      },
    ],
  },
  components: {
    SearchBar,
    ShowSearchResults,
    BaseModal,
    SortableTableTransitions,
    ListPublisher,
    ProfileDropdown,
    ComponentsPlayground,
    AppCommentItem,
  },
  setup(props, { emit }) {
    const { $fire } = useContext();
    const { $toast } = useContext();
    // const modalItem = ref();
    // const modalIsActive = ref(false);
    // const modalSeasonNumber = ref(0);

    // const newList = ref([]);
    // const searchResults = ref([]);

    onMounted(async () => {
      // let res = await readFromFirestore("lists");
      // console.log("res", res, res.length);
    });

    const showToast = () => {
      $toast
        .show('<p class="text-white">Successfully toasted! </p>', {
          position: "top-center",
          keepOnHover: true,
          iconPack: "fontawesome",
          icon: {
            name: "check",
            after: false, // this will append the icon to the end of content
          },
        })
        .goAway(40000);
    };

    const readFromFirestore = async (collectionName) => {
      const lists = $fire.firestore.collection(collectionName);
      const items = [];
      try {
        const docs = await lists.get();
        docs.forEach((doc) => {
          items.push(doc.data());
          // console.log("doc", doc.data());
        });
        return JSON.stringify(items);
      } catch (error) {
        console.log("error", error);
        readFromFirestoreMsg.value = error.message;
        return;
      }
    };

    // const doSearch = async (val) => {
    //   // console.log("val", val);
    //   try {
    //     let results = await tmdb.search(val);
    //     searchResults.value = results.results;
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // };

    // const clickHandler = async (e) => {
    //   modalItem.value = await tmdb.getFormattedShowDetails(e.id, 1);
    //   modalIsActive.value = !modalIsActive.value;
    //   // console.log("modalItem", modalItem.value);
    // };

    const getSeason = async (seasonNumber) => {
      // console.log("seasonNumber", seasonNumber, modalItem.value);

      let res = await tmdb.getEpisodes(modalItem.value.id, seasonNumber);

      if (seasonNumber && seasonNumber > 0) {
        modalSeasonNumber.value = seasonNumber - 1;
      } else {
        modalSeasonNumber.value = seasonNumber;
      }
      modalItem.value.seasons[modalSeasonNumber.value].episodes = res.episodes;
      // modalItem.seasons[modalSeasonNumber]
      console.log("res", modalItem.value.seasons[modalSeasonNumber.value]);
    };

    const checkIfAlreadyInList = (val) => {
      // console.log("checkIfAlreadyInList", val);
      let found = false;

      for (const key in newList.value) {
        // console.log('item', item);
        if (newList.value[key].id == val) {
          found = true;
        }
      }

      return found;
    };

    return {
      tmdb,
      // doSearch,
      // clickHandler,
      // modalItem,
      // modalIsActive,
      // addToList,
      // newList,
      // searchResults,
      getSeason,
      // removeFromList,
      checkIfAlreadyInList,
      showToast,
      // modalSeasonNumber,
    };
  },
};
</script>

<style>
.toasted .primary,
.toasted.toasted-primary {
  border-radius: 2px;
  min-height: 38px;
  line-height: 1.1em;
  background-color: #f43f5e;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 300;
  color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
}
</style>