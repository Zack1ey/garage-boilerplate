/**
 * Team roster — static content, not user data.
 * If this ever needs to be editable from an admin UI, promote it to a Firestore
 * `team` collection following the same pattern as `notes` in COPY-PASTE-FEATURE.md
 * (typed collection + firestore.rules + _schemaVersion). Until then, a plain
 * module keeps this simple and avoids an unnecessary read on every page load.
 */

export type Role = 'PM' | 'DEV' | 'BA' | 'UX'

export interface TeamMember {
  id: string
  name: string
  role: Role
}

export const TEAM = {
  number: '59',
  name: 'Style My Station',
  blurb: 'Unity-based VR train station experience.',
} as const

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'nathan-chow', name: 'Nathan Chow', role: 'PM' },
  { id: 'zackery-novakovic', name: 'Zackery Novakovic', role: 'DEV' },
  { id: 'anshu-shukla', name: 'Anshu Shukla', role: 'BA' },
  { id: 'edward-grimwade', name: 'Edward Grimwade', role: 'UX' },
]

export const ROLE_LABEL: Record<Role, string> = {
  PM: 'Project Manager',
  DEV: 'Developer',
  BA: 'Business Analyst',
  UX: 'UX Designer',
}

// One colour per role — used for both the avatar circle and the role pill
// on each roster card, so the mapping only lives here. Values are tuned to
// stay legible against both --paper-raised light and dark tokens below.
export const ROLE_COLOR: Record<Role, string> = {
  PM: '#D79A3C', // ochre — station signal
  DEV: '#4B7A64', // eucalyptus
  BA: '#7B8FA1', // slate — signage grey-blue
  UX: '#C97B6D', // dusty rose — platform brick
}

export function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]!.toUpperCase())
    .join('')
}
