const initialState = {
  iconObjs: [
    {
      icon: "fa-regular fa-house",
      name: "Home",
    },
    {
      icon: "fa-solid fa-table-cells-large",
      name: "Novità",
    },
    {
      icon: "fa-solid fa-tower-broadcast",
      name: "Radio",
    },
  ],
}

const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default iconReducer
