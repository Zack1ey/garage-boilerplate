import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { TeamPage as TeamPageContent } from '@/features/team/components/TeamPage'

export const metadata: Metadata = { title: 'Team' }

export default async function Team() {
  await requireAuth()
  return <TeamPageContent />
}
