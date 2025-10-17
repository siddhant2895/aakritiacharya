import { sicilyExperiences, sicilyStays } from './sicily.js';
import { viennaExperiences, viennaStays } from './vienna.js';
import { mallorcaExperiences, mallorcaStays } from './mallorca.js';

const destinationMap = {
  sicily: {
    name: 'Sicily, Italy',
    heroClass: 'sicily-hero',
    footerTitle: 'Plan Your Sicilian Journey',
    path: '/destinations/sicily',
    experiences: sicilyExperiences,
    stays: sicilyStays,
  },
  vienna: {
    name: 'Vienna, Austria',
    heroClass: 'vienna-hero',
    footerTitle: 'Plan Your Viennese Escape',
    path: '/destinations/vienna',
    experiences: viennaExperiences,
    stays: viennaStays,
  },
  mallorca: {
    name: 'Mallorca, Spain',
    heroClass: 'mallorca-hero',
    footerTitle: 'Design Your Mallorcan Retreat',
    path: '/destinations/mallorca',
    experiences: mallorcaExperiences,
    stays: mallorcaStays,
  },
};

const typeLabels = {
  experiences: 'Experience',
  stays: 'Stay',
};

export function getDestinationDetail(destinationKey, type, slug) {
  const normalizedType = type?.toLowerCase();
  const destination = destinationMap[destinationKey];
  if (!destination) {
    return null;
  }

  const collection = destination[normalizedType];
  if (!Array.isArray(collection)) {
    return null;
  }

  const item = collection.find((entry) => entry.slug === slug);
  if (!item) {
    return null;
  }

  return {
    destinationKey,
    destinationName: destination.name,
    heroClass: destination.heroClass,
    footerTitle: destination.footerTitle,
    backPath: destination.path,
    typeLabel: typeLabels[normalizedType] ?? 'Story',
    item,
  };
}

export function getDestination(destinationKey) {
  return destinationMap[destinationKey] ?? null;
}
