export type Language = 'fa' | 'en';
export type Currency = 'USD' | 'TOMAN';

export interface Amenity {
  id: string;
  nameFa: string;
  nameEn: string;
  iconName: string;
}

export interface Estate {
  id: string;
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  subtitleEn: string;
  regionFa: string;
  regionEn: string;
  locationFa: string;
  locationEn: string;
  categoryFa: 'ساحل اختصاصی' | 'اسکله عمیق' | 'دریاچه کوهستانی' | 'پنت‌هاوس مارینا' | 'صخره‌ای کاسپین';
  categoryEn: 'Private Shoreline' | 'Deepwater Dock' | 'Mountain Lake' | 'Marina Penthouse' | 'Caspian Cliff';
  priceUsd: number;
  priceTomanBillion: number;
  statusFa: 'فروش اختصاصی' | 'پیش‌فروش' | 'سند شش‌دانگ ساحلی' | 'محرمانه - VIP';
  statusEn: 'Exclusive' | 'Under Contract' | 'Private Shoreline' | 'Off-Market VIP';
  landAreaSqM: number;
  builtAreaSqM: number;
  waterfrontFootageMeters: number;
  bedrooms: number;
  bathrooms: number;
  moorageCapacityFa: string;
  moorageCapacityEn: string;
  mainImage: string;
  galleryImages: string[];
  descriptionFa: string;
  descriptionEn: string;
  architecturalHighlightsFa: string[];
  architecturalHighlightsEn: string[];
  amenitiesFa: string[];
  amenitiesEn: string[];
  isOffMarket?: boolean;
  virtualTourUrl?: string;
  hasHelipad: boolean;
  yearBuilt: number;
}

export interface JournalArticle {
  id: string;
  titleFa: string;
  titleEn: string;
  categoryFa: string;
  categoryEn: string;
  authorFa: string;
  authorEn: string;
  authorRoleFa: string;
  authorRoleEn: string;
  dateFa: string;
  dateEn: string;
  readTimeFa: string;
  readTimeEn: string;
  coverImage: string;
  excerptFa: string;
  excerptEn: string;
  contentFa: string[];
  contentEn: string[];
}

export interface NeighborhoodGuide {
  id: string;
  nameFa: string;
  nameEn: string;
  waterBodyFa: string;
  waterBodyEn: string;
  coverImage: string;
  descriptionFa: string;
  descriptionEn: string;
  avgWaterfrontPriceFa: string;
  avgWaterfrontPriceEn: string;
  activeEstatesCount: number;
  highlightTagFa: string;
  highlightTagEn: string;
}
