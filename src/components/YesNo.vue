<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    yes: string;
    no: string;
    modelValue: string;
    yesText?: string;
    noText?: string;
  }>(),
  {
    yesText: "Yes",
    noText: "No",
  }
);

const emit = defineEmits(["update:modelValue", "update:message"]);

function click(btn: "yes" | "no") {
  emit("update:modelValue", props[`${btn}Text`]);
  emit("update:message", props[btn]);
}
</script>

<template>
  <div class="YesNo">
    <button :style="{ gridColumn: 2 }" @click="click('yes')">
      {{ props.yesText }}
    </button>
    <button :style="{ gridColumn: 4 }" @click="click('no')">
      {{ props.noText }}
    </button>
  </div>
</template>

<style scoped>
.YesNo {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr 4fr;
}
</style>
