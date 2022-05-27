<script setup lang="ts">
import { reactive } from "vue";
import YesNo from "./YesNo.vue";

const emit = defineEmits(["powerOn"]);

const step1 = reactive({
  msg1: "Are you ready to make some waffles?",
  msg2: "",
  response: "",
});

const step2 = reactive({
  msg: "",
  response: "",
  noText: "It is wireless",
});

const step3 = reactive({
  msg: "",
  response: "",
  yesText: "Trust me bro",
  noText: "Uh there is no cord, so it has to be wireless. right?",
});

const step4 = reactive({
  msg: "",
  response: "",
});

</script>
<template>
  <div>
    <h1>{{ step1.msg1 }}</h1>

    <YesNo
      v-if="step1.response !== 'Yes'"
      v-model="step1.response"
      v-model:message="step1.msg2"
      yes="Wrong, you haven't even plugged it in yet"
      no="That is correct"
    >
    </YesNo>
    <br />
    <h2 style="border: 1px solid black">{{ step1.response }}</h2>
    <h2>{{ step1.msg2 }}</h2>
    <YesNo
      v-if="step1.response === 'Yes' && step2.response != step2.noText"
      v-model="step2.response"
      v-model:message="step2.msg"
      yes-text="I can't find the cord"
      :no-text="step2.noText"
      yes="Moron"
      no="Uh, I don't think that's how it works"
    >
    </YesNo>
    <div v-if="step1.response === 'Yes'">
      <h2 style="border: 1px solid black">{{ step2.response }}</h2>
      {{ step2.msg }}
    </div>
    <YesNo
      v-if="step2.response === step2.noText && step3.response !== step3.yesText"
      v-model="step3.response"
      v-model:message="step3.msg"
      :yes-text="step3.yesText"
      :no-text="step3.noText"
      yes='Okay "Bro"'
      no="Seriously, how can you be so stupid"
    >
    </YesNo>
    <div v-if="step2.response === step2.noText">
      <h2 style="border: 1px solid black">{{ step3.response }}</h2>
      {{ step3.msg }}
    </div>
    <div v-if="step3.response === step3.yesText">
      <h2 style="border: 1px solid black">So you're ready to make waffles now?</h2>
    </div>
    <YesNo
      v-if="step3.response === step3.yesText && step4.response !== 'Yes'"
      v-model="step4.response"
      v-model:message="step4.msg"
      yes='Finally'
      no="Why? Why do I waste my time?"
    >
    </YesNo>
    <div v-if="step4.response !== ''">
      <h2 style="border: 1px solid black">{{ step4.response }}</h2>
      {{ step4.msg }}
    </div>
  </div>
</template>
