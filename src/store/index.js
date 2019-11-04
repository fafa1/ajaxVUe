import Vue from 'vue'
import Vuex from 'vuex'
import Category from '@/modules/category/store'

Vue.use(Vuex)

const modules = {
  Category
}

export default new Vuex.Store({
  modules
})
