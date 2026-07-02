const e = encodeURIComponent

export const CONTACT_SUPPLY = `/contact?subject=${e('Supply Partnership')}&message=${e('Hi Agrofini,\n\nI am interested in becoming a direct supply partner. I would like to discuss crop availability, supply volumes, and delivery terms.\n\nPlease get in touch at your earliest convenience.')}`

export const CONTACT_WHOLESALE = `/contact?subject=${e('Wholesale / Market Supply')}&message=${e('Hi Agrofini,\n\nI am interested in direct wholesale supply from your farm for my market or distribution operation. I would like to discuss volumes, crop availability, and delivery logistics.')}`

export const CONTACT_INVEST = `/contact?subject=${e('Investment Interest')}&message=${e('Hi Agrofini,\n\nI am interested in exploring investment opportunities with Agrofini West Africa. Please get in touch to discuss the current investment proposition.')}`

export const CONTACT_FOUNDING = `/contact?subject=${e('Founding Partner Enquiry')}&message=${e('Hi Agrofini,\n\nI am interested in a Founding Partner position at the Centre of Excellence. I would like to discuss available categories and what the founding partnership programme involves in practice.')}`

export const CONTACT_BRIEFING = `/contact?subject=${e('Founding Partner Briefing')}&message=${e('Hi Agrofini,\n\nI would like to schedule a Founding Partner Briefing — a 30-minute conversation to learn more about the Centre of Excellence and available founding partnership categories. No commitment required.')}`

export const CONTACT_FARM_VISIT = `/contact?subject=${e('Farm Visit Request')}&message=${e('Hi Agrofini,\n\nI would like to arrange a visit to your farm to see your operations. Please get in touch to coordinate a suitable time.')}`

export const contactPartner = (category: string) =>
  `/contact?subject=${e('Founding Partner Enquiry')}&message=${e(`Hi Agrofini,\n\nI am interested in the ${category} Founding Partner position at the Centre of Excellence. I would like to discuss what this category entails, what I would demonstrate, and the next steps to confirm the position.`)}`
