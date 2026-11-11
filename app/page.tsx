"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.18, 1.6, 7]} />
        <meshStandardMaterial color="#76513a" />
      </mesh>
      <mesh position={[0, 1.9, 0]} castShadow>
        <coneGeometry args={[0.85, 1.8, 7]} />
        <meshStandardMaterial color="#286b4b" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.55, 0]} castShadow>
        <coneGeometry args={[0.58, 1.3, 7]} />
        <meshStandardMaterial color="#39845a" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Player({ onMove }: { onMove: (x: number, z: number) => void }) {
  const player = useRef<THREE.Group>(null);
  const keys = useRef<Record<string, boolean>>({});
  const direction = useMemo(() => new THREE.Vector3(), []);
  useFrame((_, delta) => {
    if (!player.current) return;
    direction.set(0, 0, 0);
    if (keys.current.KeyW || keys.current.ArrowUp) direction.z -= 1;
    if (keys.current.KeyS || keys.current.ArrowDown) direction.z += 1;
    if (keys.current.KeyA || keys.current.ArrowLeft) direction.x -= 1;
    if (keys.current.KeyD || keys.current.ArrowRight) direction.x += 1;
    if (direction.lengthSq() > 0) {
      direction.normalize();
      player.current.position.addScaledVector(direction, delta * 5);
      player.current.position.x = THREE.MathUtils.clamp(player.current.position.x, -16, 16);
      player.current.position.z = THREE.MathUtils.clamp(player.current.position.z, -16, 16);
      player.current.rotation.y = Math.atan2(direction.x, direction.z);
      onMove(player.current.position.x, player.current.position.z);
    }
  });
  return (
    <group
      ref={player}
      position={[0, 0.15, 4]}
      onUpdate={() => {
        const down = (event: KeyboardEvent) => { keys.current[event.code] = true; };
        const up = (event: KeyboardEvent) => { keys.current[event.code] = false; };
        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);
        return () => {
          window.removeEventListener("keydown", down);
          window.removeEventListener("keyup", up);
        };
      }}
    >
      <mesh position={[0, 0.72, 0]} castShadow>
        <capsuleGeometry args={[0.34, 0.72, 5, 10]} />
        <meshStandardMaterial color="#e7b36f" roughness={0.72} />
      </mesh>
      <mesh position={[0, 1.43, 0]} castShadow>
        <sphereGeometry args={[0.32, 16, 16]} />
        <meshStandardMaterial color="#e7bd91" />
      </mesh>
      <mesh position={[0, 1.68, -0.03]}>
        <sphereGeometry args={[0.33, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        <meshStandardMaterial color="#26364c" />
      </mesh>
    </group>
  );
}

function Island({ onMove }: { onMove: (x: number, z: number) => void }) {
  const trees: [number, number, number][] = [
    [-10, 0, -8], [-7, 0, -12], [-13, 0, 1], [-9, 0, 8], [-4, 0, -10],
    [8, 0, -11], [12, 0, -5], [10, 0, 7], [5, 0, 11], [14, 0, 3],
    [-14, 0, -5], [2, 0, -13], [-2, 0, 13], [12, 0, 12]
  ];
  return (
    <>
      <mesh receiveShadow position={[0, -0.5, 0]}>
        <cylinderGeometry args={[20, 21, 1.4, 64]} />
        <meshStandardMaterial color="#477c54" roughness={1} />
      </mesh>
      <mesh receiveShadow position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[18.8, 64]} />
        <meshStandardMaterial color="#79a96b" roughness={1} />
      </mesh>
      <mesh position={[0, 0.1, -5]} receiveShadow>
        <cylinderGeometry args={[2.6, 3.4, 0.5, 8]} />
        <meshStandardMaterial color="#b9a47a" />
      </mesh>
      <mesh position={[0, 0.48, -5]} castShadow>
        <dodecahedronGeometry args={[1.3, 0]} />
        <meshStandardMaterial color="#7d9b78" />
      </mesh>
      {trees.map((p, i) => <Tree key={i} position={p} scale={0.75 + (i % 3) * 0.16} />)}
      <mesh position={[5, 0.4, 2]} castShadow>
        <boxGeometry args={[1.2, 0.8, 1.2]} />
        <meshStandardMaterial color="#d4b06d" />
      </mesh>
      <Player onMove={onMove} />
    </>
  );
}

export default function Home() {
  const [position, setPosition] = useState({ x: 0, z: 4 });
  const [bookOpen, setBookOpen] = useState(false);
  return (
    <main className="game-shell">
      <div className="world">
        <Canvas shadows dpr={[1, 1.7]}>
          <PerspectiveCamera makeDefault position={[0, 10, 18]} fov={52} />
          <color attach="background" args={["#a9d6dc"]} />
          <fog attach="fog" args={["#a9d6dc", 22, 52]} />
          <ambientLight intensity={0.75} />
          <directionalLight position={[8, 14, 6]} intensity={2.1} castShadow shadow-mapSize={[2048, 2048]} />
          <Suspense fallback={null}>
            <Island onMove={(x, z) => setPosition({ x, z })} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
      <header className="topbar">
        <div className="brand"><span className="brand-mark">GI</span><div><strong>GREED ISLAND</strong><small>ONLINE · PRIVATE WORLD</small></div></div>
        <div className="server-status"><i /> WORLD ONLINE <span>·</span> SOLO PREVIEW</div>
        <button className="avatar" aria-label="Player profile">A</button>
      </header>
      <section className="welcome">
        <div className="eyebrow">THE ADVENTURE BEGINS</div>
        <h1>Welcome to <em>the Island.</em></h1>
        <p>Explore the wilds. Discover rare cards. Write your own story.</p>
      </section>
      <aside className="quest-panel">
        <div className="panel-label">CURRENT OBJECTIVE <span>01 / 03</span></div>
        <h2>A New Beginning</h2>
        <p>Take your first steps and explore the island.</p>
        <div className="quest-progress"><span /></div>
        <small>EXPLORATION · IN PROGRESS</small>
      </aside>
      <div className="bottom-hud">
        <div className="movement-hint"><span className="key">W</span><span className="key-row"><span className="key">A</span><span className="key">S</span><span className="key">D</span></span><small>MOVE</small></div>
        <div className="coordinates">POSITION <b>{position.x.toFixed(1)}, {position.z.toFixed(1)}</b></div>
        <button className="book-button" onClick={() => setBookOpen(!bookOpen)}><span>▤</span> PLAYER BOOK <kbd>B</kbd></button>
      </div>
      {bookOpen && <div className="book-modal"><button className="close" onClick={() => setBookOpen(false)}>×</button><div className="eyebrow">PERSONAL ARCHIVE</div><h2>Player Book</h2><p className="muted">Your collection begins here.</p><div className="card-slot"><span>?</span><b>NO CARDS YET</b><small>Explore the island to discover your first card.</small></div><div className="book-stats"><div><strong>0 / 100</strong><small>COLLECTED</small></div><div><strong>1</strong><small>PLAYER LEVEL</small></div><div><strong>0</strong><small>QUESTS DONE</small></div></div></div>}
      <div className="build-tag">EARLY ACCESS BUILD · 0.1.0</div>
    </main>
  );
}
