<template>
  <article>
    <b-form>
      <b-form-group
        label-cols-lg="1"
        label="Shipping Address"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="Street:"
          label-for="nested-street"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input size="" id="nested-street"></b-form-input>
        </b-form-group>

        <b-form-group
          label="City:"
          label-for="nested-city"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="nested-city"></b-form-input>
        </b-form-group>

        <b-form-group
          label="State:"
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="nested-state"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Country:"
          label-for="nested-country"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="nested-country"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Ship via:"
          label-cols-sm="3"
          label-align-sm="right"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-group
            class="pt-2"
            :options="['Air', 'Courier', 'Mail']"
            :aria-describedby="ariaDescribedby"
          ></b-form-group>
        </b-form-group>
      </b-form-group>
    </b-form>
  </article>
</template>

<script>
export default {
  name: 'TodoForm',

  components: {},
}
</script>
