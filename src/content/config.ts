import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Marco Vidal"),
    category: z.enum([
      "rutas-sorprendentes",
      "ciudades-extranas",
      "destinos-secretos",
      "viaje-economico",
      "curiosidades-geograficas",
      "lugares-de-pelicula",
      "viaje-rapido",
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.number().optional(),
    tipo: z.enum(["guia", "lista", "analisis", "comparativa", "historia", "ruta", "consejo"]).optional(),
    planner: z.object({
      destination: z.string(),
      country: z.string(),
      continent: z.string().optional(),
      budget: z.enum(["low", "medium", "high"]),
      duration: z.number(),
      transport: z.array(z.enum(["car", "train", "flight", "ferry", "bus"])),
      season: z.array(z.enum(["spring", "summer", "autumn", "winter"])),
      companion: z.array(z.enum(["couple", "solo", "friends", "family"])),
      interests: z.array(z.string()),
      difficulty: z.enum(["easy", "medium", "challenging"]).optional(),
    }).optional(),
    affiliate: z.boolean().default(false),
    affiliateProgram: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
