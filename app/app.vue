<template>
  <div class="min-h-screen bg-background">
    <NuxtRouteAnnouncer />

    <!-- Test TailwindCSS and shadcn/ui setup -->
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold text-foreground mb-8">
        Nuxt 4 + TailwindCSS + shadcn/ui
      </h1>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Card Example -->
        <Card class="p-6">
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>
              This is a shadcn/ui card component with TailwindCSS styling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            ℹ Error: Cannot find module '@/assets/css/main.css' imported from
            'virtual:nuxt:%2Fhome%2Fnamnguyen%2Fwork_space%2Fnuxt-test%2F.nuxt%2Fcss.mjs'.
            - If you rely on tsconfig.json's "paths" to resolve modules, please
            install "vite-tsconfig-paths" plugin to handle module resolution. -
            Make sure you don't have relative aliases in your Vitest config. Use
            absolute paths instead. Read more:
            https://vitest.dev/guide/common-errors
            <Button>Click me</Button>
          </CardContent>
        </Card>

        <!-- Button Variants -->
        <Card class="p-6">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
          </CardHeader>
          <CardContent class="space-y-2">
            <Button
              variant="default"
              class="w-full"
            >
              Default
            </Button>
            <Button
              variant="secondary"
              class="w-full"
            >
              Secondary
            </Button>
            <Button
              variant="outline"
              class="w-full"
            >
              Outline
            </Button>
            <Button
              variant="ghost"
              class="w-full"
            >
              Ghost
            </Button>
          </CardContent>
        </Card>

        <!-- Colors Test -->
        <Card class="p-6">
          <CardHeader>
            <CardTitle>Color System</CardTitle>
          </CardHeader>
          <CardContent class="space-y-2">
            <div
              class="h-8 bg-primary rounded flex items-center justify-center text-primary-foreground text-sm"
            >
              Primary
            </div>
            <div
              class="h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground text-sm"
            >
              Secondary
            </div>
            <div
              class="h-8 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm"
            >
              Muted
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Success Message -->
      <Card class="mt-8">
        <CardContent class="p-6">
          <p class="text-sm text-muted-foreground">
            🎉 TailwindCSS and shadcn/ui are now properly configured! The setup
            includes CSS variables for theming, dark mode support, and official
            shadcn/ui components.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>
