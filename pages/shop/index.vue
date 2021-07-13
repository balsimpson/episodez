<template>
  <div>
    <header class="text-gray-600 body-font">
      <div
        class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row "
      >
        <a
          class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 "
        >
          <img src="/icon.png" alt="" class="h-24" />
          <span class="ml-3 text-xl"></span>
        </a>

        <button class="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </header>

    <!-- Hero Carousel -->
    <div class="container relative mx-auto carousel">
      <div class="relative w-full overflow-hidden carousel-inner">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="absolute opacity-0 carousel-item" style="height: 50vh">
          <div
            class="block w-full h-full pt-6 mx-auto overflow-x-hidden bg-right bg-cover rounded md:pt-0 md:items-left "
            style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');"
          >
            <div class="flex items-end justify-center h-full py-4 mb-4 bg-gradient-to-t from-black">
              <div
                class="flex flex-col items-end w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start "
              >
                <p class="text-2xl text-white">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  class="inline-block mb-8 text-xl leading-relaxed text-white no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                  >view product</a
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-3"
          class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-gray-900 "
          >‹</label
        >
        <label
          for="carousel-2"
          class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-gray-900 "
          >›</label
        >

        <!--Slide 2-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="absolute bg-right bg-cover opacity-0 carousel-item"
          style="height: 50vh"
        >
          <div
            class="block w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center "
            style="background-image: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80');"
          >
            <div class="container mx-auto">
              <div
                class="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start "
              >
                <p class="my-4 text-2xl text-black">Real Bamboo Wall Clock</p>
                <a
                  class="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black "
                  href="#"
                  >view product</a
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-1"
          class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-gray-900 "
          >‹</label
        >
        <label
          for="carousel-3"
          class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-gray-900 "
          >›</label
        >

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="absolute opacity-0 carousel-item" style="height: 50vh">
          <div
            class="block w-full h-full pt-6 mx-auto bg-bottom bg-cover md:pt-0 md:items-center "
            style="background-image: url('https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');"
          >
            <div class="container mx-auto">
              <div
                class="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start "
              >
                <p class="my-4 text-2xl text-black">
                  Brown and blue hardbound book
                </p>
                <a
                  class="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black "
                  href="#"
                  >view product</a
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-2"
          class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-gray-900 "
          >‹</label
        >
        <label
          for="carousel-1"
          class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-gray-900 "
          >›</label
        >

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900 "
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900 "
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900 "
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>

    <section class="text-gray-600 body-font">
      <div class="container py-24 mx-auto">
        <div class="flex flex-col w-full mb-20 text-center">
          <h2
            class="mb-1 text-xs font-medium tracking-widest text-red-500 title-font "
          >
            FEATURED
          </h2>
          <h1
            class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font "
          >
            Master Cleanse Reliac Heirloom
          </h1>
          <p class="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3">
          <div class="p-4">
            <div
              class="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60 "
            >
              <img
                class="object-cover object-center w-full h-64 lg:h-48 md:h-36"
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="text-xs font-medium tracking-widest text-gray-400 title-font "
                >
                  CATEGORY
                </h2>
                <h1 class="mb-3 text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h1>
                <p class="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center justify-between pt-1 border-t">
                  <div class="text-xl font-bold">
                  <span class="text-gray-400">₹</span>16,000
                </div>
                  <a
                    class="inline-flex items-center text-red-500 md:mb-2 lg:mb-0 "
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
          
          <div class="p-4">
            <div
              class="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60 "
            >
              <img
                class="object-cover object-center w-full h-64 lg:h-48 md:h-36"
                src="https://images.unsplash.com/photo-1578653282816-a508bd2d0435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="text-xs font-medium tracking-widest text-gray-400 title-font "
                >
                  CATEGORY
                </h2>
                <h1 class="mb-3 text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h1>
                <p class="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center justify-between pt-1 border-t">
                  <div class="text-xl font-bold">
                  <span class="text-gray-400">₹</span>16,000
                </div>
                  <a
                    class="inline-flex items-center text-red-500 md:mb-2 lg:mb-0 "
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
          
          <div class="p-4">
            <div
              class="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60 "
            >
              <img
                class="object-cover object-center w-full h-64 lg:h-48 md:h-36"
                src="https://images.unsplash.com/photo-1601392740426-907c7b028119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="text-xs font-medium tracking-widest text-gray-400 title-font "
                >
                  CATEGORY
                </h2>
                <h1 class="mb-3 text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h1>
                <p class="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center justify-between pt-1 border-t">
                  <div class="text-xl font-bold">
                  <span class="text-gray-400">₹</span>16,000
                </div>
                  <a
                    class="inline-flex items-center text-red-500 md:mb-2 lg:mb-0 "
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
        
          
        </div>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="text-gray-600 body-font">
      <div class="container py-6 mx-auto">
        <div class="w-full mx-auto text-center">
          <div class="flex flex-col w-full max-w-xl mx-auto text-center">
            <h2
              class="mb-1 text-xs font-medium tracking-widest text-brand-300 title-font "
            >
              ROOF PARTY POLAROID
            </h2>
            <h1
              class="mb-4 text-2xl font-medium text-brand-900 sm:text-3xl title-font "
            >
              Master Cleanse Reliac Heirloom
            </h1>
            <p class="mx-auto text-base leading-relaxed">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>

          <div
            class="flex flex-wrap items-center justify-center my-10 space-x-6 font-serif text-2xl uppercase "
          >
            <div class="font-bold text-brand-300">all</div>
            <div class="text-gray-400">clocks</div>
            <div class="text-gray-400">antiques</div>
            <div class="text-gray-400">furniture</div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3">
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?chair"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-start justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2
                    class="text-xl font-medium leading-4 text-gray-900 capitalize "
                  >
                    <NuxtLink
                      :to="{
                        name: 'shop-product-slug',
                        params: { slug: 'TheCatalyzer' },
                      }"
                    >
                      Lorem ipsum dolor sit amet.
                    </NuxtLink>
                  </h2>
                </div>

                <div class="mt-1 text-xl font-bold">
                  <span class="text-gray-400">₹</span>16,000
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?sofa"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?officechair"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?antique"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?sofa"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?armchair"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?table"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?diningtable"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4">
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                src="https://source.unsplash.com/random?studytable"
              />
            </a>
            <div class="mt-4">
              <div class="flex items-end justify-between">
                <div>
                  <h3
                    class="text-xs tracking-widest uppercase text-brand-300 title-font "
                  >
                    Furniture
                  </h3>
                  <h2 class="text-lg font-medium text-gray-900 title-font">
                    The Catalyzer
                  </h2>
                </div>

                <div>
                  <p class="mt-1 text-2xl font-bold">₹16,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="text-gray-600 body-font">
      <div
        class="container flex flex-col items-center py-8 mx-auto sm:flex-row"
      >
        <a
          class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start "
        >
          <img src="/icon.png" alt="" class="h-12" />
        </a>
        <p
          class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 "
        >
          © 2021 Collector's Choice
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
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>