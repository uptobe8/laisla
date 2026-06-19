export type Screen = 'home' | 'select' | 'game' | 'ending';
export type Overlay = null | 'pause' | 'map' | 'inventory' | 'missions' | 'settings';

export type CharacterId = 'lala' | 'lety' | 'isa' | 'patri' | 'luis' | 'fran' | 'clara' | 'jesucristo' | 'aitor';

export type Character = {
  id: CharacterId;
  name: string;
  role: string;
  special: string;
  description: string;
  color: string;
  accent: string;
  modelUrl: string;
  scale: number;
};

export type Collectible = {
  id: string;
  label: string;
  zone: string;
  description: string;
};

export type GameSettings = {
  quality: 'medium' | 'high';
  sound: boolean;
  cameraShake: boolean;
};

export type SaveState = {
  characterId: CharacterId;
  collected: string[];
  started: boolean;
  settings: GameSettings;
};
