import { useLocalStorage } from '../../hooks/useLocalStorage'
import type { Language } from '../../types'

export default function SettingsPage() {
  const [language, setLanguage] = useLocalStorage<Language | null>('velorah-language', null)
  const [displayName, setDisplayName] = useLocalStorage('velorah-display-name', 'Student')
  return <><div className="page-heading"><p className="page-eyebrow">PREFERENCES</p><h1>Learning <span>settings.</span></h1><p>Adjust the local preferences used by this frontend preview.</p></div><div className="settings-panel"><label>Display name<input value={displayName} onChange={e => setDisplayName(e.target.value)} /></label><label>Preferred programming language<select value={language ?? ''} onChange={e => setLanguage((e.target.value || null) as Language | null)}><option value="">Not selected</option><option value="Python">Python</option><option value="Java">Java</option></select></label><p className="small-disclaimer">These preferences are saved in this browser only. Account-wide settings will require backend authentication and persistence.</p></div></>
}
