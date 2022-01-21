const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      state.commit('SET_USER', null)
      state.commit('SET_LOGIN', false)

      // this.$router.push({
      //   path: '/admin/signin'
      // })
    } else {
      console.log('authUser', authUser, claims);
      const { user_id, name, picture } = authUser;
      state.commit('SET_USER', { user_id, name, picture })
      state.commit('SET_LOGIN', true)
    }
  },

  // sign in
  async signIn(state, {inputEmail, inputPassword}) {
    // console.log('signin', inputEmail, inputPassword);
    try {
      let res = await this.$fire.auth.signInWithEmailAndPassword(
        inputEmail,
        inputPassword
      );
      console.log('res', res);
      return res;
    } catch (error) {
      return error;
    }
  },

  // google sign in
  async googleSignIn(state) {
    try {
      let provider = new this.$fireModule.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      let res = await this.$fire.auth.signInWithPopup(
        provider
      );
      console.log('res', res);
      return res;
    } catch (error) {
      return error;
    }
  },

  // github sign in
  async githubSignIn(state) {
    // console.log('signin', new $fire.auth.GoogleAuthProvider());
    try {
      let provider = new this.$fireModule.auth.GithubAuthProvider();
      let res = await this.$fire.auth.signInWithPopup(
        provider
      );
      console.log('res', res);
      return res;
    } catch (error) {
      return error;
    }
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
  },
  SET_LOGIN(state, val) {
    state.isLoggedIn = val;
  }
}

const state = () => (
  {
    user: null,
    isLoggedIn: false
  }
)

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