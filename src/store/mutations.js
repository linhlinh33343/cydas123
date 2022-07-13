export default {
  TOGGLE_SUB_MENU(state, data) {
    state.stepLists[state.currentStep - 1].forEach((step) => {
      step.subStep.forEach((element) => {
        element.content.forEach((el) => {
          if (data.name === el.nameContent) {
            el.toggleMenu = !el.toggleMenu;
          }
        });
      });
    });
  },
};
