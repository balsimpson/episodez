<template>
  <div class="flex-col w-full bg-gray-500 md:flex md:flex-row md:min-h-screen">
    <div
      class="flex flex-col flex-shrink-0 w-full text-gray-700 bg-white shadow-xl md:w-64 "
    >
      <!-- <div class="flex flex-col items-center flex-shrink-0 bg-blueGray-50">
          <button class="p-1 m-2 ml-auto transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M10 10l4 4m0 -4l-4 4"></path>
            </svg>
          </button>
        </div> -->
      <div class="flex flex-col items-center flex-shrink-0 py-4">
        <a href="/" class="w-full px-8 focus:outline-none">
          <div class="inline-flex items-center">
            <div
              class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 "
            ></div>
            <h2
              class="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8 "
            >
              nuxt template
            </h2>
          </div>
        </a>
      </div>
      <nav class="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
        <ul>
          <li>
            <a
              class="inline-flex items-center px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-l-4 border-blue-600 text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600 "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-credit-card"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                <line x1="11" y1="15" x2="13" y2="15"></line>
              </svg>
              <span class="ml-4"> Items</span>
            </a>
          </li>
          <li>
            <a
              class="inline-flex items-center px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-l-4 border-white text-blueGray-500 hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600 "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-inbox"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <path d="M4 13h3l3 3h4l3 -3h3"></path>
              </svg>
              <span class="ml-4">Inbox</span>
            </a>
          </li>
          <li>
            <a
              class="inline-flex items-center px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-l-4 border-white text-blueGray-500 hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600 "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-artboard"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                <line x1="3" y1="8" x2="4" y2="8"></line>
                <line x1="3" y1="16" x2="4" y2="16"></line>
                <line x1="8" y1="3" x2="8" y2="4"></line>
                <line x1="16" y1="3" x2="16" y2="4"></line>
                <line x1="20" y1="8" x2="21" y2="8"></line>
                <line x1="20" y1="16" x2="21" y2="16"></line>
                <line x1="8" y1="20" x2="8" y2="21"></line>
                <line x1="16" y1="20" x2="16" y2="21"></line>
              </svg>
              <span class="ml-4">Services</span>
            </a>
          </li>
          <li>
            <a
              class="inline-flex items-center px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-l-4 border-white text-blueGray-500 hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600 "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-users"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
              </svg>
              <span class="ml-4">Users</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="flex items-center w-full p-4 rounded-lg">
        <img
          src="https://dummyimage.com/302x302/F3F4F7/8693ac"
          alt="user name"
          class="object-cover w-10 h-10 mr-4 border border-white border-solid rounded-full "
        />
        <div>
          <h2 class="text-sm font-medium text-gray-400">{{ email }}</h2>

          <button
            @click="signOut"
            class="inline-block px-2 py-1 text-xs text-blue-400 uppercase bg-transparent border border-blue-400 rounded-lg "
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>

    <div class="w-full h-screen p-4 bg-gray-200">
      <div class="flex justify-between p-4">
        <div>Items</div>
        <div>add item</div>
      </div>

      <div class="max-w-xl p-4 py-8 bg-white rounded">
        <div class="relative mb-8">
          <input
            v-model="itemName"
            type="text"
            id="itemName"
            name="itemName"
            class="w-full text-base leading-8 text-gray-700 placeholder-transparent transition-colors duration-200 ease-in-out bg-white border-b border-gray-300 outline-none peer focus:ring-0 "
            placeholder="item name"
          />
          <label
            for="itemName"
            class="absolute left-0 text-sm text-gray-600 transition-all -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 "
            >Item name</label
          >
        </div>

        <div class="flex justify-between">
          <div class="relative mb-4">
            <input
              v-model="itemPrice"
              type="number"
              id="itemPrice"
              name="itemPrice"
              class="w-full text-base leading-8 text-gray-700 placeholder-transparent transition-colors duration-200 ease-in-out bg-white border-b border-gray-300 outline-none peer focus:ring-0 "
              placeholder="item price"
            />
            <label
              for="itemName"
              class="absolute left-0 text-sm text-gray-600 transition-all -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 "
              >Item price</label
            >
          </div>

          <!-- Category -->
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Choose category
                <!-- Heroicon name: solid/chevron-down -->
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
            <div
              class="absolute right-0 hidden w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Account settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Support</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >License</a
                >
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    class="block w-full px-4 py-2 text-sm text-left text-gray-700 "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-2 mt-12 border-t border-gray-200">
          <button
          @click="addItem"
          class="px-3 py-1 mt-4 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600 "
        >
          Add Item
        </button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  useStore,
  useContext,
  watchEffect,
} from "@nuxtjs/composition-api";
export default {
  setup() {
    const store = useStore();

    const email = ref("");
    const itemName = ref("");
    const itemPrice = ref("");

    const signOut = () => {
      store.dispatch("signOut");
    };

    const addItem = () => {
      console.log('add item');  
    } 

    watchEffect(() => {
      let user = store.getters.getUser;
      email.value = user.email || "";
    });

    return { email, signOut, addItem, itemName, itemPrice };
  },
};
</script>

<style>
</style>