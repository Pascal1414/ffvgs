<template>
  <h1 class="text-4xl font-bold mb-6">Downloads</h1>

  <div
    class="mb-5"
    v-for="documentItem in documentList"
    :key="documentItem.name"
  >
    <div class="">
      <h2 class="text-2xl font-bold mb-2">{{ documentItem.name }}</h2>
    </div>
    <ul class="menu menu-lg bg-base-300 rounded-box">
      <li v-for="document in documentItem.documents" :key="document.name">
        <a :href="document.url">
          <ClientOnly>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </ClientOnly>
          {{ document.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { DocumentList } from "~/types/document-list";
const documentList = ref<DocumentList[]>([
  {
    name: "Vereinsboot",
    documents: [
      {
        name: "Benutzungsordnung Vereinsboot",
        url: "/documents/BenutzungsordnungVereinsboot.pdf",
      },
    ],
  },
  {
    name: "Statuten",
    documents: [
      {
        name: "FFV Statuten 5 A5",
        url: "/documents/FFV_Statuten_5_A5.pdf",
      },
    ],
  },
  {
    name: "Vereinsfischen",
    documents: [
      {
        name: "Informationen Vereinsfischen",
        url: "/documents/Information-Vereinsmeisterschaft-2025.pdf",
      },
    ],
  },
  {
    name: "Gv 2024",
    documents: [
      {
        name: "GV Protokoll",
        url: "/documents/GV-Protokoll-2024.pdf",
      },
    ],
  },
  {
    name: "Gv 2025",
    documents: [
      {
        name: "GV Protokoll",
        url: "/documents/GV-Protokoll-2025.pdf",
      },
    ],
  },
  {
    name: "Boot Einwassern",
    documents: [
      {
        name: "Merkblatt Umsetzung nautischer Anlass Veranstalter",
        url: "/documents/Merkblatt_Umsetzung_nautischer_Anlass_Veranstalter.pdf",
      },
      {
        name: "Merkblatt Umsetzung nautischer Anlass Teilnehmende",
        url: "/documents/Merkblatt_Umsetzung_nautischer_Anlass_Teilnehmende.pdf",
      },
      {
        name: "BD-Verfügung - Temporäres Einwasserungsverbot inklusive Deklaration des Heimgewässers",
        url: "/documents/BD-Verfügung-Temporäres_Einwasserungsverbot_inklusive_Deklaration_des_Heimgewässers.pdf",
      },
      {
        name: "MM Deklaration-Heimgewässer MIT SPERRFRIST",
        url: "/documents/MM_Deklaration-Heimgewässer_MIT_SPERRFRIST.pdf",
      },
      {
        name: "Selbstdeklaration und Kontrolle nautischer Anlass",
        url: "/documents/Selbstdeklaration_und_Kontrolle_nautischer_Anlass.pdf",
      },
    ],
  },
]);
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
