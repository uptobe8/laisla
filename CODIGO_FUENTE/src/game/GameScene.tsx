import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import type { Character, GameSettings } from './types';
import { collectibles } from './data';

type Props = {
  character: Character;
  initialCollected: string[];
  paused: boolean;
  settings: GameSettings;
  onCollected: (id: string) => void;
  onComplete: () => void;
  onReady: () => void;
  onMessage: (message: string) => void;
};

type Interactive = THREE.Group & {
  userData: {
    id: string;
    label: string;
    opened: boolean;
    glow: THREE.Mesh;
    lid?: THREE.Object3D;
    baseY: number;
  };
};

type MoveDetail = { x: number; z: number };
type ActionDetail = 'jump' | 'interact' | 'special';

const positions: Record<string, THREE.Vector3> = {
  golosinas: new THREE.Vector3(-10, 0.3, 7),
  papas_revolconas: new THREE.Vector3(6.6, 0.35, 8.4),
  llave_water: new THREE.Vector3(15.5, 0.35, 1.8),
  carpeta_rosa: new THREE.Vector3(-6.5, 0.35, 7.2),
  pistola_agua: new THREE.Vector3(-17.3, 0.35, 6.4),
  tienda_sin_palos: new THREE.Vector3(-16.5, 0.35, 11.5),
  colchon_pinchado: new THREE.Vector3(-12.5, 0.28, -10.5),
  barca_remo: new THREE.Vector3(-18.5, 0.32, -6.8),
  dj_bueno: new THREE.Vector3(-2.7, 0.75, -15.6),
  dj_malo: new THREE.Vector3(2.7, 0.75, -15.6),
  hamaca: new THREE.Vector3(-17, 0.35, 12.5),
  fuente: new THREE.Vector3(15.8, 0.35, -2.5),
  pole_dance: new THREE.Vector3(5.8, 0.35, -13.5),
  cinta: new THREE.Vector3(4, 0.35, 8),
  cenicero: new THREE.Vector3(12, 0.25, 5),
  pulsera: new THREE.Vector3(-3, 0.35, 12),
  mapa: new THREE.Vector3(-14, 0.25, -4),
  abanico: new THREE.Vector3(0, 0.55, -14),
  melena: new THREE.Vector3(-7, 1.4, -11),
  foto: new THREE.Vector3(10, 0.8, -8),
};

const createNoiseTexture = (base: string, accent: string, size = 512) => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return new THREE.Texture();
  context.fillStyle = base;
  context.fillRect(0, 0, size, size);
  for (let index = 0; index < 11000; index += 1) {
    const alpha = Math.random() * 0.14;
    context.fillStyle = `${accent}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
    const radius = Math.random() * 2.2 + 0.3;
    context.beginPath();
    context.arc(Math.random() * size, Math.random() * size, radius, 0, Math.PI * 2);
    context.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
};

const createLabel = (text: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 132;
  const context = canvas.getContext('2d');
  if (!context) return new THREE.Sprite();
  context.fillStyle = 'rgba(5, 34, 38, 0.9)';
  context.beginPath();
  context.roundRect(12, 12, 616, 108, 34);
  context.fill();
  context.strokeStyle = 'rgba(239, 116, 53, 0.9)';
  context.lineWidth = 5;
  context.stroke();
  context.fillStyle = '#f5ead2';
  context.font = '700 35px Trebuchet MS';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 320, 66);
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map, transparent: true, depthWrite: false }));
  sprite.scale.set(4.6, 0.95, 1);
  return sprite;
};

const addPalm = (scene: THREE.Scene, x: number, z: number, scale: number, rotation: number) => {
  const group = new THREE.Group();
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x6f4930, roughness: 1 });
  for (let index = 0; index < 5; index += 1) {
    const segment = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * scale, 0.25 * scale, 1.15 * scale, 8), trunkMaterial);
    segment.position.y = 0.55 * scale + index * 0.96 * scale;
    segment.rotation.z = Math.sin(index * 0.7 + rotation) * 0.055;
    segment.castShadow = true;
    group.add(segment);
  }
  const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x285e3f, roughness: 0.82, side: THREE.DoubleSide });
  for (let index = 0; index < 9; index += 1) {
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.38 * scale, 3.2 * scale, 6), leafMaterial);
    leaf.position.y = 5.15 * scale;
    leaf.rotation.z = Math.PI / 2.2;
    leaf.rotation.y = (index / 9) * Math.PI * 2;
    leaf.position.x = Math.cos(leaf.rotation.y) * 0.9 * scale;
    leaf.position.z = Math.sin(leaf.rotation.y) * 0.9 * scale;
    leaf.castShadow = true;
    group.add(leaf);
  }
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  scene.add(group);
};

const addTent = (scene: THREE.Scene, x: number, z: number, rotation: number, color: number) => {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.ConeGeometry(2.15, 2.4, 4),
    new THREE.MeshStandardMaterial({ color, roughness: 0.9, side: THREE.DoubleSide }),
  );
  body.position.y = 1.2;
  body.rotation.y = Math.PI / 4;
  body.castShadow = true;
  const entrance = new THREE.Mesh(
    new THREE.PlaneGeometry(0.85, 1.4),
    new THREE.MeshStandardMaterial({ color: 0x1b2025, roughness: 1 }),
  );
  entrance.position.set(0, 0.75, 1.53);
  group.add(body, entrance);
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  scene.add(group);
};

const addStage = (scene: THREE.Scene) => {
  const group = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: 0x151c20, metalness: 0.65, roughness: 0.35 });
  const platform = new THREE.Mesh(new THREE.BoxGeometry(12, 1.1, 5.5), dark);
  platform.position.y = 0.55;
  platform.castShadow = true;
  platform.receiveShadow = true;
  group.add(platform);
  const trussMaterial = new THREE.MeshStandardMaterial({ color: 0x89969a, metalness: 0.9, roughness: 0.22 });
  const beams = [
    [0, 5.5, -2.4, 12.5, 0.16, 0.16],
    [-6, 3, -2.4, 0.16, 5.2, 0.16],
    [6, 3, -2.4, 0.16, 5.2, 0.16],
  ];
  beams.forEach(([x, y, z, width, height, depth]) => {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), trussMaterial);
    beam.position.set(x, y, z);
    beam.castShadow = true;
    group.add(beam);
  });
  for (let index = 0; index < 6; index += 1) {
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.28, 0.38, 12), dark);
    lamp.rotation.x = Math.PI / 2;
    lamp.position.set(-4.5 + index * 1.8, 5.15, -2.25);
    group.add(lamp);
    const light = new THREE.SpotLight([0xef7435, 0xf5d76e, 0x3bb4a6][index % 3], 38, 21, 0.28, 0.55, 1.2);
    light.position.copy(lamp.position);
    light.target.position.set(-4.5 + index * 1.8, 0, 4);
    group.add(light, light.target);
  }
  for (const x of [-4.9, 4.9]) {
    const speaker = new THREE.Mesh(new THREE.BoxGeometry(1.3, 3.1, 1.1), new THREE.MeshStandardMaterial({ color: 0x090b0c, roughness: 0.5 }));
    speaker.position.set(x, 2, 0.2);
    speaker.castShadow = true;
    group.add(speaker);
  }
  group.position.set(0, 0, -18);
  scene.add(group);
};

const addMuralla = (scene: THREE.Scene) => {
  const stone = new THREE.MeshStandardMaterial({ color: 0x756b5e, roughness: 0.96 });
  const group = new THREE.Group();
  for (const z of [-1.4, 1.4]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(16, 3.8, 1.2), stone);
    wall.position.set(0, 1.9, z);
    wall.castShadow = true;
    wall.receiveShadow = true;
    group.add(wall);
  }
  for (const x of [-7.5, 7.5]) {
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.35, 6.2, 18), stone);
    tower.position.set(x, 3.1, 0);
    tower.castShadow = true;
    tower.receiveShadow = true;
    group.add(tower);
  }
  const gate = new THREE.Mesh(new THREE.BoxGeometry(3.4, 3.2, 3.2), new THREE.MeshStandardMaterial({ color: 0x292820, roughness: 0.9 }));
  gate.position.set(0, 1.6, 0);
  group.add(gate);
  group.position.set(7, 0.2, -8.5);
  group.rotation.y = -0.38;
  scene.add(group);
};

const addDock = (scene: THREE.Scene) => {
  const wood = new THREE.MeshStandardMaterial({ color: 0x795537, roughness: 0.9 });
  const group = new THREE.Group();
  for (let index = 0; index < 8; index += 1) {
    const plank = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.18, 4.2), wood);
    plank.position.set(index * 1.28, 0, 0);
    plank.castShadow = true;
    plank.receiveShadow = true;
    group.add(plank);
  }
  for (const x of [-0.3, 3.7, 7.7]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 2.2, 10), wood);
    post.position.set(x, -0.7, 1.7);
    group.add(post);
  }
  group.position.set(-23, 0.3, -3);
  group.rotation.y = 0.12;
  scene.add(group);
  const boat = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(1.15, 4.5, 8, 18), new THREE.MeshStandardMaterial({ color: 0xf0eee6, metalness: 0.1, roughness: 0.5 }));
  hull.scale.set(1, 0.45, 1);
  hull.rotation.z = Math.PI / 2;
  hull.castShadow = true;
  boat.add(hull);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.9, 1.4), new THREE.MeshStandardMaterial({ color: 0x224d5f, roughness: 0.4 }));
  cabin.position.y = 0.5;
  boat.add(cabin);
  boat.position.set(-17.5, 0.3, -6.1);
  boat.rotation.y = 0.1;
  scene.add(boat);
};

const addBarAndChill = (scene: THREE.Scene) => {
  const bar = new THREE.Group();
  const counter = new THREE.Mesh(new THREE.BoxGeometry(7, 1.2, 1.25), new THREE.MeshStandardMaterial({ color: 0x6d4529, roughness: 0.78 }));
  counter.position.y = 0.6;
  counter.castShadow = true;
  bar.add(counter);
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.22, 3.4), new THREE.MeshStandardMaterial({ color: 0xf2e5cc, roughness: 0.85 }));
  canopy.position.y = 3.3;
  canopy.castShadow = true;
  bar.add(canopy);
  for (const x of [-3.6, 3.6]) {
    for (const z of [-1.1, 1.1]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.2, 10), new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.8, roughness: 0.3 }));
      pole.position.set(x, 1.6, z);
      bar.add(pole);
    }
  }
  bar.position.set(4, 0.2, 8);
  bar.rotation.y = -0.24;
  scene.add(bar);
  for (let index = 0; index < 8; index += 1) {
    const bean = new THREE.Mesh(new THREE.SphereGeometry(1.15, 20, 14), new THREE.MeshStandardMaterial({ color: [0xef7435, 0x225764, 0xe6c768][index % 3], roughness: 0.95 }));
    bean.scale.y = 0.48;
    bean.position.set(-11 + (index % 4) * 2.5, 0.55, 5 + Math.floor(index / 4) * 2.5);
    bean.rotation.y = index * 0.7;
    bean.castShadow = true;
    scene.add(bean);
  }
};


const makeSimplePerson = (scene: THREE.Scene, x: number, z: number, shirt: number, skin = 0xc78b63, label?: string, dance = false) => {
  const group = new THREE.Group();
  const skinMat = new THREE.MeshStandardMaterial({ color: skin, roughness: 0.72 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: shirt, roughness: 0.55, metalness: 0.05 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x241612, roughness: 0.85 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.72, 6, 12), shirtMat);
  body.position.y = 1.02;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 12), skinMat);
  head.position.y = 1.63;
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), darkMat);
  hair.position.y = 1.74;
  group.add(body, head, hair);
  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.55, 5, 8), skinMat);
    arm.position.set(side * 0.31, 1.08, 0);
    arm.rotation.z = side * (dance ? -1.05 : -0.22);
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.55, 5, 8), darkMat);
    leg.position.set(side * 0.11, 0.42, 0);
    leg.rotation.z = side * (dance ? 0.18 : 0.04);
    group.add(arm, leg);
  }
  if (label) {
    const sprite = makeLabel(label);
    sprite.position.y = 2.12;
    sprite.scale.set(3.4, 0.7, 1);
    group.add(sprite);
  }
  group.position.set(x, 0.05, z);
  group.rotation.y = Math.random() * Math.PI * 2;
  scene.add(group);
  return group;
};

const addFestivalExtras = (scene: THREE.Scene) => {
  const wood = new THREE.MeshStandardMaterial({ color: 0x7a4b27, roughness: 0.82 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xf1e1bd, roughness: 0.75 });
  const orange = new THREE.MeshStandardMaterial({ color: 0xef7435, roughness: 0.52 });
  const teal = new THREE.MeshStandardMaterial({ color: 0x0b5964, roughness: 0.55 });
  const pink = new THREE.MeshStandardMaterial({ color: 0xff7ab8, roughness: 0.5 });
  const metal = new THREE.MeshStandardMaterial({ color: 0xd5d9dc, metalness: 0.75, roughness: 0.22 });
  const waterMat = new THREE.MeshStandardMaterial({ color: 0x4aa3bc, transparent: true, opacity: 0.74, roughness: 0.2, metalness: 0.05 });

  makeSimplePerson(scene, 2.5, 9.2, 0xffffff, 0xc98b64, 'Camarero', false);
  makeSimplePerson(scene, 5.3, 9.1, 0xffffff, 0xb97858, 'Camarera', false);

  [
    [-3.8, -12.8, 0xff6b6b], [-2.2, -11.8, 0x00bbf9], [-0.5, -12.5, 0xffd166],
    [1.5, -11.7, 0x9b5de5], [3.3, -12.9, 0x2f8f83], [4.7, -11.5, 0xf15bb5],
  ].forEach(([x, z, color]) => makeSimplePerson(scene, x, z, color, 0xc98b64, undefined, true));

  const loca = makeSimplePerson(scene, 6.7, -10.6, 0xffd1dc, 0xc98b64, 'Loca festivalera', true);
  const starMat = new THREE.MeshStandardMaterial({ color: 0xff4d6d, roughness: 0.45, metalness: 0.15 });
  for (const side of [-1, 1]) {
    const star = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), starMat);
    star.position.set(side * 0.11, 1.28, 0.2);
    loca.add(star);
  }

  const toilet = new THREE.Group();
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2, 2.8, 1.8), new THREE.MeshStandardMaterial({ color: 0xe9f0f1, roughness: 0.45 }));
  cabin.position.y = 1.4;
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.55, 2.25, 0.08), new THREE.MeshStandardMaterial({ color: 0x245d70, roughness: 0.5 }));
  door.position.set(0, 1.25, 0.93);
  const sign = makeLabel('Water Moraleja · busca la llave');
  sign.position.y = 3.15;
  sign.scale.set(4.8, 0.9, 1);
  toilet.add(cabin, door, sign);
  toilet.position.set(15.8, 0.05, 2.4);
  toilet.rotation.y = -0.4;
  scene.add(toilet);

  const pinkFolder = new THREE.Group();
  const folder = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.06, 0.9), pink);
  folder.position.y = 0.52;
  folder.rotation.z = -0.14;
  pinkFolder.add(folder);
  const dust = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 8), new THREE.MeshStandardMaterial({ color: 0xf6d6ff, emissive: 0x8a3ffc, emissiveIntensity: 0.6 }));
  dust.position.set(0.35, 0.62, 0.08);
  pinkFolder.add(dust);
  pinkFolder.position.set(-6.5, 0.2, 7.2);
  scene.add(pinkFolder);

  const waterGun = new THREE.Group();
  const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.25), new THREE.MeshStandardMaterial({ color: 0x00b4d8, roughness: 0.4 }));
  gunBody.position.y = 0.65;
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.42, 0.18), orange);
  handle.position.set(-0.22, 0.42, 0);
  handle.rotation.z = -0.25;
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.65, 14), metal);
  nozzle.rotation.z = Math.PI / 2;
  nozzle.position.set(0.65, 0.68, 0);
  waterGun.add(gunBody, handle, nozzle);
  waterGun.position.set(-17.3, 0.15, 6.4);
  scene.add(waterGun);

  const collapsedTent = new THREE.Group();
  const tarp = new THREE.Mesh(new THREE.ConeGeometry(1.9, 0.45, 4), new THREE.MeshStandardMaterial({ color: 0xef7435, roughness: 0.9 }));
  tarp.position.y = 0.25;
  tarp.rotation.set(Math.PI / 2, 0.1, Math.PI / 4);
  collapsedTent.add(tarp);
  const signTent = makeLabel('Tienda sin palos');
  signTent.position.y = 1.15;
  signTent.scale.set(3.2, 0.65, 1);
  collapsedTent.add(signTent);
  collapsedTent.position.set(-16.5, 0.05, 11.5);
  scene.add(collapsedTent);

  const mattress = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.22, 1.55), new THREE.MeshStandardMaterial({ color: 0x8fd3e8, roughness: 0.65 }));
  mattress.position.set(-12.5, 0.2, -10.5);
  mattress.rotation.z = -0.12;
  mattress.scale.y = 0.38;
  scene.add(mattress);

  const rowBoat = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.75, 2.8, 8, 18), new THREE.MeshStandardMaterial({ color: 0x8f5a30, roughness: 0.72 }));
  hull.rotation.z = Math.PI / 2;
  hull.scale.y = 0.36;
  hull.position.y = 0.42;
  const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 3.2, 10), wood);
  oar.rotation.z = Math.PI / 2.9;
  oar.position.y = 0.7;
  rowBoat.add(hull, oar);
  rowBoat.position.set(-18.5, 0.05, -6.8);
  rowBoat.rotation.y = 0.35;
  scene.add(rowBoat);

  for (const [x, name, color] of [[-2.7, 'DJ Bueno', 0x2f8f83], [2.7, 'DJ Malo', 0xef7435]] as const) {
    makeSimplePerson(scene, x, -16.1, color, 0xc98b64, name, true);
    const desk = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 0.9), new THREE.MeshStandardMaterial({ color: 0x10151a, roughness: 0.45, metalness: 0.2 }));
    desk.position.set(x, 0.65, -14.8);
    scene.add(desk);
    for (const side of [-1, 1]) {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 24), metal);
      disc.rotation.x = Math.PI / 2;
      disc.position.set(x + side * 0.38, 1.05, -14.35);
      scene.add(disc);
    }
  }

  const hammock = new THREE.Group();
  const cloth = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.08, 0.78), new THREE.MeshStandardMaterial({ color: 0xf5ead2, roughness: 0.82 }));
  cloth.position.y = 0.82;
  cloth.rotation.z = -0.06;
  const ropeA = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 3.7, 10), metal);
  ropeA.rotation.z = Math.PI / 2;
  ropeA.position.y = 0.95;
  hammock.add(cloth, ropeA);
  hammock.position.set(-17, 0.1, 12.5);
  scene.add(hammock);

  const fountain = new THREE.Group();
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.2, 0.34, 32), metal);
  basin.position.y = 0.25;
  const water = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.12, 32), waterMat);
  water.position.y = 0.48;
  const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.055, 1.35, 12), waterMat);
  jet.position.y = 1.12;
  const light = new THREE.PointLight(0x77d9ff, 6, 6, 1.4);
  light.position.y = 1.4;
  fountain.add(basin, water, jet, light);
  fountain.position.set(15.8, 0.05, -2.5);
  scene.add(fountain);

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 3.5, 18), metal);
  pole.position.set(5.8, 1.75, -13.5);
  pole.castShadow = true;
  scene.add(pole);
  const poleBase = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.12, 30), teal);
  poleBase.position.set(5.8, 0.08, -13.5);
  scene.add(poleBase);
};

const createInteractive = (itemId: string) => {
  const item = collectibles.find((entry) => entry.id === itemId);
  const group = new THREE.Group() as Interactive;
  const position = positions[itemId] ?? new THREE.Vector3(0, 0.3, 0);
  const metal = new THREE.MeshStandardMaterial({ color: 0xe0a84d, metalness: 0.72, roughness: 0.25 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x17363d, metalness: 0.25, roughness: 0.55 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xeee2c9, roughness: 0.75 });
  const orange = new THREE.MeshStandardMaterial({ color: 0xef7435, roughness: 0.55 });
  let lid: THREE.Object3D | undefined;
  if (itemId === 'cinta') {
    const caseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.28, 28), orange);
    caseMesh.rotation.x = Math.PI / 2;
    caseMesh.position.y = 0.66;
    group.add(caseMesh);
    const tape = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.08, 0.16), cream);
    tape.position.set(0.72, 0.66, 0);
    tape.rotation.z = -0.1;
    group.add(tape);
  } else if (itemId === 'cenicero') {
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.58, 0.2, 28), metal);
    dish.position.y = 0.45;
    group.add(dish);
    const hollow = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.08, 12, 32), dark);
    hollow.rotation.x = Math.PI / 2;
    hollow.position.y = 0.57;
    group.add(hollow);
  } else if (itemId === 'melena') {
    for (let index = 0; index < 9; index += 1) {
      const strand = new THREE.Mesh(new THREE.TorusGeometry(0.32 + index * 0.025, 0.045, 8, 34, Math.PI * 1.25), new THREE.MeshStandardMaterial({ color: index % 2 ? 0x291710 : 0x3b2117, roughness: 0.82 }));
      strand.position.set((index - 4) * 0.07, 0.72 + Math.sin(index) * 0.05, 0);
      strand.rotation.set(Math.PI / 2.7, 0.1 * index, -0.7 + index * 0.15);
      group.add(strand);
    }
  } else if (itemId === 'mapa' || itemId === 'foto') {
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.06, 1), cream);
    board.position.y = 0.75;
    board.rotation.x = -0.18;
    board.rotation.z = itemId === 'foto' ? 0.2 : -0.1;
    group.add(board);
  } else if (itemId === 'pulsera' || itemId === 'abanico') {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.12, 14, 34), itemId === 'pulsera' ? orange : cream);
    ring.position.y = 0.75;
    ring.rotation.x = Math.PI / 2.7;
    group.add(ring);
    if (itemId === 'abanico') {
      for (let index = 0; index < 7; index += 1) {
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.95, 0.05), orange);
        blade.position.y = 0.6;
        blade.rotation.z = -0.58 + index * 0.19;
        group.add(blade);
      }
    }
  } else {
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.85, 1.15), itemId === 'golosinas' ? orange : dark);
    base.position.y = 0.52;
    base.castShadow = true;
    group.add(base);
    const lidMesh = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.22, 1.2), metal);
    lidMesh.position.set(0, 1.03, -0.48);
    lidMesh.geometry.translate(0, 0, 0.48);
    lid = lidMesh;
    group.add(lidMesh);
  }
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.045, 10, 42),
    new THREE.MeshBasicMaterial({ color: 0xffd17a, transparent: true, opacity: 0.8 }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.12;
  group.add(ring);
  const label = createLabel(item?.label ?? itemId);
  label.position.y = 2.05;
  group.add(label);
  group.position.copy(position);
  group.userData = { id: itemId, label: item?.label ?? itemId, opened: false, glow: ring, lid, baseY: position.y };
  return group;
};

const normalizeModel = (object: THREE.Object3D) => {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const height = Math.max(size.y, 0.001);
  const scale = 2.15 / height;
  object.scale.setScalar(scale);
  box.setFromObject(object);
  const center = box.getCenter(new THREE.Vector3());
  const min = box.min.y;
  object.position.set(-center.x, -min, -center.z);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      const material = child.material;
      if (Array.isArray(material)) material.forEach((entry) => { entry.envMapIntensity = 1.15; });
      else material.envMapIntensity = 1.15;
    }
  });
};


const addCharacterProfile = (root: THREE.Object3D, character: Character) => {
  const group = new THREE.Group();
  group.name = `profile-${character.id}`;
  const primary = new THREE.MeshStandardMaterial({ color: character.color, roughness: 0.56, metalness: 0.08 });
  const accent = new THREE.MeshStandardMaterial({ color: character.accent, roughness: 0.5, metalness: 0.16 });
  const darkHair = new THREE.MeshStandardMaterial({ color: 0x2b1712, roughness: 0.9 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xd8a94a, roughness: 0.34, metalness: 0.65 });

  const addMesh = (geometry: THREE.BufferGeometry, material: THREE.Material, x: number, y: number, z: number) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    group.add(mesh);
    return mesh;
  };

  if (character.id === 'lala') {
    const fan = new THREE.Group();
    for (let index = 0; index < 7; index += 1) {
      const angle = -0.82 + index * 0.27;
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.016, 0.72, 8), primary);
      stem.position.set(Math.sin(angle) * 0.24, 1.78 + Math.cos(angle) * 0.14, -0.13);
      stem.rotation.z = -angle;
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 14, 10), index % 2 ? accent : gold);
      eye.position.set(Math.sin(angle) * 0.47, 2.05 + Math.cos(angle) * 0.18, -0.14);
      fan.add(stem, eye);
    }
    group.add(fan);
    const sash = addMesh(new THREE.TorusGeometry(0.27, 0.035, 12, 40, Math.PI * 1.35), accent, 0, 0.91, 0.02);
    sash.rotation.x = Math.PI / 2;
    sash.rotation.z = -0.42;
  }

  if (character.id === 'lety') {
    const bag = addMesh(new THREE.BoxGeometry(0.22, 0.2, 0.09), primary, 0.22, 0.92, 0.11);
    bag.rotation.z = -0.08;
    const strap = addMesh(new THREE.TorusGeometry(0.52, 0.018, 8, 48, Math.PI * 1.32), accent, -0.02, 1.25, 0.05);
    strap.rotation.z = 0.7;
    for (let i = 0; i < 5; i += 1) {
      addMesh(new THREE.SphereGeometry(0.025, 10, 8), new THREE.MeshStandardMaterial({ color: [0xff6b6b,0xffd166,0x6bcB77,0x4d96ff,0xc77dff][i] }), 0.15 + i * 0.035, 0.98, 0.17);
    }
  }

  if (character.id === 'isa') {
    const glasses = addMesh(new THREE.TorusGeometry(0.07, 0.012, 8, 22), darkHair, -0.075, 1.86, 0.15);
    const glasses2 = glasses.clone();
    glasses2.position.x = 0.075;
    group.add(glasses2);
    addMesh(new THREE.BoxGeometry(0.06, 0.012, 0.012), darkHair, 0, 1.86, 0.15);
    for (const side of [-1, 1]) {
      const bracelet = addMesh(new THREE.TorusGeometry(0.055, 0.012, 8, 24), gold, side * 0.36, 0.92, 0);
      bracelet.rotation.x = Math.PI / 2;
    }
  }

  if (character.id === 'patri') {
    for (let i = 0; i < 7; i += 1) {
      const angle = i / 7 * Math.PI * 2;
      const flower = addMesh(new THREE.SphereGeometry(0.035, 10, 8), new THREE.MeshStandardMaterial({ color: [0xff4d6d,0xffc857,0x9b5de5,0x00bbf9,0xf15bb5][i % 5] }), Math.cos(angle) * 0.15, 2.02 + Math.sin(angle) * 0.04, 0.02 + Math.sin(angle) * 0.12);
      flower.scale.y = 0.7;
    }
    const ribbons = new THREE.Group();
    for (let i = 0; i < 4; i += 1) {
      const ribbon = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.62, 0.012), i % 2 ? primary : accent);
      ribbon.position.set(-0.18 + i * 0.12, 1.16, -0.12);
      ribbon.rotation.z = -0.16 + i * 0.1;
      ribbons.add(ribbon);
    }
    group.add(ribbons);
  }

  if (character.id === 'luis') {
    const tape = addMesh(new THREE.TorusGeometry(0.31, 0.018, 8, 56, Math.PI * 1.55), new THREE.MeshStandardMaterial({ color: 0xf6e7a1, roughness: 0.8 }), 0.03, 1.24, 0.09);
    tape.rotation.z = 0.52;
    for (let i = 0; i < 9; i += 1) {
      addMesh(new THREE.BoxGeometry(0.006, 0.03, 0.008), darkHair, -0.18 + i * 0.045, 1.03 + i * 0.025, 0.12);
    }
    const ashtray = addMesh(new THREE.CylinderGeometry(0.08, 0.09, 0.025, 24), accent, 0.34, 0.86, 0.08);
    ashtray.rotation.x = Math.PI / 2;
  }

  if (character.id === 'fran') {
    const scarf = addMesh(new THREE.TorusGeometry(0.22, 0.035, 10, 40, Math.PI * 1.35), primary, 0, 1.52, 0.02);
    scarf.rotation.z = 0.38;
    const flameA = addMesh(new THREE.ConeGeometry(0.055, 0.22, 16), new THREE.MeshStandardMaterial({ color: 0xef7435, emissive: 0x5b1700, emissiveIntensity: 0.5 }), 0, 1.18, 0.14);
    flameA.rotation.z = 0.2;
    const flameB = addMesh(new THREE.ConeGeometry(0.035, 0.16, 14), accent, 0.035, 1.17, 0.16);
    flameB.rotation.z = -0.18;
  }

  if (character.id === 'clara') {
    const halo = addMesh(new THREE.TorusGeometry(0.24, 0.025, 10, 52), gold, 0, 1.02, 0.03);
    halo.rotation.x = Math.PI / 2;
    for (const side of [-1, 1]) {
      const cuff = addMesh(new THREE.TorusGeometry(0.06, 0.018, 8, 28), accent, side * 0.37, 0.95, 0);
      cuff.rotation.x = Math.PI / 2;
    }
  }

  if (character.id === 'jesucristo') {
    const cap = addMesh(new THREE.SphereGeometry(0.19, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.72), darkHair, 0, 1.98, -0.01);
    cap.scale.set(1.05, 1, 1.02);
    for (let i = 0; i < 10; i += 1) {
      const angle = i / 10 * Math.PI * 2;
      const lock = addMesh(new THREE.CapsuleGeometry(0.035, 0.42 + (i % 3) * 0.08, 5, 10), darkHair, Math.cos(angle) * 0.16, 1.7, Math.sin(angle) * 0.13 - 0.02);
      lock.rotation.z = Math.cos(angle) * 0.18;
      lock.rotation.x = Math.sin(angle) * 0.15;
    }
    const necklace = addMesh(new THREE.TorusGeometry(0.17, 0.012, 8, 44, Math.PI * 1.5), gold, 0, 1.46, 0.11);
    necklace.rotation.z = 0.35;
  }

  if (character.id === 'aitor') {
    const necklace = addMesh(new THREE.TorusGeometry(0.18, 0.014, 8, 48, Math.PI * 1.52), gold, 0, 1.45, 0.11);
    necklace.rotation.z = 0.35;
    addMesh(new THREE.SphereGeometry(0.035, 12, 10), gold, 0, 1.24, 0.13);
    const scarf = addMesh(new THREE.TorusGeometry(0.25, 0.028, 10, 48, Math.PI * 1.25), primary, -0.02, 1.55, 0.02);
    scarf.rotation.z = -0.42;
    for (const side of [-1, 1]) {
      const band = addMesh(new THREE.TorusGeometry(0.055, 0.014, 8, 24), accent, side * 0.36, 0.9, 0);
      band.rotation.x = Math.PI / 2;
    }
  }

  root.add(group);
};

export function GameScene({ character, initialCollected, paused, settings, onCollected, onComplete, onReady, onMessage }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const callbacksRef = useRef({ onCollected, onComplete, onReady, onMessage });

  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => { callbacksRef.current = { onCollected, onComplete, onReady, onMessage }; }, [onCollected, onComplete, onReady, onMessage]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;
    let disposed = false;
    let frame = 0;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xa9d4d5, 0.015);
    const camera = new THREE.PerspectiveCamera(54, mount.clientWidth / mount.clientHeight, 0.1, 240);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia('(pointer: coarse)').matches;
    const renderer = new THREE.WebGLRenderer({ antialias: settings.quality === 'high' && !isMobile, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : settings.quality === 'high' ? 1.45 : 1.1));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    if (settings.quality === 'high' && !isMobile) composer.addPass(new UnrealBloomPass(new THREE.Vector2(mount.clientWidth, mount.clientHeight), 0.42, 0.7, 0.86));
    composer.addPass(new OutputPass());

    const sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);
    const skyUniforms = sky.material.uniforms;
    skyUniforms.turbidity.value = 7.5;
    skyUniforms.rayleigh.value = 1.65;
    skyUniforms.mieCoefficient.value = 0.004;
    skyUniforms.mieDirectionalG.value = 0.86;
    const sunVector = new THREE.Vector3();
    const elevation = 17;
    const azimuth = 132;
    sunVector.setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - elevation), THREE.MathUtils.degToRad(azimuth));
    skyUniforms.sunPosition.value.copy(sunVector);

    const waterNormals = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg', (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    });
    const waterGeometry = new THREE.PlaneGeometry(260, 260);
    const water = new Water(waterGeometry, {
      textureWidth: settings.quality === 'high' ? 1024 : 512,
      textureHeight: settings.quality === 'high' ? 1024 : 512,
      waterNormals,
      sunDirection: sunVector,
      sunColor: 0xffe4bf,
      waterColor: 0x174f64,
      distortionScale: 3.3,
      fog: true,
    });
    water.rotation.x = -Math.PI / 2;
    water.position.y = -1.35;
    scene.add(water);

    scene.add(new THREE.HemisphereLight(0xf5e5c7, 0x234e45, 2.15));
    const keyLight = new THREE.DirectionalLight(0xffdfad, 4.2);
    keyLight.position.set(-24, 42, 18);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(settings.quality === 'high' ? 2048 : 1024, settings.quality === 'high' ? 2048 : 1024);
    keyLight.shadow.camera.left = -45;
    keyLight.shadow.camera.right = 45;
    keyLight.shadow.camera.top = 45;
    keyLight.shadow.camera.bottom = -45;
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0xef7435, 18, 38, 1.8);
    fillLight.position.set(0, 8, -16);
    scene.add(fillLight);

    const rockTexture = createNoiseTexture('#706c5b', '#c4b99a');
    const grassTexture = createNoiseTexture('#4d7549', '#9db46d');
    const sandTexture = createNoiseTexture('#c9ae78', '#f0ddb2');
    const islandBase = new THREE.Mesh(
      new THREE.CylinderGeometry(27, 31, 3.7, 64),
      new THREE.MeshStandardMaterial({ map: rockTexture, color: 0x8a806a, roughness: 1 }),
    );
    islandBase.position.y = -2.1;
    islandBase.receiveShadow = true;
    scene.add(islandBase);
    const beach = new THREE.Mesh(
      new THREE.CircleGeometry(28, 80),
      new THREE.MeshStandardMaterial({ map: sandTexture, color: 0xd7bd86, roughness: 0.97 }),
    );
    beach.rotation.x = -Math.PI / 2;
    beach.position.y = -0.22;
    beach.receiveShadow = true;
    scene.add(beach);
    const meadow = new THREE.Mesh(
      new THREE.CircleGeometry(23.5, 80),
      new THREE.MeshStandardMaterial({ map: grassTexture, color: 0x64814e, roughness: 0.93 }),
    );
    meadow.rotation.x = -Math.PI / 2;
    meadow.position.y = -0.02;
    meadow.receiveShadow = true;
    scene.add(meadow);

    const rng = (seed: number) => {
      const value = Math.sin(seed * 931.17) * 43758.5453;
      return value - Math.floor(value);
    };
    for (let index = 0; index < 34; index += 1) {
      const angle = rng(index + 1) * Math.PI * 2;
      const radius = 19 + rng(index + 20) * 8;
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.55 + rng(index + 40) * 1.35, 1),
        new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(0.11, 0.07, 0.34 + rng(index + 60) * 0.12), roughness: 1 }),
      );
      rock.position.set(Math.cos(angle) * radius, -0.05, Math.sin(angle) * radius);
      rock.scale.y = 0.6 + rng(index + 80) * 0.9;
      rock.rotation.set(rng(index + 90), rng(index + 100) * Math.PI, rng(index + 110));
      rock.castShadow = true;
      rock.receiveShadow = true;
      scene.add(rock);
    }

    [
      [-19, 12, 1.2, 0.4], [-15, -12, 0.92, 1.4], [18, 12, 1.08, 2.1], [20, -3, 1.25, 0.9],
      [-6, 17, 0.82, 1.8], [10, 17, 0.95, 2.7], [-21, 1, 0.88, 0.2], [14, -16, 1.12, 2.3],
    ].forEach(([x, z, scale, rotation]) => addPalm(scene, x, z, scale, rotation));
    addTent(scene, -8, 14, 0.2, 0xef7435);
    addTent(scene, -13, 12, -0.25, 0xd8c8a7);
    addTent(scene, 11, 13, 0.4, 0x345f68);
    addTent(scene, 16, 9, -0.5, 0xd8c8a7);
    addStage(scene);
    addMuralla(scene);
    addDock(scene);
    addBarAndChill(scene);
    addFestivalExtras(scene);

    const fireGroup = new THREE.Group();
    for (let index = 0; index < 12; index += 1) {
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28), new THREE.MeshStandardMaterial({ color: 0x655e55, roughness: 1 }));
      const angle = (index / 12) * Math.PI * 2;
      stone.position.set(Math.cos(angle) * 1.2, 0.2, Math.sin(angle) * 1.2);
      fireGroup.add(stone);
    }
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.46, 1.35, 18), new THREE.MeshStandardMaterial({ color: 0xffb02e, emissive: 0xff5d20, emissiveIntensity: 3, transparent: true, opacity: 0.9 }));
    flame.position.y = 0.72;
    fireGroup.add(flame);
    const fireLight = new THREE.PointLight(0xff7a2c, 24, 13, 1.7);
    fireLight.position.y = 1.5;
    fireGroup.add(fireLight);
    fireGroup.position.set(-2, 0, 5);
    scene.add(fireGroup);

    const interactive = collectibles.map((item) => {
      const object = createInteractive(item.id);
      if (initialCollected.includes(item.id)) {
        object.visible = false;
        object.userData.opened = true;
      }
      scene.add(object);
      return object;
    });

    const playerRoot = new THREE.Group();
    playerRoot.position.set(0, 0.05, 12);
    scene.add(playerRoot);
    let playerModel: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let currentAction: THREE.AnimationAction | null = null;
    let idleAction: THREE.AnimationAction | null = null;
    let walkAction: THREE.AnimationAction | null = null;
    let runAction: THREE.AnimationAction | null = null;
    const loader = new GLTFLoader();
    let readySent = false;
    const readyTimer = window.setTimeout(() => {
      if (!readySent && !disposed) {
        readySent = true;
        callbacksRef.current.onReady();
        callbacksRef.current.onMessage('Mundo cargado. El personaje terminará de aparecer en segundo plano.');
      }
    }, 3500);

    const setAction = (action: THREE.AnimationAction | null, fade = 0.18) => {
      if (!action || action === currentAction) return;
      action.reset().fadeIn(fade).play();
      currentAction?.fadeOut(fade);
      currentAction = action;
    };

    const configureLoaded = (gltf: Awaited<ReturnType<GLTFLoader['loadAsync']>>) => {
      normalizeModel(gltf.scene);
      gltf.scene.scale.multiplyScalar(character.scale || 1);
      addCharacterProfile(gltf.scene, character);
      playerModel = gltf.scene;
      playerRoot.add(playerModel);
      mixer = new THREE.AnimationMixer(playerModel);
      const byName = (names: string[]) => gltf.animations.find((clip) => names.some((name) => clip.name.toLowerCase().includes(name)));
      const idleClip = byName(['idle']) ?? gltf.animations[0];
      const walkClip = byName(['walk']) ?? gltf.animations[1] ?? idleClip;
      const runClip = byName(['run']) ?? gltf.animations[2] ?? walkClip;
      idleAction = idleClip ? mixer.clipAction(idleClip) : null;
      walkAction = walkClip ? mixer.clipAction(walkClip) : idleAction;
      runAction = runClip ? mixer.clipAction(runClip) : walkAction;
      setAction(idleAction, 0);
      window.clearTimeout(readyTimer);
      if (!readySent) {
        readySent = true;
        callbacksRef.current.onReady();
      }
    };

    const femaleIds = new Set(['lala', 'lety', 'isa', 'patri', 'clara']);
    const femaleFallback = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Michelle.glb';
    const maleFallback = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Soldier.glb';
    const fallbackModel = femaleIds.has(character.id) ? femaleFallback : maleFallback;
    loader.loadAsync(character.modelUrl).then(configureLoaded).catch(() => {
      loader.loadAsync(fallbackModel).then(configureLoaded).catch(() => {
        callbacksRef.current.onMessage('No se pudo cargar el personaje 3D. Revisa la conexión.');
        window.clearTimeout(readyTimer);
        if (!readySent) {
          readySent = true;
          callbacksRef.current.onReady();
        }
      });
    });

    const keys = new Set<string>();
    const analog = new THREE.Vector2();
    let cameraYaw = 0.72;
    let cameraPitch = 0.38;
    let dragging = false;
    let previousPointer = new THREE.Vector2();
    let verticalVelocity = 0;
    let grounded = true;
    let interactRequested = false;
    let jumpRequested = false;
    let specialRequested = false;
    let specialEnd = 0;
    let cooldownEnd = 0;
    let nearest: Interactive | null = null;
    let last = performance.now();
    let totalCollected = new Set(initialCollected);
    const raycaster = new THREE.Raycaster();

    const keyDown = (event: KeyboardEvent) => {
      keys.add(event.key.toLowerCase());
      if (event.code === 'Space') jumpRequested = true;
      if (event.key.toLowerCase() === 'e') interactRequested = true;
      if (event.key.toLowerCase() === 'q') specialRequested = true;
    };
    const keyUp = (event: KeyboardEvent) => keys.delete(event.key.toLowerCase());
    const moveEvent = (event: Event) => {
      const detail = (event as CustomEvent<MoveDetail>).detail;
      analog.set(detail.x, detail.z);
    };
    const actionEvent = (event: Event) => {
      const detail = (event as CustomEvent<ActionDetail>).detail;
      if (detail === 'jump') jumpRequested = true;
      if (detail === 'interact') interactRequested = true;
      if (detail === 'special') specialRequested = true;
    };
    const pointerDown = (event: PointerEvent) => {
      if ((event.target as HTMLElement).closest('.game-control')) return;
      dragging = true;
      previousPointer.set(event.clientX, event.clientY);
    };
    const pointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const deltaX = event.clientX - previousPointer.x;
      const deltaY = event.clientY - previousPointer.y;
      previousPointer.set(event.clientX, event.clientY);
      cameraYaw -= deltaX * 0.004;
      cameraPitch = THREE.MathUtils.clamp(cameraPitch - deltaY * 0.003, 0.18, 0.78);
    };
    const pointerUp = () => { dragging = false; };
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
    window.addEventListener('isla:move', moveEvent);
    window.addEventListener('isla:action', actionEvent);
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    window.addEventListener('pointermove', pointerMove);
    window.addEventListener('pointerup', pointerUp);

    const resize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    window.addEventListener('resize', resize);

    const activate = (object: Interactive) => {
      if (object.userData.opened) return;
      object.userData.opened = true;
      if (object.userData.lid) {
        const start = object.userData.lid.rotation.x;
        const target = -Math.PI * 0.72;
        let progress = 0;
        const opening = () => {
          progress += 0.055;
          object.userData.lid!.rotation.x = THREE.MathUtils.lerp(start, target, Math.min(progress, 1));
          if (progress < 1 && !disposed) requestAnimationFrame(opening);
        };
        opening();
      }
      object.userData.glow.visible = false;
      totalCollected.add(object.userData.id);
      callbacksRef.current.onCollected(object.userData.id);
      callbacksRef.current.onMessage(`Encontrado: ${object.userData.label}`);
      setTimeout(() => { object.visible = false; }, 680);
      if (totalCollected.size >= collectibles.length) setTimeout(() => callbacksRef.current.onComplete(), 1100);
    };

    const triggerSpecial = (now: number) => {
      if (now < cooldownEnd) {
        callbacksRef.current.onMessage('Movimiento especial recargando');
        return;
      }
      cooldownEnd = now + 6500;
      specialEnd = now + 2800;
      if (character.id === 'lety' || character.id === 'jesucristo') {
        interactive.filter((object) => !object.userData.opened).forEach((object) => object.userData.glow.scale.setScalar(2.2));
        callbacksRef.current.onMessage(character.id === 'lety' ? 'Mi chillout, mis normas: secretos revelados' : 'Aura del buen rollo: recuerdos revelados');
      }
      if (character.id === 'luis') {
        const target = interactive.filter((object) => !object.userData.opened).sort((a, b) => a.position.distanceTo(playerRoot.position) - b.position.distanceTo(playerRoot.position))[0];
        if (target) activate(target);
        callbacksRef.current.onMessage('Vacile malagueño activado');
      }
      if (character.id === 'patri' || character.id === 'fran') {
        verticalVelocity = character.id === 'patri' ? 10.8 : 8.8;
        grounded = false;
        callbacksRef.current.onMessage(character.id === 'patri' ? 'Piripi power' : 'Fran hace resurgir al grupo');
      }
      if (character.id === 'isa') callbacksRef.current.onMessage('Isa no pierde el tiempo');
      if (character.id === 'lala') callbacksRef.current.onMessage('Baile del pavo real');
      if (character.id === 'clara') callbacksRef.current.onMessage('Clara se hace con el festival');
      if (character.id === 'aitor') callbacksRef.current.onMessage('Aitor activa el modo desatado');
    };

    const clock = new THREE.Clock();
    const animate = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);
      const delta = Math.min((now - last) / 1000, 0.035);
      last = now;
      if (!pausedRef.current) {
        const specialActive = now < specialEnd;
        const keyboardX = (keys.has('d') || keys.has('arrowright') ? 1 : 0) - (keys.has('a') || keys.has('arrowleft') ? 1 : 0);
        const keyboardZ = (keys.has('s') || keys.has('arrowdown') ? 1 : 0) - (keys.has('w') || keys.has('arrowup') ? 1 : 0);
        const input = new THREE.Vector2(keyboardX + analog.x, keyboardZ + analog.y);
        if (input.length() > 1) input.normalize();
        const forward = new THREE.Vector3(-Math.sin(cameraYaw), 0, -Math.cos(cameraYaw));
        const right = new THREE.Vector3(Math.cos(cameraYaw), 0, -Math.sin(cameraYaw));
        const movement = forward.multiplyScalar(-input.y).add(right.multiplyScalar(input.x));
        const speedMultiplier = specialActive ? (character.id === 'isa' ? 2.25 : character.id === 'lala' ? 1.55 : character.id === 'fran' ? 1.75 : character.id === 'aitor' ? 1.7 : 1) : 1;
        const running = movement.lengthSq() > 0.04;
        if (running) {
          movement.normalize();
          playerRoot.position.addScaledVector(movement, 5.4 * speedMultiplier * delta);
          const targetRotation = Math.atan2(movement.x, movement.z);
          playerRoot.rotation.y = THREE.MathUtils.lerp(playerRoot.rotation.y, targetRotation, 0.18);
          setAction(speedMultiplier > 1.4 ? runAction : walkAction);
        } else setAction(idleAction);
        const radius = Math.hypot(playerRoot.position.x, playerRoot.position.z);
        if (radius > 24.6) {
          playerRoot.position.x *= 24.6 / radius;
          playerRoot.position.z *= 24.6 / radius;
        }
        if (jumpRequested && grounded) {
          verticalVelocity = 8.4;
          grounded = false;
        }
        jumpRequested = false;
        verticalVelocity -= 22 * delta;
        playerRoot.position.y += verticalVelocity * delta;
        if (playerRoot.position.y <= 0.05) {
          playerRoot.position.y = 0.05;
          verticalVelocity = 0;
          grounded = true;
        }
        if (specialRequested) triggerSpecial(now);
        specialRequested = false;
        if (specialActive && (character.id === 'lala' || character.id === 'clara')) playerRoot.rotation.y += delta * 9.5;
        if (specialActive && (character.id === 'patri' || character.id === 'aitor')) playerRoot.rotation.y += delta * 7.5;
        nearest = interactive.filter((object) => !object.userData.opened && object.visible).sort((a, b) => a.position.distanceTo(playerRoot.position) - b.position.distanceTo(playerRoot.position))[0] ?? null;
        const interactionRange = specialActive && (character.id === 'lala' || character.id === 'jesucristo') ? 5.3 : 2.45;
        if (interactRequested && nearest && nearest.position.distanceTo(playerRoot.position) <= interactionRange) activate(nearest);
        interactRequested = false;
        interactive.forEach((object, index) => {
          if (object.userData.opened || !object.visible) return;
          object.userData.glow.rotation.z += delta * (0.65 + index * 0.03);
          object.position.y = object.userData.baseY + Math.sin(now * 0.0024 + index) * 0.08;
          if (!(specialActive && (character.id === 'lety' || character.id === 'jesucristo'))) object.userData.glow.scale.lerp(new THREE.Vector3(1, 1, 1), 0.06);
        });
        if (playerModel) {
          playerModel.position.y = Math.sin(now * 0.006) * (running ? 0.018 : 0.008);
          if (specialActive && (character.id === 'lala' || character.id === 'clara')) playerModel.rotation.z = Math.sin(now * 0.018) * 0.13;
          else playerModel.rotation.z *= 0.86;
        }
        mixer?.update(delta);
        flame.scale.y = 0.82 + Math.sin(now * 0.016) * 0.17 + Math.sin(now * 0.029) * 0.08;
        fireLight.intensity = 21 + Math.sin(now * 0.015) * 4;
        water.material.uniforms.time.value += delta * 0.65;
        const cameraDistance = 8.7;
        const horizontal = Math.cos(cameraPitch) * cameraDistance;
        const desired = new THREE.Vector3(
          playerRoot.position.x + Math.sin(cameraYaw) * horizontal,
          playerRoot.position.y + 2.2 + Math.sin(cameraPitch) * cameraDistance,
          playerRoot.position.z + Math.cos(cameraYaw) * horizontal,
        );
        if (settings.cameraShake && specialActive && (character.id === 'patri' || character.id === 'aitor')) {
          desired.x += Math.sin(now * 0.04) * 0.1;
          desired.y += Math.cos(now * 0.05) * 0.08;
        }
        camera.position.lerp(desired, 0.085);
        const target = playerRoot.position.clone().add(new THREE.Vector3(0, 1.25, 0));
        camera.lookAt(target);
        raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      }
      composer.render(clock.getDelta());
    };
    frame = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      window.clearTimeout(readyTimer);
      cancelAnimationFrame(frame);
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
      window.removeEventListener('isla:move', moveEvent);
      window.removeEventListener('isla:action', actionEvent);
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      window.removeEventListener('pointermove', pointerMove);
      window.removeEventListener('pointerup', pointerUp);
      window.removeEventListener('resize', resize);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          const material = object.material;
          if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
          else material?.dispose();
        }
      });
      renderer.dispose();
      composer.dispose();
      waterNormals.dispose();
      rockTexture.dispose();
      grassTexture.dispose();
      sandTexture.dispose();
      mount.replaceChildren();
    };
  }, [character, settings.quality, settings.cameraShake]);

  return <div ref={mountRef} className="absolute inset-0" aria-label="Mundo 3D de La Isla" />;
}
