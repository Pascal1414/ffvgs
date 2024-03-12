<template>
  <div v-for="(event, index) in events" :key="index">
    <div class="card card-compact w-[100%] bg-base-200 shadow-xl mb-4">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-2">{{ event.name }}</h1>
        <div v-for="(images, index) in event.images" :key="index"
          class="flex flex-row justify-between mb-[1%] gap-[2%]">
          <label v-for="(image, index) in images" for="my-modal-5" class="w-[50%]" :key="index" @click="() => {
    previewImageArray = []
    event.images.forEach((group) => {
      group.forEach((image) => {
        previewImageArray.push(image)
      })
    })
    previewImageIndex = index
  }
    ">
            <img class="md:rounded-md" :src="image.url" :alt="image.caption" />
          </label>
        </div>
      </div>
    </div>
  </div>

  <input type="checkbox" id="my-modal-5" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box max-w-[100%] w-[100%] flex row h-[100%] bg-transparent">
      <button class="btn btn-square btn-primary absolute top-[50%] !translate-y-[-50%] left-[2%]" @click="previous()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </button>
      <img class="object-contain ml-auto mr-auto max-w-[80%]" v-if="previewImageArray[previewImageIndex]"
        :src="previewImageArray[previewImageIndex].url" />
      <button class="btn btn-square btn-primary absolute top-[50%] !translate-y-[-50%] right-[2%]" @click="next()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <label for="my-modal-5" class="btn btn-square btn-primary absolute top-[10px] right-[2%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
          viewBox="0 0 16 16">
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

const previewImageArray = ref([
  { url: '', caption: '' }
])
const previewImageIndex: Ref<number> = ref(-1)

function previous() {
  if (previewImageIndex.value > 0) previewImageIndex.value = previewImageIndex.value - 1
  else previewImageIndex.value = previewImageArray.value.length - 1
}
function next() {
  if (previewImageIndex.value < previewImageArray.value.length - 1)
    previewImageIndex.value = previewImageIndex.value + 1
  else previewImageIndex.value = 0
}


const events = ref([
  {
    name: 'Helferausflug (30.09.2023)',
    images: [
      [
        {
          url: '/images/galery/Helferausflug23/traktorfahren_small.jpg',
          caption: 'Traktorfahren'
        },
        {
          url: '/images/galery/Helferausflug23/traktorfahren2_small.jpg',
          caption: 'Traktorfahren'
        }
        , {
          url: '/images/galery/Helferausflug23/traktorfahren3_small.jpg',
          caption: 'Traktorfahren'
        }
      ], [
        {
          url: '/images/galery/Helferausflug23/armbrustschiessen_small.jpg',
          caption: 'Armbrustschiessen'
        },
        {
          url: '/images/galery/Helferausflug23/melken_small.jpg',
          caption: 'Melken'
        }
      ]
    ]
  },
  {
    name: 'Sommernachtsfest (12. / 13.08.2023)',
    images: [
      [
        {
          url: '/images/galery/Sommernachtsfest23/fischkueche_small.jpg',
          caption: 'Fischküche'
        },
        {
          url: '/images/galery/Sommernachtsfest23/saucen_herstellen_small.jpg',
          caption: 'Saucen herstellen'
        }
      ]
    ],
  },
  {
    name: '2. Vereinsfischen (01.07.2023)',
    images: [

      [
        {
          url: '/images/galery/2.Vereinsfischen23/grosse_fänge_small.jpg',
          caption: 'Tagessieger'
        },
        {
          url: '/images/galery/2.Vereinsfischen23/mittagessen_small.jpg',
          caption: 'Mittagessen'
        }
      ],
      [
        {
          url: '/images/galery/2.Vereinsfischen23/felche_small.jpg',
          caption: 'Grösste Felche'
        },
        {
          url: '/images/galery/2.Vereinsfischen23/felche_messen_small.jpg',
          caption: 'Die grösste Felche wird gemessen'
        }
      ]
    ]
  },
  {
    name: '1. Vereinsfischen (01.05.2023)',
    images: [
      [
        {
          url: '/images/galery/1.Vereinsfischen23/mittagessen.jpg',
          caption: 'Mittagessen'
        }
      ],
      [
        {
          url: '/images/galery/1.Vereinsfischen23/hecht.jpg',
          caption: 'Gefangener Hecht '
        },
        {
          url: '/images/galery/1.Vereinsfischen23/hecht-jugend.jpg',
          caption: 'Gefangene Hechte'
        },
        {
          url: '/images/galery/1.Vereinsfischen23/essen.jpg',
          caption: 'Mittagessen in der Milchhütte'
        }
      ]
    ]
  },
  {
    name: 'Absenden (19.11.2022)',
    images: [
      [
        {
          url: '/images/galery/Absenden22/20221119_200447small.jpg',
          caption: 'Absenden'
        },
        {
          url: '/images/galery/Absenden22/20221119_230733small.jpg',
          caption: 'Boot'
        }
      ],
      [
        {
          url: '/images/galery/Absenden22/absenden1small.jpg',
          caption: 'Abendessen'
        },
        {
          url: '/images/galery/Absenden22/absenden2small.jpg',
          caption: 'Lotto'
        }
      ],
      [
        {
          url: '/images/galery/Absenden22/absenden3small.jpg',
          caption: 'Dessert'
        },
        {
          url: '/images/galery/Absenden22/absenden4small.jpg',
          caption: 'Boot'
        }
      ]
    ]
  },
  {
    name: 'Trüschenfischen (05.11.2022)',
    images: [
      [
        {
          url: '/images/galery/Trüschenfischen22/IMG_20221105_081130844small.jpg',
          caption: 'Schiffe'
        },
        {
          url: '/images/galery/Trüschenfischen22/IMG_20221105_111110798small.jpg',
          caption: 'Unwetter'
        }
      ],
      [
        {
          url: '/images/galery/Trüschenfischen22/IMG_20221105_111112339small.jpg',
          caption: 'Regen'
        },
        {
          url: '/images/galery/Trüschenfischen22/IMG_20221105_141223498small.jpg',
          caption: 'Regenbogen'
        }
      ]
    ]
  },
  {
    name: 'Silchsammelaktion (22.10.2022)',
    images: [
      [
        {
          url: '/images/galery/Silchsammelaktion22/20221022_142359small.jpg',
          caption: 'Taucher springt ins Wasser'
        },
        {
          url: '/images/galery/Silchsammelaktion22/20221022_142717small.jpg',
          caption: 'Taucher zieht Flossen an'
        }
      ],
      [
        {
          url: '/images/galery/Silchsammelaktion22/20221022_134846small.jpg',
          caption: 'Anweisungen'
        },
        {
          url: '/images/galery/Silchsammelaktion22/20221022_141214small.jpg',
          caption: 'Taucher zieht sich Ausrüstung an.'
        },
        {
          url: '/images/galery/Silchsammelaktion22/20221022_142011small.jpg',
          caption: 'Boot wird bereit gemacht'
        }
      ],
      [
        {
          url: '/images/galery/Silchsammelaktion22/20221022_133154small.jpg',
          caption: ''
        },
        {
          url: '/images/galery/Silchsammelaktion22/20221022_142203small.jpg',
          caption: 'Es geht los'
        }
      ]
    ]
  },
  {
    name: 'Helferausflug Brauerei Wädenswil (17.09.2022)',
    images: [
      [
        {
          url: '/images/galery/Helferausflug22/IMG_0868small.jpg',
          caption: 'Schiff vom Zürichsee'
        },
        {
          url: '/images/galery/Helferausflug22/IMG_0883small.jpg',
          caption: 'In der Brauerei'
        },
        {
          url: '/images/galery/Helferausflug22/IMG_0885small.jpg',
          caption: 'Auf dem Zürichsee'
        }
      ]
    ]
  },
  {
    name: 'Glattfischen (10.09.2022)',
    images: [
      [
        {
          url: '/images/galery/Glattfischen22/IMG_5240small.jpg',
          caption: 'Die Fänge'
        },
        {
          url: '/images/galery/Glattfischen22/IMG_5243small.jpg',
          caption: 'Die Fänge'
        }
      ]
    ]
  }
])
</script>

<style scoped></style>