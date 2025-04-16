<template>
    <div class="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
      <div class="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
          <div class="flex flex-wrap mt-0 -mx-3">
            <div class="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
              <h6>Projects</h6>
              <p class="mb-0 leading-normal text-sm">
                <i class="fa fa-check text-cyan-500"></i>
                <span class="ml-1 font-semibold">30 done</span>
                this month
              </p>
            </div>
            <div class="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
              <div class="relative pr-6 lg:float-right">
                <a href="javascript:;" class="cursor-pointer" @click="showDropdown = !showDropdown">
                  <i class="fa fa-ellipsis-v text-slate-400"></i>
                </a>
                
                <!-- Dropdown Menu -->
                <ul v-if="showDropdown" class="z-100 text-sm shadow-soft-3xl duration-250 min-w-44 -ml-34 pointer-events-auto absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500">
                  <li class="relative">
                    <a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Action</a>
                  </li>
                  <li class="relative">
                    <a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Another action</a>
                  </li>
                  <li class="relative">
                    <a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex-auto p-6 px-0 pb-2">
          <div class="overflow-x-auto">
            <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
              <thead class="align-bottom">
                <tr>
                  <th class="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Companies</th>
                  <th class="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Members</th>
                  <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Budget</th>
                  <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Completion</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(project, index) in projects" :key="index">
                  <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                    <div class="flex px-2 py-1">
                      <div>
                        <img :src="project.logo" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" :alt="project.name" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 leading-normal text-sm">{{ project.name }}</h6>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                    <div class="mt-2 avatar-group">
                      <a v-for="(member, memberIndex) in project.members" :key="memberIndex" href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" :style="{ marginLeft: memberIndex > 0 ? '-0.25rem' : '0' }">
                        <img :src="member.avatar" class="w-full rounded-full" :alt="member.name" />
                      </a>
                    </div>
                  </td>
                  <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                    <span class="font-semibold leading-tight text-xs">{{ project.budget }}</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                    <div class="w-3/4 mx-auto">
                      <div>
                        <div>
                          <span class="font-semibold leading-tight text-xs">{{ project.completion }}%</span>
                        </div>
                      </div>
                      <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                        <div :class="`duration-600 ease-soft bg-gradient-to-tl ${project.color} -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all`" :style="{ width: `${project.completion}%` }" role="progressbar" :aria-valuenow="project.completion" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'ProjectsTable',
    setup() {
      const showDropdown = ref(false)
      
      const projects = [
        {
          name: 'Soft UI XD Version',
          logo: '/assets/img/small-logos/logo-xd.svg',
          members: [
            { name: 'Ryan Tompson', avatar: '/assets/img/team-1.jpg' },
            { name: 'Romina Hadid', avatar: '/assets/img/team-2.jpg' },
            { name: 'Alexander Smith', avatar: '/assets/img/team-3.jpg' },
            { name: 'Jessica Doe', avatar: '/assets/img/team-4.jpg' }
          ],
          budget: '$14,000',
          completion: 60,
          color: 'from-blue-600 to-cyan-400'
        },
        {
          name: 'Add Progress Track',
          logo: '/assets/img/small-logos/logo-atlassian.svg',
          members: [
            { name: 'Romina Hadid', avatar: '/assets/img/team-2.jpg' },
            { name: 'Jessica Doe', avatar: '/assets/img/team-4.jpg' }
          ],
          budget: '$3,000',
          completion: 10,
          color: 'from-blue-600 to-cyan-400'
        },
        {
          name: 'Fix Platform Errors',
          logo: '/assets/img/small-logos/logo-slack.svg',
          members: [
            { name: 'Romina Hadid', avatar: '/assets/img/team-3.jpg' },
            { name: 'Jessica Doe', avatar: '/assets/img/team-1.jpg' }
          ],
          budget: 'Not set',
          completion: 100,
          color: 'from-green-600 to-lime-400'
        },
        {
          name: 'Launch our Mobile App',
          logo: '/assets/img/small-logos/logo-spotify.svg',
          members: [
            { name: 'Ryan Tompson', avatar: '/assets/img/team-4.jpg' },
            { name: 'Romina Hadid', avatar: '/assets/img/team-3.jpg' },
            { name: 'Alexander Smith', avatar: '/assets/img/team-4.jpg' },
            { name: 'Jessica Doe', avatar: '/assets/img/team-1.jpg' }
          ],
          budget: '$20,500',
          completion: 100,
          color: 'from-green-600 to-lime-400'
        },
        {
          name: 'Add the New Pricing Page',
          logo: '/assets/img/small-logos/logo-jira.svg',
          members: [
            { name: 'Ryan Tompson', avatar: '/assets/img/team-4.jpg' }
          ],
          budget: '$500',
          completion: 25,
          color: 'from-blue-600 to-cyan-400'
        },
        {
          name: 'Redesign New Online Shop',
          logo: '/assets/img/small-logos/logo-invision.svg',
          members: [
            { name: 'Ryan Tompson', avatar: '/assets/img/team-1.jpg' },
            { name: 'Jessica Doe', avatar: '/assets/img/team-4.jpg' }
          ],
          budget: '$2,000',
          completion: 40,
          color: 'from-blue-600 to-cyan-400'
        }
      ]
      
      return {
        showDropdown,
        projects
      }
    }
  }
</script>