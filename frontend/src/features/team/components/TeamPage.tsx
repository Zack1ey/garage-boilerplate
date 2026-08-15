import { TEAM } from '@/features/team/team.data'
import { TeamRoster } from '@/features/team/components/TeamRoster'

// Local design tokens for this feature only, scoped to `.team-theme` so they
// don't leak into the rest of the app's Tailwind theme. Defined as a plain
// <style> tag (not Tailwind config) so a light/dark pair can live next to the
// component they style — swap to globals.css if this look gets reused elsewhere.
export function TeamPage() {
  return (
    <div className="team-theme rounded-3xl bg-[--paper] px-6 py-10 sm:px-10">
      <style>{`
        .team-theme {
          --paper: #F2EEE3;
          --paper-raised: #FFFFFF;
          --ink: #24352E;
          --ink-soft: #5C6B66;
          --hairline: rgba(36, 53, 46, 0.12);
          --avatar-ink: #FFFFFF;
        }
        @media (prefers-color-scheme: dark) {
          .team-theme {
            --paper: #171E1A;
            --paper-raised: #1F2823;
            --ink: #ECE7DA;
            --ink-soft: #9CAEA6;
            --hairline: rgba(236, 231, 218, 0.12);
            --avatar-ink: #171E1A;
          }
        }
      `}</style>

      <header className="mb-2 flex flex-wrap items-center gap-4">
        <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#4B7A64] text-2xl font-bold text-[--avatar-ink] shadow-[0_3px_0_rgba(0,0,0,0.18)]">
          {TEAM.number}
        </div>
        <h1 className="m-0 text-3xl font-semibold tracking-tight text-[--ink]">{TEAM.name}</h1>
      </header>

      <p className="mb-10 max-w-[44ch] text-base text-[--ink-soft]">{TEAM.blurb}</p>

      <TeamRoster />
    </div>
  )
}