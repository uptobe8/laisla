import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  Backpack,
  Check,
  ChevronRight,
  Eye,
  Footprints,
  ListChecks,
  Map,
  Pause,
  Play,
  RotateCcw,
  Settings,
  Sparkles,
  Volume2,
  VolumeX,
  Zap,
} from 'lucide-react';
import { Joystick } from './components/Joystick';
import { Modal } from './components/Modal';
import { characters, collectibles, defaultSettings } from './game/data';
import { GameScene } from './game/GameScene';
import type { CharacterId, GameSettings, Overlay, SaveState, Screen } from './game/types';

const saveKey = 'la-isla-3d-save-v4';

const readSave = (): SaveState => {
  try {
    const stored = localStorage.getItem(saveKey);
    if (!stored) throw new Error('empty');
    const parsed = JSON.parse(stored) as Partial<SaveState>;
    return {
      characterId: parsed.characterId ?? 'lala',
      collected: Array.isArray(parsed.collected) ? parsed.collected : [],
      started: Boolean(parsed.started),
      settings: { ...defaultSettings, ...(parsed.settings ?? {}) },
    };
  } catch {
    return { characterId: 'lala', collected: [], started: false, settings: defaultSettings };
  }
};

const action = (detail: 'jump' | 'interact' | 'special') => {
  window.dispatchEvent(new CustomEvent('isla:action', { detail }));
};

function App() {
  const [save, setSave] = useState<SaveState>(readSave);
  const [screen, setScreen] = useState<Screen>('home');
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageKey, setMessageKey] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const character = useMemo(
    () => characters.find((entry) => entry.id === save.characterId) ?? characters[0],
    [save.characterId],
  );

  useEffect(() => {
    localStorage.setItem(saveKey, JSON.stringify(save));
  }, [save]);

  useEffect(() => {
    const audio = new Audio('./audio/la-isla-fondo.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.36;
    audioRef.current = audio;
    const onEnded = () => setMusicPlaying(false);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.pause();
      audio.removeEventListener('ended', onEnded);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!message) return undefined;
    const timer = window.setTimeout(() => setMessage(''), 2300);
    return () => window.clearTimeout(timer);
  }, [message, messageKey]);

  const notify = useCallback((text: string) => {
    setMessage(text);
    setMessageKey((value) => value + 1);
  }, []);

  const collect = useCallback((id: string) => {
    setSave((current) => current.collected.includes(id)
      ? current
      : { ...current, collected: [...current.collected, id], started: true });
  }, []);

  const playMusic = () => {
    if (!save.settings.sound || !audioRef.current) return;
    audioRef.current.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
    setMusicPlaying(false);
  };

  const setSoundEnabled = (enabled: boolean) => {
    updateSettings({ sound: enabled });
    if (enabled && audioRef.current) audioRef.current.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
    if (!enabled) pauseMusic();
  };

  const begin = (id: CharacterId) => {
    playMusic();
    setSave((current) => ({ ...current, characterId: id, started: true }));
    setLoading(true);
    setOverlay(null);
    setScreen('game');
  };

  const newGame = () => {
    playMusic();
    setSave((current) => ({ ...current, collected: [], started: false }));
    setOverlay(null);
    setScreen('select');
  };

  const resume = () => {
    playMusic();
    setLoading(true);
    setOverlay(null);
    setScreen('game');
  };

  const updateSettings = (next: Partial<GameSettings>) => {
    setSave((current) => ({ ...current, settings: { ...current.settings, ...next } }));
  };

  if (screen === 'home') {
    return (
      <main className="home-screen">
        <div className="home-noise" />
        <div className="home-orbit home-orbit-one" />
        <div className="home-orbit home-orbit-two" />
        <header className="home-header">
          <span>LA ISLA 26</span>
          <button className="home-music-button" onClick={() => (musicPlaying ? pauseMusic() : playMusic())}>
            {musicPlaying ? <Volume2 size={17} /> : <VolumeX size={17} />}
            {musicPlaying ? 'Música activada' : 'Activar música'}
          </button>
          <span>ISLA DEL BURGUILLO · ÁVILA</span>
        </header>
        <section className="home-hero">
          <div className="home-copy">
            <p className="eyebrow">Aventura gráfica cinematográfica</p>
            <h1>LA ISLA<br /><em>RECUERDA</em></h1>
            <p className="home-lead">Vuelve al festival. Elige a tu personaje, explora la muralla, la playa, el embarque y el escenario, y recupera todos los recuerdos antes del último barco.</p>
            <div className="home-actions">
              <button className="primary-button" onClick={newGame}><Play size={20} fill="currentColor" /> Nueva partida</button>
              {save.started && (
                <button className="secondary-button" onClick={resume}><Footprints size={20} /> Continuar · {save.collected.length}/{collectibles.length}</button>
              )}
            </div>
          </div>
          <div className="island-emblem" aria-hidden="true">
            <div className="emblem-sun" />
            <div className="emblem-island"><span /><span /><span /></div>
            <div className="emblem-water" />
          </div>
        </section>
        <footer className="home-footer">
          <span>9 personajes</span><span>8 recuerdos</span><span>Mapa 3D explorable</span><span>Guardado automático</span>
        </footer>
      </main>
    );
  }

  if (screen === 'select') {
    return (
      <main className="select-screen">
        <header className="select-header">
          <button className="back-button" onClick={() => setScreen('home')}><ArrowLeft size={19} /> Volver</button>
          <div><p className="eyebrow">Antes de desembarcar</p><h1>Elige tu personaje</h1></div>
          <span className="select-counter">01 / {String(characters.length).padStart(2, '0')}</span>
        </header>
        <section className="character-grid">
          {characters.map((entry, index) => (
            <article key={entry.id} className="character-card" style={{ '--character': entry.color, '--accent': entry.accent } as React.CSSProperties}>
              <div className="character-visual">
                <span className="character-number">0{index + 1}</span>
                <div className="character-aura" />
                <div className="character-monogram">{entry.name.slice(0, 1)}</div>
                <div className="model-chip">Modelo humano 3D animado</div>
              </div>
              <div className="character-copy">
                <p className="character-role">{entry.role}</p>
                <h2>{entry.name}</h2>
                <div className="special-line"><Sparkles size={16} /> {entry.special}</div>
                <p>{entry.description}</p>
                <button onClick={() => begin(entry.id)}>Jugar con {entry.name}<ChevronRight size={18} /></button>
              </div>
            </article>
          ))}
        </section>
      </main>
    );
  }

  if (screen === 'ending') {
    return (
      <main className="ending-screen">
        <div className="ending-light" />
        <div className="ending-content">
          <p className="eyebrow">Misión completada</p>
          <h1>La isla<br />recuerda</h1>
          <p>Has recuperado los {collectibles.length} recuerdos y desbloqueado el último amanecer del festival.</p>
          <div className="ending-stats">
            <div><strong>{collectibles.length}</strong><span>Recuerdos</span></div>
            <div><strong>{character.name}</strong><span>Personaje</span></div>
            <div><strong>100%</strong><span>Isla explorada</span></div>
          </div>
          <button className="primary-button" onClick={newGame}><RotateCcw size={20} /> Volver a jugar</button>
          <button className="ending-home" onClick={() => setScreen('home')}>Volver al inicio</button>
        </div>
      </main>
    );
  }

  return (
    <main className="game-screen">
      <GameScene
        character={character}
        initialCollected={save.collected}
        paused={overlay !== null || loading}
        settings={save.settings}
        onCollected={collect}
        onComplete={() => { setOverlay(null); setScreen('ending'); }}
        onReady={() => setLoading(false)}
        onMessage={notify}
      />

      <header className="game-hud game-control">
        <div className="hud-character">
          <div className="hud-avatar" style={{ background: character.color }}>{character.name.slice(0, 1)}</div>
          <div><span>{character.role}</span><strong>{character.name}</strong></div>
        </div>
        <div className="hud-mission">
          <span>Misión principal</span>
          <strong>Recupera los recuerdos</strong>
          <div className="progress-track"><div style={{ width: `${(save.collected.length / collectibles.length) * 100}%` }} /></div>
          <small>{save.collected.length} de {collectibles.length}</small>
        </div>
        <button className="hud-pause" onClick={() => setOverlay('pause')} aria-label="Pausar"><Pause size={22} /></button>
      </header>

      <nav className="quick-menu game-control" aria-label="Menú del juego">
        <button onClick={() => setOverlay('map')}><Map size={19} /><span>Mapa</span></button>
        <button onClick={() => setOverlay('inventory')}><Backpack size={19} /><span>Inventario</span></button>
        <button onClick={() => setOverlay('missions')}><ListChecks size={19} /><span>Misiones</span></button>
        <button onClick={() => setOverlay('settings')}><Settings size={19} /><span>Ajustes</span></button>
        <button onClick={() => (musicPlaying ? pauseMusic() : playMusic())}>{musicPlaying ? <Volume2 size={19} /> : <VolumeX size={19} />}<span>Música</span></button>
      </nav>

      <div className="game-controls">
        <Joystick disabled={overlay !== null || loading} />
        <div className="action-cluster game-control">
          <button className="round-action jump-action" onPointerDown={() => action('jump')}><Footprints size={21} /><span>Saltar</span></button>
          <button className="round-action interact-action" onPointerDown={() => action('interact')}><Eye size={22} /><span>Abrir</span></button>
          <button className="special-action" onPointerDown={() => action('special')} style={{ '--special': character.color } as React.CSSProperties}>
            <Zap size={22} fill="currentColor" /><span>{character.special}</span>
          </button>
        </div>
      </div>

      <div className={`game-toast ${message ? 'visible' : ''}`} key={messageKey}>{message}</div>
      <div className="desktop-hint">WASD · ratón para cámara · espacio · E · Q</div>

      {loading && (
        <div className="loading-layer">
          <div className="loading-spinner"><span /><span /><span /></div>
          <p>Cargando personaje y mundo 3D</p>
          <small>Preparando playa, muralla, escenario y animaciones</small>
        </div>
      )}

      {overlay === 'pause' && (
        <Modal title="Partida pausada" eyebrow="La Isla 26" onClose={() => setOverlay(null)}>
          <div className="pause-character"><div style={{ background: character.color }}>{character.name.slice(0, 1)}</div><span><small>Jugando con</small><strong>{character.name}</strong></span></div>
          <button className="menu-button primary" onClick={() => setOverlay(null)}><Play size={19} /> Continuar</button>
          <div className="menu-grid">
            <button className="menu-button" onClick={() => setOverlay('map')}><Map size={19} /> Mapa</button>
            <button className="menu-button" onClick={() => setOverlay('inventory')}><Backpack size={19} /> Inventario</button>
            <button className="menu-button" onClick={() => setOverlay('missions')}><ListChecks size={19} /> Misiones</button>
            <button className="menu-button" onClick={() => setOverlay('settings')}><Settings size={19} /> Ajustes</button>
          </div>
          <button className="menu-button" onClick={() => setScreen('select')}><RotateCcw size={19} /> Cambiar personaje</button>
          <button className="danger-button" onClick={newGame}>Reiniciar progreso</button>
        </Modal>
      )}

      {overlay === 'map' && (
        <Modal title="Mapa de la isla" eyebrow="Exploración" onClose={() => setOverlay(null)} wide>
          <div className="island-map">
            <div className="map-water-lines" />
            <div className="map-island-shape">
              {collectibles.map((item, index) => (
                <div key={item.id} className={`map-marker marker-${index + 1} ${save.collected.includes(item.id) ? 'done' : ''}`} title={item.zone}>
                  {save.collected.includes(item.id) ? <Check size={13} /> : index + 1}
                  <span>{item.zone}</span>
                </div>
              ))}
              <div className="map-zone map-stage">ESCENARIO</div>
              <div className="map-zone map-wall">MURALLA</div>
              <div className="map-zone map-dock">EMBARQUE</div>
              <div className="map-zone map-beach">PLAYA</div>
            </div>
          </div>
          <p className="modal-note">Los marcadores naranjas todavía esconden un recuerdo. Los verdes ya están completados.</p>
        </Modal>
      )}

      {overlay === 'inventory' && (
        <Modal title="Inventario" eyebrow={`${save.collected.length} de ${collectibles.length} objetos`} onClose={() => setOverlay(null)} wide>
          <div className="inventory-grid">
            {collectibles.map((item) => {
              const found = save.collected.includes(item.id);
              return (
                <article key={item.id} className={`inventory-item ${found ? 'found' : 'locked'}`}>
                  <div className="inventory-icon">{found ? <Check size={24} /> : '?'}</div>
                  <div><span>{item.zone}</span><h3>{found ? item.label : 'Recuerdo desconocido'}</h3><p>{found ? item.description : 'Explora esta zona para descubrirlo.'}</p></div>
                </article>
              );
            })}
          </div>
        </Modal>
      )}

      {overlay === 'missions' && (
        <Modal title="Misiones" eyebrow="Diario del isleño" onClose={() => setOverlay(null)} wide>
          <section className="mission-main">
            <div><span>Misión principal</span><h3>La isla recuerda</h3><p>Recupera los ocho objetos que resumen el fin de semana antes del último barco.</p></div>
            <strong>{save.collected.length}/{collectibles.length}</strong>
          </section>
          <div className="mission-list">
            <article className={save.collected.length >= 3 ? 'done' : ''}><Check size={18} /><div><h4>Primeras pistas</h4><p>Encuentra tres recuerdos.</p></div><span>{Math.min(save.collected.length, 3)}/3</span></article>
            <article className={save.collected.includes('mapa') ? 'done' : ''}><Check size={18} /><div><h4>El camino de vuelta</h4><p>Recupera el mapa del embarque.</p></div><span>{save.collected.includes('mapa') ? '1/1' : '0/1'}</span></article>
            <article className={save.collected.includes('golosinas') ? 'done' : ''}><Check size={18} /><div><h4>Mi chillout, mis normas</h4><p>Encuentra la caja de golosinas.</p></div><span>{save.collected.includes('golosinas') ? '1/1' : '0/1'}</span></article>
            <article className={save.collected.length === collectibles.length ? 'done' : ''}><Sparkles size={18} /><div><h4>Hasta el amanecer</h4><p>Completa toda la colección.</p></div><span>{save.collected.length}/{collectibles.length}</span></article>
          </div>
        </Modal>
      )}

      {overlay === 'settings' && (
        <Modal title="Ajustes" eyebrow="Experiencia" onClose={() => setOverlay(null)}>
          <div className="settings-list">
            <label><span>{save.settings.sound ? <Volume2 size={20} /> : <VolumeX size={20} />}<b>Sonido</b><small>Efectos de interacción y ambiente.</small></span><input type="checkbox" checked={save.settings.sound} onChange={(event) => setSoundEnabled(event.target.checked)} /></label>
            <label><span><Sparkles size={20} /><b>Movimiento de cámara</b><small>Vibración sutil en habilidades especiales.</small></span><input type="checkbox" checked={save.settings.cameraShake} onChange={(event) => updateSettings({ cameraShake: event.target.checked })} /></label>
            <div className="quality-row"><span><Zap size={20} /><b>Calidad gráfica</b><small>El cambio recarga la escena 3D.</small></span><div><button className={save.settings.quality === 'medium' ? 'active' : ''} onClick={() => updateSettings({ quality: 'medium' })}>Media</button><button className={save.settings.quality === 'high' ? 'active' : ''} onClick={() => updateSettings({ quality: 'high' })}>Alta</button></div></div>
          </div>
        </Modal>
      )}
    </main>
  );
}

export default App;
