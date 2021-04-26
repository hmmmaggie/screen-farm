<template>
  <div class="project">
    <form class="_ptm _pbs" @submit.prevent="saveQuilt">
      <h1>SCREEN–FARM</h1>
      <hr class="_mbs _mts" />
      <p v-for="(text, i) in intro" :key="i" class="_mbs">{{ text }}</p>
      <h2 class="layer-header">
        <span class="num">01</span>{{ ageType.heading }}
      </h2>
      <p v-if="ageType.subHeading" class="layer-blurb">
        {{ ageType.subHeading }}
      </p>
      <div class="color-options">
        <p class="question-label">{{ ageType.label }}</p>
        <p class="question-sub-label" v-if="ageType.subLabel">
          {{ ageType.subLabel }}
        </p>
        <div
          v-for="(option, j) in ageType.options"
          :key="`${j}_ageType`"
          class="radio-wrap"
        >
          <input
            type="radio"
            :id="`${ageType.id}_${j}`"
            :name="ageType.id"
            :value="option.value"
            v-model="ageType.value"
            :required="j === 0"
          />
          <label :for="`${ageType.id}_${j}`">
            <span>{{ option.label }}</span>
            <span class="sublabel">{{ option.subLabel }}</span>
          </label>
        </div>
      </div>
      <template v-if="colors">
        <div
          class="question-group"
          v-for="(questionSet, q) in patternLayers"
          :key="`question_set_${q}`"
        >
          <h2 class="layer-header" v-if="layerHeadings[q].heading">
            <span class="num">0{{ q + 2 }}</span
            >{{ layerHeadings[q].heading }}
          </h2>
          <p v-if="layerHeadings[q].subHeading" class="layer-blurb">
            {{ layerHeadings[q].subHeading }}
          </p>
          <template v-for="(question, i) in questionSet">
            <div v-if="question" :key="`${i}_family_makup`" class="question">
              <p class="question-label">{{ question.label }}</p>
              <p class="question-sub-label" v-if="question.subLabel">
                {{ question.subLabel }}
              </p>
              <div
                v-for="(option, j) in question.options"
                :key="`${j}_${i}_family_makeup`"
                class="radio-wrap"
              >
                <input
                  type="radio"
                  :id="`${question.id}_${j}`"
                  :name="question.id"
                  :value="option.value"
                  v-model="question.value"
                  :required="j === 0"
                />
                <label :for="`${question.id}_${j}`">{{ option.label }}</label>
              </div>
              <hr class="_mbs _mts" />
            </div>
          </template></div
      ></template>
      <button type="submit" v-if="colors" class="_mbs">Save My Quilt</button>
    </form>
    <quilt
      v-if="colors && patternsStarted"
      :quilt-patterns="quiltPatterns"
      :colors="colors"
      :key="key"
    />
    <div v-else-if="colors" class="canvas-spacer color-palette">
      <div
        v-for="(color, name, i) in colors"
        :class="`grid-${i + 1}`"
        :key="`grid-${i + 1}`"
        :style="`background-color:${color};`"
      />
    </div>
    <div
      class="canvas-spacer"
      v-else
      :style="`background-image: url(${quiltImage})`"
    ></div>
  </div>
</template>

<script>
import quiltImage from "@/assets/quilting.jpg";
import quilt from "./components/quilt.vue";
import {
  intro,
  ageType,
  familyMakeup,
  familyHeritage,
  familyAttributes,
  familyCloseness,
} from "./form-data";

function mapPatternShapes(patternLayer) {
  const patterns = patternLayer;
  while (patterns.length < 4) {
    patterns.push(null);
  }
  return patterns.map((question) => (question ? question.value : null));
}

export default {
  name: "App",
  components: {
    quilt,
  },
  data() {
    return {
      key: 0,
      quiltImage,
      intro,
      ageType,
      layerHeadings: [
        { heading: familyMakeup.heading, subHeading: familyMakeup.subHeading },
        {
          heading: familyHeritage.heading,
          subHeading: familyHeritage.subHeading,
        },
        {
          heading: familyAttributes.heading,
          subHeading: familyAttributes.subHeading,
        },
        {
          heading: familyCloseness.heading,
          subHeading: familyCloseness.subHeading,
        },
      ],
      patternLayers: [
        familyMakeup.layers,
        familyHeritage.layers,
        familyAttributes.layers,
        familyCloseness.layers,
      ],
    };
  },
  computed: {
    colors() {
      return this.ageType.value;
    },
    quiltPatternLayerA() {
      return mapPatternShapes(this.patternLayers[0]);
    },
    quiltPatternLayerB() {
      return mapPatternShapes(this.patternLayers[1]);
    },
    quiltPatternLayerC() {
      return mapPatternShapes(this.patternLayers[2]);
    },
    quiltPatternLayerD() {
      return mapPatternShapes(this.patternLayers[3]);
    },
    quiltPatterns() {
      if (!this.colors) return [];
      return [
        { pattern: this.quiltPatternLayerA, color: this.colors.colorA },
        { pattern: this.quiltPatternLayerB, color: this.colors.colorB },
        { pattern: this.quiltPatternLayerC, color: this.colors.colorC },
        {
          pattern: this.quiltPatternLayerD,
          color: this.colors.colorBackground,
        },
      ];
    },
    patternsStarted() {
      const availableShapes = this.quiltPatterns.map((layer) => layer.pattern);
      return availableShapes.flat().find((shape) => !!shape) !== undefined;
    },
  },
  watch: {
    quiltPatterns: {
      deep: true,
      handler() {
        const canvas = this.$el.querySelector("canvas");
        if (canvas) {
          canvas.remove();
        }
        this.key++;
      },
    },
  },
  methods: {
    saveQuilt() {
      const canvas = this.$el.querySelector("canvas");
      const link = document.createElement("a");
      link.download = "screen-farm_quilt.png";
      link.href = canvas.toDataURL();
      link.click();
      link.delete;
    },
  },
};
</script>
