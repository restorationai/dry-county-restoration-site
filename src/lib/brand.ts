// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "dry-county-restoration",
  displayName: "Dry County Restoration",
  shortName: "Dry County Restoration",
  legalName: "Dry County Restoration",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "",
  domain: "drycountyrestoration.com",
  canonicalUrl: "https://drycountyrestoration.com",
  phone: "(951) 667-9910",
  phoneRaw: "+19516679910",
  hideMobileHeaderCall: false,
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(951) 629-3771",
  trackingPhoneRaw: "+19516293771",
  email: "info@drycountyrestoration.com",
  hours: "24/7",
  foundedYear: "2020",
  primaryCity: "Corona",
  primaryState: "CA",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "Corona",
  addressState: "CA",
  streetAddress: "9064 Pulsar Ct. Suit I ",
  postalCode: "92883",
  lat: "33.8752945",
  lng: "-117.566444",
  placeId: "ChIJBQyutfy53IARKDqQsaEwmyQ",
  googleCid: "",
  imagesBase: "https://images.drycountyrestoration.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "G-211581WVBQ",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: ["1083555"] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: ["IICRC Certified Firm", "IICRC WRT (Water)", "IICRC ASD (Structural Drying)", "IICRC AMRT (Mold)", "OSHA Trained"] as string[],
  trustBadges: ["Licensed & Insured", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.facebook.com/drycountyrestoration/", "https://maps.google.com/maps?cid=2637755477782444584", "https://www.yelp.com/biz/dry-county-restoration-corona", "https://www.yellowpages.com/corona-ca/mip/dry-county-restoration-581383435/gallery?lid=581383435"] as string[],
  awards: [{"name": "11 Best Riverside, CA Water Damage Restoration Services", "year": "2026", "category": "Water Damage Restoration", "organizer": "Expertise.com", "url": "https://www.expertise.com/home-improvement/water-damage/california/riverside"}, {"name": "Best Water Damage Restoration Services in Ontario, CA", "year": "2026", "category": "Water Damage Restoration", "organizer": "Expertise.com", "url": "https://www.expertise.com/home-improvement/water-damage/california/ontario"}, {"name": "Best Water Damage Restoration Services in Corona, CA", "year": "2026", "category": "Water Damage Restoration", "organizer": "Expertise.com", "url": "https://www.expertise.com/home-improvement/water-damage/california/corona"}, {"name": "Best Water Damage Restoration Services in Chino, CA", "year": "2026", "category": "Water Damage Restoration", "organizer": "Expertise.com", "url": "https://www.expertise.com/home-improvement/water-damage/california/chino"}] as { name: string; year?: string | number; category?: string; organizer?: string; url?: string; image?: string }[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "5.0",
  gbpReviewCount: "97",
  gbpReviews: [
    { author: "Andrea", rating: 5, text: "Quick, knowledgeable and courteous. Thank you!", when: "October 2026" },
    { author: "Michael", rating: 5, text: "Responded quickly. Super helpful with insurance. Loved the results.", when: "October 2026" },
    { author: "Larry", rating: 5, text: "Communicative and professional.", when: "October 2026" },
    { author: "Kevin", rating: 5, text: "Great speedy service. Didn’t try to upsell anything and provided great recommendations.", when: "October 2026" },
    { author: "Phyllis", rating: 5, text: "I am extremely pleased with the work Dry County did for me. They were very friendly, thoughtful and thorough. I exactly looked forward to them coming everyday. ❤️ I highly recommend them.", when: "October 2026" },
    { author: "Leslie", rating: 5, text: "Dry County responded quickly! Steve, Bob and the team are very helpful, informative and supportive throughout the process! Highly recommend!", when: "October 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Corona, CA.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "Dry County Restoration serves Corona and the surrounding CA area with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
