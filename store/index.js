const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      state.commit('SET_USER', null)

      this.$router.push({
        path: '/admin/signin'
      })
    } else {
      const { uid, email } = authUser;
      state.commit('SET_USER', { uid, email })
    }
  },

  // sign in
  async signIn(state, {inputEmail, inputPassword}) {
    let res = await this.$fire.auth.signInWithEmailAndPassword(
      inputEmail,
      inputPassword
    );
    console.log('res', res);
    return res;
  },

  // sign out
  async signOut(state) {
    try {
      return await this.$fire.auth.signOut();
    } catch (error) {
      console.log("error", error);
      return error;
    }
  },

  // create user
  async createUser(state, {authUser, claims}) {
    try {
      return await this.$fire.auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      // createUserMsg.value = `${res.user.email} has signed in`;
      // console.log("res", res);
    } catch (error) {
      console.log("error", error);
      // createUserMsg.value = error.message;
    }
  }

  // add item

  // update item

  // delete item
}

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
}

const state = () => ({
  user: null
})

const getters = {
  getUser(state) {
    return state.user;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}