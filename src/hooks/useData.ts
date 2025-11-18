import data from "@/data.json";

export function useData() {
  return data;
}

// separate hooks for convenience
export function useSiteData() {
  return data.site;
}

export function useNavigation() {
  return data.navigation;
}

export function useHeroData() {
  return data.hero;
}

export function useServicesData() {
  return data.services;
}

export function useDestinationsData() {
  return data.destinations;
}

export function useBookingData() {
  return data.booking;
}

export function useTestimonialsData() {
  return data.testimonials;
}

export function usePartnersData() {
  return data.partners;
}

export function useNewsletterData() {
  return data.newsletter;
}

export function useFooterData() {
  return data.footer;
}
