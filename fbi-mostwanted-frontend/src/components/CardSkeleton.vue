<template>
  <Card>
    <Skeleton class="w-full h-48" />
    <CardHeader>
      <Skeleton class="h-4 w-3/4 mb-2" />
      <Skeleton class="h-3 w-full" />
      <Skeleton class="h-3 w-5/6 mt-1" />
    </CardHeader>
    <CardFooter>
      <Skeleton class="h-3 w-24" />
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
</script>
