const setList = ({ commit }, obj) => {
  const frases = { "nome": "fagner", "sobreNome": "Batista" }

  commit('SET_LIST', { frases })


}
export default {
  setList
}
