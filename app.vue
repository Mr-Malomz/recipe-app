<template>
  <div>
    <nav class="h-16 border-b flex justify-between items-center px-3 mb-10">
      <h2 class="font-bold text-xl">Recipe app</h2>
      <button
        class="
          text-sm
          font-bold
          bg-cyan-900
          hover:bg-cyan-700
          text-white
          rounded
          px-5
          py-2
        "
        @click="onModalChange(true)"
      >
        Create
      </button>
    </nav>
    <section class="flex justify-center">
      <div v-if="isLoading" class="w-full lg:w-2/4">Loading ...</div>
      <div v-if="isError" class="w-full lg:w-2/4 text-red-700">
        Error Loading Recipes
      </div>
      <ul v-if="recipes" class="w-full lg:w-2/4">
        <li
          v-for="recipe in recipes.documents"
          :key="recipe.$id"
          class="px-4 py-2 border rounded-lg mb-5"
        >
          <div class="border-b h-8 mb-4">
            <h3 class="text-gray-700 font-bold">{{ recipe.title }}</h3>
          </div>
          <div class="mb-4">
            <p class="text-xs text-gray-500 mb-2">Ingredients:</p>
            <p class="text-xs ml-2">
              {{ recipe.ingredients }}
            </p>
          </div>
          <div class="bg-cyan-50 p-4 rounded">
            <p class="text-xs text-gray-700 mb-2">Instruction:</p>
            <p class="text-xs text-gray-700 ml-2">
              {{ recipe.direction }}
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
  <Modal v-if="isModal" :onModalChange="onModalChange" />
</template>

<script setup>
import { getList, account } from "./components/utils";
//state
const isLoading = ref(false);
const isError = ref(false);
const isModal = ref(false);
const recipes = ref(null);

const onModalChange = (state) => {
  isModal.value = state;
};

onMounted(async () => {
  isLoading.value = true;
  isError.value = false;

  //check session
  account
    .get()
    .then()
    .catch((_) => account.createAnonymousSession());

  //make api call
  getList()
    .then((res) => {
      recipes.value = res;
      isLoading.value = false;
      isError.value = false;
    })
    .catch((_) => {
      isLoading.value = false;
      isError.value = true;
    });
});
</script>