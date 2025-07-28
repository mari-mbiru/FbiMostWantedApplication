<template>
  <div class="bg-background text-foreground p-6 max-w-7xl mx-auto">
    <!-- Back Button -->
    <div class="mb-6">
      <RouterLink
        to="/"
        class="text-sm text-primary hover:underline inline-flex items-center gap-1"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to List
      </RouterLink>
    </div>

    <!-- Title -->
    <h1 class="text-3xl font-bold tracking-tight mb-2">{{ person.title }}</h1>

    <!-- Description -->
    <p class="text-muted-foreground mb-6">{{ person.description }}</p>

    <!-- Top Section -->
    <div class="flex flex-col lg:flex-row gap-6 mb-8">
      <!-- Images -->
      <div class="flex flex-col gap-4 lg:w-1/2">
        <img
          :src="person.images[0]?.original"
          :alt="person.title"
          class="rounded-lg border object-cover w-full max-h-[400px]"
        />
        <div v-if="person.images.length > 1" class="flex gap-2">
          <img
            v-for="(img, index) in person.images.slice(1)"
            :key="index"
            :src="img.thumb"
            class="h-20 w-20 rounded border object-cover"
            :alt="'Image ' + (index + 2)"
          />
        </div>
      </div>

      <!-- Poster & Downloads -->
      <div class="lg:w-1/2 space-y-4">
        <img
          :src="person.images[0]?.original"
          alt="FBI Poster"
          class="rounded-lg border object-contain w-full max-h-[400px]"
        />
        <div>
          <h3 class="font-semibold mb-2">Download Poster</h3>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li v-for="file in person.files" :key="file.url">
              <a
                :href="file.url"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                {{ file.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <Tabs default-value="profile" class="w-full">
      <TabsList class="mb-6 flex flex-wrap gap-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="reward" v-if="person.reward_text">Reward</TabsTrigger>
        <TabsTrigger value="remarks" v-if="person.remarks">Remarks</TabsTrigger>
        <TabsTrigger value="caution" v-if="person.caution">Caution</TabsTrigger>
      </TabsList>

      <!-- Profile Tab -->
      <TabsContent value="profile" class="space-y-6">
        <!-- Aliases -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Aliases</h2>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li v-for="alias in person.aliases" :key="alias">{{ alias }}</li>
          </ul>
        </div>

        <!-- Info Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div><strong>Date(s) of Birth:</strong> {{ person.dates_of_birth_used?.join(', ') }}</div>
          <div><strong>Hair:</strong> {{ capitalize(person.hair) }}</div>
          <div><strong>Eyes:</strong> {{ capitalize(person.eyes) }}</div>
          <div><strong>Height:</strong> {{ inchesToFeet(person.height_max) }}</div>
          <div><strong>Weight:</strong> {{ person.weight }}</div>
          <div><strong>Sex:</strong> {{ person.sex }}</div>
          <div><strong>Race:</strong> {{ capitalize(person.race) }}</div>
          <div><strong>Nationality:</strong> {{ person.nationality }}</div>
          <div><strong>Languages:</strong> {{ person.languages?.join(', ') }}</div>
        </div>
      </TabsContent>

      <!-- Reward Tab -->
      <TabsContent value="reward">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">Reward</h2>
          <p class="text-sm">{{ person.reward_text }}</p>
        </div>
      </TabsContent>

      <!-- Remarks Tab -->
      <TabsContent value="remarks">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">Remarks</h2>
          <div class="prose prose-sm max-w-none" v-html="person.remarks" />
        </div>
      </TabsContent>

      <!-- Caution Tab -->
      <TabsContent value="caution">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">Caution</h2>
          <div class="prose prose-sm max-w-none" v-html="person.caution" />
        </div>
      </TabsContent>
    </Tabs>

    <!-- Warning -->
    <div
      v-if="person.warning_message"
      class="text-center text-sm font-bold text-red-600 border border-red-300 rounded p-4 uppercase mt-8"
    >
      {{ person.warning_message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { RouterLink } from 'vue-router'

const person = defineProps<{
  person: any
}>().person

function capitalize(str?: string | null) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : ''
}

function inchesToFeet(inches?: number | null) {
  if (!inches) return ''
  const feet = Math.floor(inches / 12)
  const rem = inches % 12
  return `${feet}'${rem}"`
}
</script>

<style scoped>
.prose p {
  margin-bottom: 0.5rem;
}
</style>
