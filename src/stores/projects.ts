import { defineStore } from 'pinia';
import { api } from 'src/boot/api';
import { Project } from 'src/components/models';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
    project: {} as Project,
  }),

  getters: {},

  actions: {
    getProjects() {
      return api
        .get('/projects', { params: { digest: true } })
        .then((response) => {
          this.projects = response.data;
          return response;
        });
    },
    getProject(name: string) {
      return api.get(`/project/${name}`).then((response) => {
        this.project = response.data;
        return response;
      });
    },
  },
});
