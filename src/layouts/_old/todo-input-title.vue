<template>
  <b-row id="todo-widget" class="todo-widget__input" tag="footer">
    <b-col cols="12">
      <b-row>
        <b-col cols="12">
          <b-form>
            <b-row align-h="center" align-v="center">
              <b-col class="p-0 m-0" cols="10" align-self="center">
                <b-form-input
                  @focus="this.focus"
                  placeholder="WHAT IS YOUR FOCUS TODAY?"
                  class="todo-widget__inputbox w-100 h-100 p-2 border-0"
                />
              </b-col>
              <b-col class="p-0 m-0" cols align-self="center">
                <b-btn
                  class="todo-widget__btn-add m-0 border-0 text-info"
                  variant="outline-primary"
                  ><b-icon-plus
                /></b-btn>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
