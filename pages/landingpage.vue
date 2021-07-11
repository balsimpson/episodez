<template>
  <div>
    <!-- top nav -->
    <header class="text-gray-600 body-font">
      <div
        class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row "
      >
        <a
          class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav
          class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto "
        >
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button
          class="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0 "
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- hero -->
    <section class="text-gray-600 body-font">
      <div
        class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row "
      >
        <div
          class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 "
        >
          <h1
            class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl "
          >
            Before they sold out <br class="hidden lg:inline-block" />readymade
            gluten
          </h1>
          <p class="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div class="flex justify-center">
            <button
              class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600 "
            >
              Button
            </button>
            <button
              class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 "
            >
              Button
            </button>
          </div>
        </div>
        <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>

    <!-- content 1 -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="w-full mb-6 lg:w-1/2 lg:mb-0">
            <h1
              class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font "
            >
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div class="w-20 h-1 bg-indigo-500 rounded"></div>
          </div>
          <p class="w-full leading-relaxed text-gray-500 lg:w-1/2">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 xl:w-1/4 md:w-1/2">
            <div class="p-6 bg-gray-100 rounded-lg">
              <img
                class="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/720x400"
                alt="content"
              />
              <h3
                class="text-xs font-medium tracking-widest text-indigo-500 title-font "
              >
                SUBTITLE
              </h3>
              <h2 class="mb-4 text-lg font-medium text-gray-900 title-font">
                Chichen Itza
              </h2>
              <p class="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2">
            <div class="p-6 bg-gray-100 rounded-lg">
              <img
                class="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/721x401"
                alt="content"
              />
              <h3
                class="text-xs font-medium tracking-widest text-indigo-500 title-font "
              >
                SUBTITLE
              </h3>
              <h2 class="mb-4 text-lg font-medium text-gray-900 title-font">
                Colosseum Roma
              </h2>
              <p class="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2">
            <div class="p-6 bg-gray-100 rounded-lg">
              <img
                class="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/722x402"
                alt="content"
              />
              <h3
                class="text-xs font-medium tracking-widest text-indigo-500 title-font "
              >
                SUBTITLE
              </h3>
              <h2 class="mb-4 text-lg font-medium text-gray-900 title-font">
                Great Pyramid of Giza
              </h2>
              <p class="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2">
            <div class="p-6 bg-gray-100 rounded-lg">
              <img
                class="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3
                class="text-xs font-medium tracking-widest text-indigo-500 title-font "
              >
                SUBTITLE
              </h3>
              <h2 class="mb-4 text-lg font-medium text-gray-900 title-font">
                San Francisco
              </h2>
              <p class="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- feature -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col w-full mb-20 text-center">
          <h2
            class="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font "
          >
            ROOF PARTY POLAROID
          </h2>
          <h1 class="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Master Cleanse Reliac Heirloom
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div class="flex items-center mb-3">
                <div
                  class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
              </div>
              <div class="flex-grow">
                <p class="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="inline-flex items-center mt-3 text-indigo-500"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div class="flex items-center mb-3">
                <div
                  class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h2>
              </div>
              <div class="flex-grow">
                <p class="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="inline-flex items-center mt-3 text-indigo-500"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div class="flex items-center mb-3">
                <div
                  class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path
                      d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium text-gray-900 title-font">
                  Neptune
                </h2>
              </div>
              <div class="flex-grow">
                <p class="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="inline-flex items-center mt-3 text-indigo-500"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- product grid -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/421x261"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                Shooting Stars
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/422x262"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                Neptune
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/423x263"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                The 400 Blows
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/424x264"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/425x265"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                Shooting Stars
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/427x267"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                Neptune
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="w-full p-4 lg:w-1/4 md:w-1/2">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://dummyimage.com/428x268"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">
                CATEGORY
              </h3>
              <h2 class="text-lg font-medium text-gray-900 title-font">
                The 400 Blows
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA dark -->
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div class="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h1 class="text-3xl font-medium text-white title-font">
            Slow-carb next level shoindxgoitch ethical authentic, poko scenester
          </h1>
          <p class="mt-4 leading-relaxed">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div
          class="flex flex-col w-full p-8 mt-10 bg-gray-800 bg-opacity-50 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0 "
        >
          <h2 class="mb-5 text-lg font-medium text-white title-font">
            Sign Up
          </h2>
          <div class="relative mb-4">
            <label for="full-name" class="text-sm leading-7 text-gray-400"
              >Full Name</label
            >
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 "
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="text-sm leading-7 text-gray-400"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 "
            />
          </div>
          <button
            class="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600 "
          >
            Button
          </button>
          <p class="mt-3 text-xs">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>

    <!-- blog 1 -->
    <section class="overflow-hidden text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-12">
          <div class="flex flex-col items-start p-12 md:w-1/2">
            <span
              class="inline-block px-2 py-1 text-xs font-medium tracking-widest text-indigo-500 rounded bg-indigo-50 "
              >CATEGORY</span
            >
            <h2
              class="mt-4 mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font "
            >
              Roof party normcore before they sold out, cornhole vape
            </h2>
            <p class="mb-8 leading-relaxed">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric. Cray pug you probably
              haven't heard of them hexagon kickstarter craft beer pork chic.
            </p>
            <div
              class="flex flex-wrap items-center w-full pb-4 mt-auto mb-4 border-b-2 border-gray-100 "
            >
              <a class="inline-flex items-center text-indigo-500"
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
              <span
                class="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200 "
              >
                <svg
                  class="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle></svg
                >1.2K
              </span>
              <span
                class="inline-flex items-center text-sm leading-none text-gray-400 "
              >
                <svg
                  class="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  ></path></svg
                >6
              </span>
            </div>
            <a class="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/104x104"
                class="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full "
              />
              <span class="flex flex-col flex-grow pl-4">
                <span class="font-medium text-gray-900 title-font"
                  >Holden Caulfield</span
                >
                <span class="text-gray-400 text-xs tracking-widest mt-0.5"
                  >UI DEVELOPER</span
                >
              </span>
            </a>
          </div>
          <div class="flex flex-col items-start p-12 md:w-1/2">
            <span
              class="inline-block px-2 py-1 text-xs font-medium tracking-widest text-indigo-500 rounded bg-indigo-50 "
              >CATEGORY</span
            >
            <h2
              class="mt-4 mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font "
            >
              Pinterest DIY dreamcatcher gentrify single-origin coffee
            </h2>
            <p class="mb-8 leading-relaxed">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric.
            </p>
            <div
              class="flex flex-wrap items-center w-full pb-4 mt-auto mb-4 border-b-2 border-gray-100 "
            >
              <a class="inline-flex items-center text-indigo-500"
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
              <span
                class="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200 "
              >
                <svg
                  class="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle></svg
                >1.2K
              </span>
              <span
                class="inline-flex items-center text-sm leading-none text-gray-400 "
              >
                <svg
                  class="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  ></path></svg
                >6
              </span>
            </div>
            <a class="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                class="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full "
              />
              <span class="flex flex-col flex-grow pl-4">
                <span class="font-medium text-gray-900 title-font"
                  >Alper Kamu</span
                >
                <span class="text-gray-400 text-xs tracking-widest mt-0.5"
                  >DESIGNER</span
                >
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- blog 2 -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -my-8">
          <div class="px-4 py-8 lg:w-1/3">
            <div class="flex items-start h-full">
              <div
                class="flex flex-col flex-shrink-0 w-12 leading-none text-center "
              >
                <span class="pb-2 mb-2 text-gray-500 border-b-2 border-gray-200"
                  >Jul</span
                >
                <span
                  class="text-lg font-medium leading-none text-gray-800 title-font "
                  >18</span
                >
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font "
                >
                  CATEGORY
                </h2>
                <h1 class="mb-3 text-xl font-medium text-gray-900 title-font">
                  The 400 Blows
                </h1>
                <p class="mb-5 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="flex-shrink-0 object-cover object-center w-8 h-8 rounded-full "
                  />
                  <span class="flex flex-col flex-grow pl-3">
                    <span class="font-medium text-gray-900 title-font"
                      >Alper Kamu</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="px-4 py-8 lg:w-1/3">
            <div class="flex items-start h-full">
              <div
                class="flex flex-col flex-shrink-0 w-12 leading-none text-center "
              >
                <span class="pb-2 mb-2 text-gray-500 border-b-2 border-gray-200"
                  >Jul</span
                >
                <span
                  class="text-lg font-medium leading-none text-gray-800 title-font "
                  >18</span
                >
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font "
                >
                  CATEGORY
                </h2>
                <h1 class="mb-3 text-xl font-medium text-gray-900 title-font">
                  Shooting Stars
                </h1>
                <p class="mb-5 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/102x102"
                    class="flex-shrink-0 object-cover object-center w-8 h-8 rounded-full "
                  />
                  <span class="flex flex-col flex-grow pl-3">
                    <span class="font-medium text-gray-900 title-font"
                      >Holden Caulfield</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="px-4 py-8 lg:w-1/3">
            <div class="flex items-start h-full">
              <div
                class="flex flex-col flex-shrink-0 w-12 leading-none text-center "
              >
                <span class="pb-2 mb-2 text-gray-500 border-b-2 border-gray-200"
                  >Jul</span
                >
                <span
                  class="text-lg font-medium leading-none text-gray-800 title-font "
                  >18</span
                >
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font "
                >
                  CATEGORY
                </h2>
                <h1 class="mb-3 text-xl font-medium text-gray-900 title-font">
                  Neptune
                </h1>
                <p class="mb-5 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/101x101"
                    class="flex-shrink-0 object-cover object-center w-8 h-8 rounded-full "
                  />
                  <span class="flex flex-col flex-grow pl-3">
                    <span class="font-medium text-gray-900 title-font"
                      >Henry Letham</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- blog 3 -->
    <section class="overflow-hidden text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="flex flex-wrap py-8 md:flex-nowrap">
            <div class="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
              <span class="font-semibold text-gray-700 title-font"
                >CATEGORY</span
              >
              <span class="mt-1 text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a class="inline-flex items-center mt-4 text-indigo-500"
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
          <div class="flex flex-wrap py-8 md:flex-nowrap">
            <div class="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
              <span class="font-semibold text-gray-700 title-font"
                >CATEGORY</span
              >
              <span class="mt-1 text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a class="inline-flex items-center mt-4 text-indigo-500"
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
          <div class="flex flex-wrap py-8 md:flex-nowrap">
            <div class="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
              <span class="font-semibold text-gray-700 title-font"
                >CATEGORY</span
              >
              <span class="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a class="inline-flex items-center mt-4 text-indigo-500"
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

    <!-- blog 3 dark -->
    <section class="overflow-hidden text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-800">
          <div class="flex flex-wrap py-8 md:flex-nowrap">
            <div class="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
              <span class="font-semibold text-white title-font">CATEGORY</span>
              <span class="mt-1 text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="mb-2 text-2xl font-medium text-white title-font">
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a class="inline-flex items-center mt-4 text-indigo-400"
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
          <div
            class="flex flex-wrap py-8 border-t-2 border-gray-800 md:flex-nowrap "
          >
            <div class="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
              <span class="font-semibold text-white title-font">CATEGORY</span>
              <span class="mt-1 text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="mb-2 text-2xl font-medium text-white title-font">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a class="inline-flex items-center mt-4 text-indigo-400"
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
          <div
            class="flex flex-wrap py-8 border-t-2 border-gray-800 md:flex-nowrap "
          >
            <div class="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
              <span class="font-semibold text-white title-font">CATEGORY</span>
              <span class="mt-1 text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="mb-2 text-2xl font-medium text-white title-font">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a class="inline-flex items-center mt-4 text-indigo-400"
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

    <!-- footer -->
    <footer class="text-gray-600 body-font">
      <div
        class="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row "
      >
        <a
          class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">Tailblocks</span>
        </a>
        <p
          class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 "
        >
          © 2020 Tailblocks —
          <a
            href="https://twitter.com/knyttneve"
            class="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
            >@knyttneve</a
          >
        </p>
        <span
          class="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start "
        >
          <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>