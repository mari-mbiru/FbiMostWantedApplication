<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="flex flex-col lg:flex-row gap-6 px-4 py-8">
      <!-- Sidebar -->
      <aside class="w-full lg:w-1/4 space-y-6 border p-4 rounded-xl bg-muted/30">
        <!-- Eyes -->
        <div>
          <h3 class="text-sm font-semibold mb-2">Eye Color</h3>
          <div class="space-y-1">
            <div
              v-for="color in ['brown','hazel','blue','black','green','dark']"
              :key="color"
              class="flex items-center"
            >
              <Checkbox v-model:checked="filters.eyes" :value="color" />
              <Label class="ml-2 capitalize">{{ color }}</Label>
            </div>
          </div>
        </div>

        <!-- Hair -->
        <div>
          <h3 class="text-sm font-semibold mb-2">Hair Color</h3>
          <div class="space-y-1">
            <div
              v-for="color in ['brown','black','blond','gray','bald']"
              :key="color"
              class="flex items-center"
            >
              <Checkbox v-model:checked="filters.hair" :value="color" />
              <Label class="ml-2 capitalize">{{ color }}</Label>
            </div>
          </div>
        </div>

        <!-- Race -->
        <div>
          <h3 class="text-sm font-semibold mb-2">Race</h3>
          <div class="space-y-1">
            <div
              v-for="race in ['black','hispanic','native','white','asian']"
              :key="race"
              class="flex items-center"
            >
              <Checkbox v-model:checked="filters.race" :value="race" />
              <Label class="ml-2 capitalize">{{ race }}</Label>
            </div>
          </div>
        </div>

        <!-- Age -->
        <div>
          <h3 class="text-sm font-semibold mb-2">Age (years)</h3>
          <div class="flex gap-2">
            <Input
              type="number"
              v-model.number="filters.ageMin"
              placeholder="Min"
              class="w-1/2"
            />
            <Input
              type="number"
              v-model.number="filters.ageMax"
              placeholder="Max"
              class="w-1/2"
            />
          </div>
        </div>

        <!-- Height -->
        <div>
          <h3 class="text-sm font-semibold mb-2">Height (in)</h3>
          <div class="flex gap-2">
            <Input
              type="number"
              v-model.number="filters.heightMin"
              placeholder="Min"
              class="w-1/2"
            />
            <Input
              type="number"
              v-model.number="filters.heightMax"
              placeholder="Max"
              class="w-1/2"
            />
          </div>
        </div>

        <!-- Weight -->
        <div>
          <h3 class="text-sm font-semibold mb-2">Weight (kg)</h3>
          <div class="flex gap-2">
            <Input
              type="number"
              v-model.number="filters.weightMin"
              placeholder="Min"
              class="w-1/2"
            />
            <Input
              type="number"
              v-model.number="filters.weightMax"
              placeholder="Max"
              class="w-1/2"
            />
          </div>
        </div>

        <!-- Located -->
        <div class="flex items-center">
          <Checkbox v-model="filters.statusLocated" />
          <Label class="ml-2">Status: Located?</Label>
        </div>

        <!-- Buttons -->
        <div class="flex gap-2 pt-4">
          <Button variant="outline" class="w-1/2" @click="clearFilters">
            Clear
          </Button>
          <Button class="w-1/2" @click="applyFilters">Apply</Button>
        </div>
      </aside>

      <!-- Results -->
      <section class="w-full lg:w-3/4">
        <div class="text-muted-foreground italic text-center py-10">
          Results will show here based on selected filters.
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const filters = reactive({
  eyes: [] as string[],
  hair: [] as string[],
  race: [] as string[],
  ageMin: null as number | null,
  ageMax: null as number | null,
  heightMin: null as number | null,
  heightMax: null as number | null,
  weightMin: null as number | null,
  weightMax: null as number | null,
  statusLocated: false,
})

function clearFilters() {
  filters.eyes = []
  filters.hair = []
  filters.race = []
  filters.ageMin = null
  filters.ageMax = null
  filters.heightMin = null
  filters.heightMax = null
  filters.weightMin = null
  filters.weightMax = null
  filters.statusLocated = false
}

function applyFilters() {
  console.log('Apply filters:', { ...filters })
  // TODO: Emit to parent or trigger fetch logic
}
</script>
