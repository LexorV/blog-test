import axios from '@/plugins/axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Tarticle } from "@/types/blog";

export const state = () => ({
  blog: [] as Tarticle[],
})
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getCurrentArticle: (state:RootState) => (id:number) => {
    return state.blog.find((article:Tarticle) => article.id === Number(id))
  },
  paginationFilter: (state:RootState) => (start:number, end:number) => {
    return state.blog.slice(start, end)
  }

}

export const mutations: MutationTree<RootState> = {
  SET_ARTICLES (state:RootState, data:any) {
    state.blog = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getArticles')

  },
  getArticles ({ commit }) {
    return axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts').then((res) => {
    commit('SET_ARTICLES', res.data)
    })
  },
}
