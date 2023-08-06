import axios from '@/plugins/axios'

export const state = () => ({
  test: 'HahAh',
  blog: [],
  loading: false,
})

export const getters = {
  getCurrentArticle: (state:any) => (id:any) => {
    return state.blog.find((article:any) => article.id === parseInt(id))
  },

}

export const mutations = {
  SET_ARTICLES (state:any, data:any) {
    state.blog = data
  },
}

export const actions = {
  async nuxtServerInit ({ dispatch }:any) {
    await dispatch('getArticles')

  },
  getArticles ({ commit }:any) {
    return axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts').then((res) => {
    commit('SET_ARTICLES', res.data)
    })
  },
}
