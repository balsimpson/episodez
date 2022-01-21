<template>
  <div class="min-h-screen dark:bg-gray-700">
    <div class="max-w-3xl p-4 mx-auto">
      <h2
        class="mt-8 mb-2 text-xs font-semibold tracking-widest text-center text-gray-500 uppercase title-font "
      >
        create a new playlist
      </h2>
      <h1
        class="w-4/5 mx-auto mb-12 text-xl font-semibold leading-none tracking-tighter text-center text-gray-600 dark:text-gray-400 sm:w-1/2 title-font "
      >
        A Long headline to switch your visitors into users.
      </h1>

      <SearchBar @query="doSearch" placeholder="Try 'The Office'" />

      <YoutubeEmbed />
      <YoutubeEmbed />
      <YoutubeEmbed />
      <YoutubeEmbed />
      <YoutubeEmbed />
      <YoutubeEmbed />
      

      <ShowSearchResults
        v-if="searchResults"
        :results="searchResults"
        :queryString="queryString"
        @clicked="clickHandler"
      />

      <ListPublisher v-if="newList.length" :items="newList" />

      <div v-if="newList.length">
        <SortableTableTransitions @dragEnd="tableSorted">
          <template #list>
            <li
              class="flex justify-between p-3 pt-5 my-2 text-gray-700 bg-white border border-gray-300 rounded dark:border-gray-600 dark:text-gray-400 dark:bg-gray-600 "
              v-for="(item, index) in newList"
              :key="item.id"
            >
              <div class="flex w-full">
                <!-- <div class="w-6 h-6 text-center border rounded-full">
                  {{ index + 1 }}
                </div> -->
                <div>
                  <div class="flex flex-col sm:flex-row">
                    <div class="w-full pl-2 sm:w-1/4">
                      <img
                        :src="tmdb.getImageURL(item.still_path, 'w500')"
                        alt=""
                        class="object-cover w-full border rounded shadow-lg max-h-36 dark:border-gray-600 "
                      />
                    </div>
                    <div class="px-4 pt-2 text-left sm:pt-0 sm:w-3/4">
                      <!-- <div class="flex justify-between pb-1"> -->
                      <div class="text-xl font-bold leading-none">
                        {{ item.name }}
                      </div>
                      <div
                        class="text-sm font-bold text-red-600 dark:text-red-400"
                      >
                        {{ item.show_name }}
                        <span
                          class="px-1 ml-1 text-xs border border-red-500 rounded-full "
                        >
                          <span class="font-bold text-gray-500">S</span
                          ><span class="font-bold text-gray-500">{{
                            item.season_number
                          }}</span
                          ><span class="font-bold text-gray-500">E</span
                          ><span class="font-bold text-gray-500">{{
                            item.episode_number
                          }}</span>
                        </span>
                      </div>
                      <!-- </div> -->
                      <div class="pt-2 text-sm">{{ item.overview }}</div>
                      <!-- <div class="pt-2 text-xs">{{ item }}</div> -->
                    </div>
                  </div>
                  <div class="pt-2 pl-2 pr-4">
                    <textarea
                      rows="2"
                      class="input-comment"
                      placeholder="add a comment"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="flex flex-col justify-between text-gray-400">
                <div @click="removeFromList(item.id)" class="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div class="cursor-move handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
            </li>
          </template>
        </SortableTableTransitions>
      </div>

      <div v-else class="flex items-center justify-center min-h-[300px]">
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto text-gray-400 w-9 h-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <div class="mt-4">
            <h2
              class="mb-8 text-xs font-semibold tracking-widest text-gray-800 uppercase dark:text-gray-300 title-font "
            >
              Your list is empty
            </h2>
            <div class="text-sm text-gray-400 dark:text-gray-500">
              To add an episode to the list, use the search bar <br />to find a
              TV Show
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- function to group objects in an array -->
    

    <!-- <AppModal /> -->

    <BaseModal @clicked="showLogin = !showLogin" :isActive="!isLoggedIn">
      <template #header>
        <LoginForm @signedIn="showLogin = !showLogin" />
      </template>
    </BaseModal>

    <BaseModal @clicked="showShare = !showShare" :isActive="showShare">
      <template #header>
        <ShareForm />
      </template>
    </BaseModal>

    <BaseModal
      @clicked="modalIsActive = !modalIsActive"
      :item="modalItem"
      :isActive="modalIsActive"
    >
      <template #header>
        <div class="flex flex-col w-full mt-6 sm:flex-row dark:text-gray-400">
          <div class="px-2 pt-2 sm:w-1/4">
            <img
              :src="
                tmdb.getImageURL(
                  modalItem.seasons[modalSeasonNumber].poster_path,
                  'w500'
                )
              "
              alt=""
              class="border rounded shadow-lg dark:border-gray-700 max-h-72"
            />
          </div>
          <div class="w-full px-2 text-left sm:w-3/4">
            <div class="text-3xl font-bold">{{ modalItem.name }}</div>
            <div class="mt-2 mb-4 text-base leading-tight">
              {{ modalItem.seasons[modalSeasonNumber].overview }}
            </div>
            <BaseDropdown
              @selected="getSeason"
              :btnText="modalItem.seasons[modalSeasonNumber].name"
              :options="modalItem.seasons"
            />

            <!-- {{ modalSeasonNumber }} -->
          </div>
        </div>

        <!-- <div class="overflow-y-auto text-xl font-bold text-left h-44">
          {{ modalItem.seasons[modalSeasonNumber] }}
        </div> -->

        <div
          class="
            mt-6
            space-y-2
            overflow-scroll
            max-h-[400px]
            divide-y divide-gray-200
            dark:divide-gray-600
          "
        >
          <div
            v-for="item in modalItem.seasons[modalSeasonNumber].episodes"
            class="px-2 py-4"
          >
            <div class="flex flex-col w-full sm:flex-row dark:text-gray-400">
              <div class="w-full sm:w-1/4">
                <img
                  :src="tmdb.getImageURL(item.still_path, 'w300')"
                  alt=""
                  class="object-cover w-full border rounded shadow-lg dark:border-gray-700 max-h-24 "
                />
              </div>
              <div
                class="px-2 pt-2 text-left divide-y dark:divide-gray-600 sm:pt-0 sm:w-3/4 "
              >
                <div class="flex items-end justify-between pb-1">
                  <div class="flex items-end text-2xl font-bold leading-none">
                    <span
                      class="px-1 mr-3 text-xs border border-red-500 rounded-full "
                    >
                      <span class="font-bold text-gray-500">S</span
                      ><span class="font-bold text-gray-500">{{
                        item.season_number
                      }}</span
                      ><span class="font-bold text-gray-500">E</span
                      ><span class="font-bold text-gray-500">{{
                        item.episode_number
                      }}</span> </span
                    ><span>{{ item.name }}</span>
                  </div>
                  <div v-if="!checkIfAlreadyInList(item.id)">
                    <div
                      @click="addToList(item)"
                      class="h-6 px-2 py-1 text-xs text-white uppercase bg-black rounded cursor-pointer whitespace-nowrap "
                    >
                      Add to list
                    </div>
                  </div>
                  <div v-else class="flex-shrink-0">
                    <div
                      @click="removeFromList(item.id)"
                      class="h-6 px-2 py-1 text-xs text-white uppercase bg-black rounded cursor-pointer min-w-24 "
                    >
                      remove from list
                    </div>
                  </div>
                </div>
                <div class="pt-2 text-sm">{{ item.overview }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script>
import tmdb from "assets/js/useTmdbApi";
import {
  ref,
  computed,
  watchEffect,
  onMounted,
  useContext,
  useStore,
} from "@nuxtjs/composition-api";
import YoutubeEmbed from '~/components/YoutubeEmbed.vue';
export default {
  components: { YoutubeEmbed },
  setup(props, { emit }) {
    const { $fire } = useContext();
    const store = useStore();

    const newList = ref([]);
    const searchResults = ref([]);
    const queryString = ref("");
    

    const modalItem = ref();
    const modalIsActive = ref(false);
    const isLoggedIn = ref();
    // const isLoggedIn = computed(() => {

    //   if ($fire.auth.currentUser) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    const showLogin = ref(false);
    const showShare = ref(false);
    const modalSeasonNumber = ref(0);

    const doSearch = async (val) => {
      // console.log("val", val);
      modalSeasonNumber.value = 0;
      try {
        let results = await tmdb.search(val);
        queryString.value = val;
        console.log("results", results);
        searchResults.value = results.results;
      } catch (error) {
        console.log("error", error);
      }
    };


    const addToList = (data) => {
      data.show_id = modalItem.value.id;
      data.show_name = modalItem.value.name;
      data.show_poster_path = modalItem.value.poster_path;
      newList.value.push(data);
      // console.log("data", newList.value);
    };

    const removeFromList = (val) => {
      // console.log('remove', val);

      newList.value = newList.value.filter((item) => {
        // console.log('item', item);

        if (item.id !== val) {
          return item;
        }
      });
      // console.log('res', res);
    };

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

    const tableSorted = (val) => {
      console.log("sorted", newList.value);
    };

    onMounted(() => {
      console.log("user", $fire.auth.currentUser);
    });

    watchEffect(() => {
      isLoggedIn.value = store.state.isLoggedIn;
      console.log("isLoggedIn", isLoggedIn.value);
    });

    const clickHandler = async (e) => {
      modalItem.value = await tmdb.getFormattedShowDetails(e.id, 1);
      modalIsActive.value = !modalIsActive.value;
      searchResults.value = [];
      // console.log("modalItem", modalItem.value);
    };

    return {
      tmdb,
      newList,
      searchResults,
      modalItem,
      modalIsActive,
      doSearch,
      queryString,
      getSeason,
      checkIfAlreadyInList,
      clickHandler,
      addToList,
      removeFromList,
      modalSeasonNumber,
      tableSorted,
      showLogin,
      showShare,
      isLoggedIn,
    };
  },
};
</script>

<style>
</style>