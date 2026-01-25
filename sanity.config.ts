import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'ECC - Effet Coup de Coeur',

  projectId: process.env.VITE_SANITY_PROJECT_ID || 'nraaxdxm',
  dataset: process.env.VITE_SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
