'use client'

import { useState } from 'react'
import styles from './FestivalInscription.module.css'

type Profile = 'participant' | 'benevole' | 'association'

const CreneauxOptions = ['Matin (9h-13h)', 'Après-midi (13h-18h)', 'Journée complète']
const RolesOptions = ['Accueil', 'Animation', 'Logistique', 'Communication', 'Premiers secours', 'Médiation']

export default function FestivalInscription() {
  const [activeProfile, setActiveProfile] = useState<Profile>('participant')

  // Participant state
  const [pPrenom, setPPrenom] = useState('')
  const [pNom, setPNom] = useState('')
  const [pEmail, setPEmail] = useState('')
  const [pTel, setPTel] = useState('')
  const [pAssistance, setPAssistance] = useState('')
  const [pRgpd1, setPRgpd1] = useState(false)
  const [pRgpd2, setPRgpd2] = useState(false)
  const [pRgpd3, setPRgpd3] = useState(false)

  // Bénévole state
  const [bPrenom, setBPrenom] = useState('')
  const [bNom, setBNom] = useState('')
  const [bAge, setBAge] = useState('')
  const [bEmail, setBEmail] = useState('')
  const [bTel, setBTel] = useState('')
  const [bCreneaux, setBCreneaux] = useState<string[]>([])
  const [bRoles, setBRoles] = useState<string[]>([])
  const [bRgpd1, setBRgpd1] = useState(false)
  const [bRgpd2, setBRgpd2] = useState(false)
  const [bRgpd3, setBRgpd3] = useState(false)

  // Association state
  const [aNom, setANom] = useState('')
  const [aContact, setAContact] = useState('')
  const [aEmail, setAEmail] = useState('')
  const [aTel, setATel] = useState('')
  const [aMessage, setAMessage] = useState('')
  const [aRgpd1, setARgpd1] = useState(false)
  const [aRgpd2, setARgpd2] = useState(false)

  const toggleCreneau = (c: string) => {
    setBCreneaux(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])
  }
  const toggleRole = (r: string) => {
    setBRoles(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r])
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    alert(`Inscription "${activeProfile}" envoyée !`)
  }

  return (
    <div className={styles.appWrapper}>
        {/* Scrollable content */}
        <div className={styles.content}>
          {/* Profile tabs */}
          <div className={styles.profileTabs}>
            {(['participant', 'benevole', 'association'] as Profile[]).map(p => (
              <button
                key={p}
                className={`${styles.tab} ${activeProfile === p ? styles.tabActive : ''}`}
                onClick={() => setActiveProfile(p)}
              >
                {p === 'participant' ? 'Participant' : p === 'benevole' ? 'Bénévole' : 'Association'}
              </button>
            ))}
          </div>

          {/* === PARTICIPANT FORM === */}
          {activeProfile === 'participant' && (
            <div className={styles.form}>
              <h2 className={styles.formTitle}>Je veux participer</h2>

              <div className={styles.field}>
                <label className={styles.label}>PRÉNOM *</label>
                <input className={styles.input} placeholder="Votre prénom" value={pPrenom} onChange={e => setPPrenom(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>NOM *</label>
                <input className={styles.input} placeholder="Votre nom" value={pNom} onChange={e => setPNom(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>EMAIL *</label>
                <input className={styles.input} type="email" placeholder="votre@email.fr" value={pEmail} onChange={e => setPEmail(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>TÉLÉPHONE</label>
                <input className={styles.input} type="tel" placeholder="06 12 34 56 78" value={pTel} onChange={e => setPTel(e.target.value)} />
              </div>
              <div className={styles.field}>
                <select className={styles.select} value={pAssistance} onChange={e => setPAssistance(e.target.value)}>
                  <option value="">J&apos;ai besoin d'une assistance particulière</option>
                  <option value="pmr">Accessibilité PMR</option>
                  <option value="visuel">Handicap visuel</option>
                  <option value="auditif">Handicap auditif</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={pRgpd1} onChange={e => setPRgpd1(e.target.checked)} />
                  <span>J'accepte que mes données personnelles (nom, prénom, email) soient traitées pour la gestion de mon inscription et l'envoi de mon billet. *</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={pRgpd2} onChange={e => setPRgpd2(e.target.checked)} />
                  <span>J'accepte le traitement de mes données relatives à mes besoins d'accessibilité afin d'assurer mon accueil personnalisé lors du festival.</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={pRgpd3} onChange={e => setPRgpd3(e.target.checked)} />
                  <span>J'accepte de recevoir des informations sur les futurs événements de Solinouv par email.</span>
                </label>
              </div>

              <button className={styles.submitBtn} onClick={handleSubmit}>S'inscrire au festival</button>
            </div>
          )}

          {/* === BÉNÉVOLE FORM === */}
          {activeProfile === 'benevole' && (
            <div className={styles.form}>
              <h2 className={styles.formTitle}>Je veux être bénévole</h2>

              <div className={styles.field}>
                <label className={styles.label}>PRÉNOM *</label>
                <input className={styles.input} placeholder="Votre prénom" value={bPrenom} onChange={e => setBPrenom(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>NOM *</label>
                <input className={styles.input} placeholder="Votre nom" value={bNom} onChange={e => setBNom(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>ÂGE *</label>
                <input className={styles.input} type="number" placeholder="Votre âge" value={bAge} onChange={e => setBAge(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>EMAIL *</label>
                <input className={styles.input} type="email" placeholder="votre@email.fr" value={bEmail} onChange={e => setBEmail(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>TÉLÉPHONE</label>
                <input className={styles.input} type="tel" placeholder="06 12 34 56 78" value={bTel} onChange={e => setBTel(e.target.value)} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>CRÉNEAUX DISPONIBLES</label>
                <div className={styles.pillGroup}>
                  {CreneauxOptions.map(c => (
                    <button
                      key={c}
                      type="button"
                      className={`${styles.pill} ${bCreneaux.includes(c) ? styles.pillActive : ''}`}
                      onClick={() => toggleCreneau(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>RÔLES SOUHAITÉS</label>
                <div className={styles.tagGroup}>
                  {RolesOptions.map(r => (
                    <button
                      key={r}
                      type="button"
                      className={`${styles.tag} ${bRoles.includes(r) ? styles.tagActive : ''}`}
                      onClick={() => toggleRole(r)}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={bRgpd1} onChange={e => setBRgpd1(e.target.checked)} />
                  <span>J'accepte que mes données personnelles (nom, prénom, email) soient traitées pour la gestion de mon inscription et l'envoi de mon billet. *</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={bRgpd2} onChange={e => setBRgpd2(e.target.checked)} />
                  <span>J'accepte le traitement de mes données relatives à mes besoins d'accessibilité afin d'assurer mon accueil personnalisé lors du festival.</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={bRgpd3} onChange={e => setBRgpd3(e.target.checked)} />
                  <span>J'accepte de recevoir des informations sur les futurs événements de Solinouv par email.</span>
                </label>
              </div>

              <button className={styles.submitBtn} onClick={handleSubmit}>S'inscrire au festival</button>
            </div>
          )}

          {/* === ASSOCIATION FORM === */}
          {activeProfile === 'association' && (
            <div className={styles.form}>
              <h2 className={styles.formTitle}>Je représente une association</h2>

              <div className={styles.field}>
                <label className={styles.label}>NOM DE L'ASSOCIATION *</label>
                <input className={styles.input} placeholder="Nom de l'association" value={aNom} onChange={e => setANom(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>PRÉNOM DU CONTACT *</label>
                <input className={styles.input} placeholder="Prénom du contact" value={aContact} onChange={e => setAContact(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>EMAIL DU CONTACT *</label>
                <input className={styles.input} type="email" placeholder="votre@email.fr" value={aEmail} onChange={e => setAEmail(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>TÉLÉPHONE</label>
                <input className={styles.input} type="tel" placeholder="06 12 34 56 78" value={aTel} onChange={e => setATel(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>MESSAGE</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Présentez votre association, ses motivations, les activités que vous souhaitez proposer..."
                  value={aMessage}
                  onChange={e => setAMessage(e.target.value)}
                  rows={4}
                />
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={aRgpd1} onChange={e => setARgpd1(e.target.checked)} />
                  <span>J'accepte que mes données personnelles (nom, prénom, email) soient traitées pour la gestion de mon inscription et l'envoi de mon billet. *</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" checked={aRgpd2} onChange={e => setARgpd2(e.target.checked)} />
                  <span>J'accepte de recevoir des informations sur les futurs événements de Solinouv par email.</span>
                </label>
              </div>

              <button className={styles.submitBtn} onClick={handleSubmit}>S'inscrire au festival</button>
            </div>
          )}
        </div>
    </div>
  )
}
