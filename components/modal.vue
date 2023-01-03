<template>
  <div
    class="
      h-screen
      w-screen
      bg-cyan-900 bg-opacity-30
      z-30
      top-0
      fixed
      transform
      scale-105
      transition-all
      ease-in-out
      duration-100
    "
  >
    <div
      class="flex flex-col justify-center items-center h-full w-full open-nav"
    >
      <section
        class="
          w-11/12
          lg:w-1/2
          2xl:w-6/12
          bg-white
          flex
          justify-center
          items-center
          mt-5
          rounded-lg
        "
      >
        <div class="w-11/12 py-8">
          <div v-if="isError" class="text-center text-red-700">
            Error creating recipe
          </div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="capitalize text-xl text-gray-500 font-medium">
              create recipe
            </h2>
            <button
              class="text-xs text-gray-700 hover:bg-gray-400"
              @click="props.onModalChange(false)"
            >
              Close
            </button>
          </div>
          <form @submit.prevent="onSubmit">
            <fieldset class="mb-4">
              <label class="text-sm text-gray-400 mb-2 block">Title</label>
              <input
                type="text"
                name="title"
                required
                placeholder="title"
                class="w-full h-10 border border-gray-400 rounded-sm px-4"
                v-model="form.title"
              />
            </fieldset>
            <fieldset class="mb-4">
              <label class="text-sm text-gray-400 mb-2 block"
                >Ingredients</label
              >
              <textarea
                rows="3"
                name="ingredients"
                required
                placeholder="rice, beans, ...."
                class="w-full border border-gray-400 rounded-sm px-4"
                v-model="form.ingredients"
              />
            </fieldset>
            <fieldset class="mb-4">
              <label class="text-sm text-gray-400 mb-2 block">Direction</label>
              <textarea
                rows="3"
                name="direction"
                required
                placeholder="details..."
                class="w-full border border-gray-400 rounded-sm px-4"
                v-model="form.direction"
              />
            </fieldset>
            <button
              class="
                text-white
                capitalize
                px-6
                py-2
                bg-cyan-900
                rounded-md
                w-full
              "
              :disabled="isLoading"
            >
              save
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { create } from "./utils";
const props = defineProps(["onModalChange"]);

//state
const isLoading = ref(false);
const isError = ref(false);

const form = reactive({
  title: "",
  ingredients: "",
  direction: "",
});

const onSubmit = () => {
  isLoading.value = true;
  isError.value = false;

  create({
    title: form.title,
    ingredients: form.ingredients,
    direction: form.direction,
  })
    .then((res) => {
      isLoading.value = false;
      isError.value = false;
      props.onModalChange(false);
      window.location.reload();
    })
    .catch((_) => {
      isLoading.value = false;
      isError.value = true;
    });
};
</script>