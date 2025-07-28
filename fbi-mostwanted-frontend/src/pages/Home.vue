<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b">
      <h1 class="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <!-- User info / future search -->
      <div class="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/mari.png" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </div>
    </div>

    <!-- Tabs -->
    <div class="px-6 pt-4">
      <Tabs default-value="list" class="w-full">
        <TabsList class="mb-4">
          <TabsTrigger value="list">Most Wanted List</TabsTrigger>
          <TabsTrigger value="search">Advanced Search</TabsTrigger>
        </TabsList>

        <!-- Tab Content: List -->
        <TabsContent value="list">
          <div
            v-if="isLoading"
            class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            <CardSkeleton v-for="n in 10" :key="n" />
          </div>

          <div v-else-if="error" class="text-center text-red-600 py-10">
            Failed to load data.
          </div>
          <div v-else class="px-4">
            <div
              class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              <Card
                v-for="person in data"
                :key="person.uid"
                class="overflow-hidden"
              >
                <div class="w-full aspect-square overflow-hidden">
                  <img
                    :src="person.images[0]?.original || ''"
                    alt="Mugshot"
                    class="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle class="text-lg line-clamp-1">{{
                    person.title
                  }}</CardTitle>
                  <CardDescription class="line-clamp-2 text-muted-foreground">
                    {{ person.description }}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <RouterLink
                    :to="`/wanted/${person.uid}`"
                    class="text-sm text-primary hover:underline"
                  >
                    View Details →
                  </RouterLink>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <!-- Tab Content: Advanced Search -->
        <TabsContent value="search">
          <AdvancedSearch/>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWantedList } from "@/lib/api/useWantedList";
// import fallbackImg from '@/assets/fallback.jpg'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AdvancedSearch from "@/components/AdvancedSearch.vue";
import CardSkeleton from "@/components/CardSkeleton.vue";

const { data, isLoading, error } = useWantedList();
</script>
