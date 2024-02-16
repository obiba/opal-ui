import { defineStore } from 'pinia';
import { api } from 'src/boot/api';
import { SubjectProfile } from 'src/components/models';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    counter: 0,
    sid: '',
    version: '',
    profile: {} as SubjectProfile,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
    isAuthenticated: (state) => state.profile.principal !== undefined,
  },

  actions: {
    signin(username: string, password: string) {
      this.counter++;
      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
      this.sid = '';
      this.version = '';
      return api.post('/auth/sessions', params).then((response) => {
        console.log(response);
        if (response.status === 201) {
          const sessionUrl = response.headers['location'];
          this.sid = sessionUrl.split('/').pop();
          this.version = response.headers['x-opal-version'];
        }
        return response;
      });
    },
    signout() {
      return api.delete('/auth/session/_current').then((response) => {
        this.sid = '';
        this.version = '';
        this.profile = {} as SubjectProfile;
        return response;
      });
    },
    userProfile() {
      return api.get('/system/subject-profile/_current').then((response) => {
        if (response.status === 200) {
          this.version = response.headers['x-opal-version'];
          this.profile = response.data;
        }
        return response;
      });
    },
  },
});
