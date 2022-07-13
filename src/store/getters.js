export default {
  getListfields:(state)=>state.stepLists,
  getListfieldsLength: (state) => state.stepLists.length,
  getListfield: (state) => state.stepLists[state.currentStep - 1],
  getStepfield: (state) => state.stepLists.forEach((step) => step)

  }