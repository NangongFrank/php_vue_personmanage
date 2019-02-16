/*
* @Author: name
* @Date:   2019-02-14 15:23:00
* @Last Modified by:   name
* @Last Modified time: 2019-02-15 10:24:22
*/

const store = new Vuex.Store({
    state: {
        footerState: false
    },
    actions: {

    },
    mutations: {
        setFooterState(state, value) {
            console.log(value)

            state.footerState = value
        }
    },
    getters: {
        getFooterState(context) {
            return context.footerState
        }
    }
})