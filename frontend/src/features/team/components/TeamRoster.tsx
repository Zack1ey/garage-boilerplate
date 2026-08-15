import { TEAM_MEMBERS, ROLE_COLOR, ROLE_LABEL, initials } from '@/features/team/team.data'

export function TeamRoster() {
  return (
    <div>
      <div className="mb-4 flex items-baseline gap-2.5">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.14em] text-[--ink-soft]">
          Roster
        </p>
        <div className="h-px flex-1 bg-[--hairline]" />
      </div>

      <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {TEAM_MEMBERS.map((member) => {
          const color = ROLE_COLOR[member.role]
          return (
            <li
              key={member.id}
              tabIndex={0}
              className="flex items-center gap-3.5 rounded-2xl border border-[--hairline] bg-[--paper-raised] px-5 py-4 transition-transform hover:-translate-y-0.5 hover:shadow-md focus:-translate-y-0.5 focus:shadow-md focus:outline-none"
            >
              <div
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-sm font-semibold text-[--avatar-ink]"
                style={{ background: color }}
              >
                {initials(member.name)}
              </div>
              <div>
                <p className="m-0 mb-1 text-[15px] font-semibold text-[--ink]">{member.name}</p>
                <span
                  className="inline-block rounded-full px-2.5 py-1 font-mono text-[10.5px] font-semibold tracking-wide text-[--avatar-ink]"
                  style={{ background: color }}
                >
                  {ROLE_LABEL[member.role]}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}