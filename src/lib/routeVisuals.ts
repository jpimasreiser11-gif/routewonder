const VISUALS = {
  alpine: "/images/route-alpine-rail.svg",
  coast: "/images/route-coast.svg",
  city: "/images/route-city.svg",
  island: "/images/route-island.svg",
  mountain: "/images/route-mountain.svg",
  map: "/images/route-map.svg",
} as const;

const visualRules: Array<[RegExp, keyof typeof VISUALS]> = [
  [/(suiza|tren|alpes|annecy|bled|bohinj|bergen|fiord|burdeos|regional)/i, "alpine"],
  [/(menorca|naxos|creta|corfu|corfú|malta|islas|aran|cerdena|sicilia|madeira|kotor|bahia|bahía)/i, "island"],
  [/(costa|playa|cadiz|cádiz|galway|vicentina|morte|puglia|oeste|atlantic|litoral)/i, "coast"],
  [/(picos|skye|lofoten|capadocia|escocia|monta|atlas|japon|japón|rural|sintra|granada)/i, "mountain"],
  [/(lisboa|oporto|edimburgo|brujas|gante|utrecht|estambul|vilna|riga|tallin|mostar|sarajevo|matera|ciudad|canal|barrios)/i, "city"],
];

export function getRouteVisual(seed = "") {
  const source = String(seed);
  const match = visualRules.find(([rule]) => rule.test(source));
  return VISUALS[match?.[1] ?? "map"];
}

export function getRouteVisualSet(seed = "") {
  const primary = getRouteVisual(seed);
  const supporting = [VISUALS.map, VISUALS.city, VISUALS.coast, VISUALS.mountain, VISUALS.island, VISUALS.alpine]
    .filter((visual) => visual !== primary);
  return [primary, supporting[0], supporting[1]];
}
