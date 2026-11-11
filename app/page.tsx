"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { CARD_CATALOG, type GameCard } from "../data/cards";

type Tab = "book" | "quests" | "battle" | "market";
type SaveData = { collected: string[]; completed: string[]; coins: number; xp: number; level: number; hp: number; position: { x: number; z: number } };

const QUESTS = [
  { id: "first-find", title: "A New Beginning", detail: "Discover your first card on the island.", reward: 30, goal: 1 },
  { id: "collector", title: "A Curious Collector", detail: "Add five different cards to your Player Book.", reward: 60, goal: 5 },
  { id: "first-victory", title: "Island Challenger", detail: "Win your first island encounter.", reward: 75, goal: 1 },
  { id: "spell-study", title: "Words of Power", detail: "Collect three spell cards.", reward: 50, goal: 3 }
];

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return <group position={position} scale={scale}>
    <mesh position={[0,.8,0]} castShadow><cylinderGeometry args={[.12,.18,1.6,7]}/><meshStandardMaterial color="#76513a"/></mesh>
    <mesh position={[0,1.9,0]} castShadow><coneGeometry args={[.85,1.8,7]}/><meshStandardMaterial color="#286b4b"/></mesh>
    <mesh position={[0,2.55,0]} castShadow><coneGeometry args={[.58,1.3,7]}/><meshStandardMaterial color="#39845a"/></mesh>
  </group>;
}

function Player({ onMove }: { onMove: (x: number,z: number) => void }) {
  const player = useRef<THREE.Group>(null);
  const keys = useRef<Record<string,boolean>>({});
  const direction = useMemo(() => new THREE.Vector3(), []);
  useEffect(() => {
    const down = (e: KeyboardEvent) => { keys.current[e.code] = true; };
    const up = (e: KeyboardEvent) => { keys.current[e.code] = false; };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown",down); window.removeEventListener("keyup",up); };
  }, []);
  useFrame((_, delta) => {
    if (!player.current) return;
    direction.set(0,0,0);
    if (keys.current.KeyW || keys.current.ArrowUp) direction.z -= 1;
    if (keys.current.KeyS || keys.current.ArrowDown) direction.z += 1;
    if (keys.current.KeyA || keys.current.ArrowLeft) direction.x -= 1;
    if (keys.current.KeyD || keys.current.ArrowRight) direction.x += 1;
    if (direction.lengthSq()) {
      direction.normalize();
      player.current.position.addScaledVector(direction, delta * 5);
      player.current.position.x = THREE.MathUtils.clamp(player.current.position.x,-16,16);
      player.current.position.z = THREE.MathUtils.clamp(player.current.position.z,-16,16);
      player.current.rotation.y = Math.atan2(direction.x,direction.z);
      onMove(player.current.position.x,player.current.position.z);
    }
  });
  return <group ref={player} position={[0,.15,4]}>
    <mesh position={[0,.72,0]} castShadow><capsuleGeometry args={[.34,.72,5,10]}/><meshStandardMaterial color="#e7b36f"/></mesh>
    <mesh position={[0,1.43,0]} castShadow><sphereGeometry args={[.32,16,16]}/><meshStandardMaterial color="#e7bd91"/></mesh>
    <mesh position={[0,1.68,-.03]}><sphereGeometry args={[.33,16,10,0,Math.PI*2,0,Math.PI*.45]}/><meshStandardMaterial color="#26364c"/></mesh>
  </group>;
}

function Island({ onMove }: { onMove: (x:number,z:number)=>void }) {
  const trees: [number,number,number][] = [[-10,0,-8],[-7,0,-12],[-13,0,1],[-9,0,8],[-4,0,-10],[8,0,-11],[12,0,-5],[10,0,7],[5,0,11],[14,0,3],[-14,0,-5],[2,0,-13],[-2,0,13],[12,0,12]];
  return <>
    <mesh receiveShadow position={[0,-.5,0]}><cylinderGeometry args={[20,21,1.4,64]}/><meshStandardMaterial color="#477c54"/></mesh>
    <mesh receiveShadow position={[0,.18,0]} rotation={[-Math.PI/2,0,0]}><circleGeometry args={[18.8,64]}/><meshStandardMaterial color="#79a96b"/></mesh>
    <mesh position={[0,.1,-5]}><cylinderGeometry args={[2.6,3.4,.5,8]}/><meshStandardMaterial color="#b9a47a"/></mesh>
    <mesh position={[0,.48,-5]} castShadow><dodecahedronGeometry args={[1.3,0]}/><meshStandardMaterial color="#7d9b78"/></mesh>
    {trees.map((p,i)=><Tree key={i} position={p} scale={.75+(i%3)*.16}/>)}
    <mesh position={[5,.4,2]} castShadow><boxGeometry args={[1.2,.8,1.2]}/><meshStandardMaterial color="#d4b06d"/></mesh>
    <Player onMove={onMove}/>
  </>;
}

const initialSave: SaveData = { collected: [], completed: [], coins: 50, xp: 0, level: 1, hp: 100, position: {x:0,z:4} };

export default function Home() {
  const [save,setSave] = useState<SaveData>(initialSave);
  const [loaded,setLoaded] = useState(false);
  const [tab,setTab] = useState<Tab>("book");
  const [notice,setNotice] = useState("Welcome, explorer. Your island journey begins now.");
  const [enemyHp,setEnemyHp] = useState(48);
  const [playerHp,setPlayerHp] = useState(100);
  const [battleLog,setBattleLog] = useState("A wild Mossling blocks the path.");
  const [battleWon,setBattleWon] = useState(false);
  const [showMobileControls,setShowMobileControls] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("greed-island-save-v1");
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<SaveData>;
        setSave({...initialSave,...parsed,position:{...initialSave.position,...parsed.position}});
        setPlayerHp(parsed.hp ?? 100);
      }
    } catch { setNotice("A new save has been started on this device."); }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("greed-island-save-v1",JSON.stringify({...save,hp:playerHp}));
  },[save,playerHp,loaded]);

  const collectedCards = CARD_CATALOG.filter(card => save.collected.includes(card.id));
  const spellCards = collectedCards.filter(card => card.type === "Spell");
  const availableQuests = QUESTS.map(q => {
    const progress = q.id === "first-find" ? Math.min(save.collected.length,1)
      : q.id === "collector" ? Math.min(save.collected.length,5)
      : q.id === "first-victory" ? (save.completed.includes("first-victory") ? 1 : 0)
      : Math.min(spellCards.length,3);
    return {...q,progress,done:save.completed.includes(q.id),ready:progress>=q.goal && !save.completed.includes(q.id)};
  });

  function move(x:number,z:number) { setSave(s=>({...s,position:{x,z}})); }

  function discoverCard() {
    const undiscovered = CARD_CATALOG.filter(c=>!save.collected.includes(c.id));
    if (!undiscovered.length) { setNotice("You have discovered all 100 cards. The island has no more secrets for now."); return; }
    const card = undiscovered[Math.floor(Math.random()*Math.min(undiscovered.length,18))];
    setSave(s=>({...s,collected:[...s.collected,card.id],xp:s.xp+10}));
    setNotice("Discovered "+card.name+" · "+card.rarity+" "+card.type+". Added to your Player Book!");
    setTab("book");
  }

  function claimQuest(id:string) {
    const quest = availableQuests.find(q=>q.id===id);
    if (!quest?.ready) return;
    setSave(s=>({...s,completed:[...s.completed,id],coins:s.coins+quest.reward,xp:s.xp+25}));
    setNotice("Quest completed: "+quest.title+". You earned "+quest.reward+" coins and 25 XP.");
  }

  function startBattle() {
    setEnemyHp(48); setPlayerHp(save.hp || 100); setBattleWon(false);
    setBattleLog("A wild Mossling appears! Choose an action.");
    setTab("battle");
  }

  function attack() {
    if (battleWon || enemyHp<=0) return;
    const damage = 12 + Math.floor(Math.random()*8);
    const remaining = Math.max(0,enemyHp-damage);
    setEnemyHp(remaining);
    if (remaining===0) {
      setBattleWon(true); setBattleLog("Victory! The Mossling retreats. You earned 40 coins and 35 XP.");
      setSave(s=>({...s,coins:s.coins+40,xp:s.xp+35,completed:s.completed.includes("first-victory")?s.completed:[...s.completed,"first-victory"]}));
    } else {
      const hit = 7 + Math.floor(Math.random()*8);
      const hp = Math.max(0,playerHp-hit);
      setPlayerHp(hp); setSave(s=>({...s,hp}));
      setBattleLog("You dealt "+damage+" damage. Mossling counterattacked for "+hit+".");
      if (hp===0) setBattleLog("You were knocked out. Rest at camp to recover, then try again.");
    }
  }

  function castSpell(card:GameCard) {
    if (battleWon || enemyHp<=0 || playerHp<=0) return;
    const damage = card.name.toLowerCase().includes("fire") ? 28 : 20;
    const remaining = Math.max(0,enemyHp-damage);
    setEnemyHp(remaining);
    if (remaining===0) {
      setBattleWon(true); setBattleLog(card.name+" finished the encounter! You earned 40 coins and 35 XP.");
      setSave(s=>({...s,coins:s.coins+40,xp:s.xp+35,completed:s.completed.includes("first-victory")?s.completed:[...s.completed,"first-victory"]}));
    } else {
      const hp=Math.max(0,playerHp-5); setPlayerHp(hp); setSave(s=>({...s,hp}));
      setBattleLog(card.name+" dealt "+damage+" damage. The Mossling struck back for 5.");
    }
  }

  function rest() { setPlayerHp(100); setSave(s=>({...s,hp:100})); setNotice("You rested at camp. Health restored to 100."); }

  function buyCard(card:GameCard) {
    const cost = card.rarity==="Legendary"?90:card.rarity==="Epic"?65:card.rarity==="Rare"?40:25;
    if (save.collected.includes(card.id)) { setNotice("You already own "+card.name+"."); return; }
    if (save.coins<cost) { setNotice("Not enough coins. You need "+cost+" coins."); return; }
    setSave(s=>({...s,coins:s.coins-cost,collected:[...s.collected,card.id]}));
    setNotice("Trade complete: "+card.name+" added to your Player Book.");
  }

  const marketCards = CARD_CATALOG.filter(c=>!save.collected.includes(c.id)).slice(0,8);
  const xpNext = save.level*100;
  const level = Math.floor(save.xp/100)+1;

  return <main className="game-shell">
    <div className="world"><Canvas shadows dpr={[1,1.7]}><PerspectiveCamera makeDefault position={[0,10,18]} fov={52}/><color attach="background" args={["#a9d6dc"]}/><fog attach="fog" args={["#a9d6dc",22,52]}/><ambientLight intensity={.75}/><directionalLight position={[8,14,6]} intensity={2.1} castShadow shadow-mapSize={[2048,2048]}/><Suspense fallback={null}><Island onMove={move}/><Environment preset="sunset"/></Suspense></Canvas></div>
    <header className="topbar"><div className="brand"><span className="brand-mark">GI</span><div><strong>GREED ISLAND</strong><small>ONLINE · ADVENTURER BUILD</small></div></div><div className="server-status"><i/> LOCAL SAVE <span>·</span> SOLO ADVENTURE</div><div className="top-stats"><span>LV {level}</span><span>◈ {save.coins}</span></div></header>
    <section className="welcome"><div className="eyebrow">THE ADVENTURE BEGINS</div><h1>Welcome to <em>the Island.</em></h1><p>Explore, discover cards, complete quests, and test your strength.</p></section>
    <aside className="quest-panel"><div className="panel-label">CURRENT OBJECTIVE <span>{availableQuests.filter(q=>!q.done).length} LEFT</span></div><h2>{availableQuests.find(q=>!q.done)?.title ?? "Island Explorer"}</h2><p>{availableQuests.find(q=>!q.done)?.detail ?? "You have completed the available quests."}</p><div className="quest-progress"><span style={{width:Math.min(100,save.collected.length*20)+"%"}}/></div><small>CARDS DISCOVERED · {save.collected.length}/100</small></aside>
    <div className="bottom-hud"><div className="movement-hint"><span className="key">W</span><span className="key-row"><span className="key">A</span><span className="key">S</span><span className="key">D</span></span><small>MOVE</small></div><div className="coordinates">POSITION <b>{save.position.x.toFixed(1)}, {save.position.z.toFixed(1)}</b></div><button className="book-button" onClick={()=>setTab(tab==="book"?"quests":"book")}>▤ PLAYER BOOK <kbd>B</kbd></button></div>
    <nav className="game-nav"><button className={tab==="book"?"active":""} onClick={()=>setTab("book")}>▤ <span>BOOK</span></button><button className={tab==="quests"?"active":""} onClick={()=>setTab("quests")}>✧ <span>QUESTS</span></button><button className={tab==="battle"?"active":""} onClick={startBattle}>⚔ <span>BATTLE</span></button><button className={tab==="market"?"active":""} onClick={()=>setTab("market")}>⇄ <span>TRADING</span></button></nav>
    <div className="notice" role="status">{notice}</div>
    {tab!=="book" && <section className="game-panel">
      <button className="panel-close" onClick={()=>setTab("book")}>×</button>
      {tab==="quests" && <><div className="eyebrow">YOUR ADVENTURE LOG</div><h2>Island Quests</h2><p className="panel-intro">Complete challenges to earn coins and experience.</p>{availableQuests.map(q=><div className="quest-row" key={q.id}><div><strong>{q.title}</strong><p>{q.detail}</p><small>{q.progress}/{q.goal} progress · Reward {q.reward} coins</small></div><button disabled={!q.ready} onClick={()=>claimQuest(q.id)}>{q.done?"DONE":q.ready?"CLAIM":"IN PROGRESS"}</button></div>)}</>}
      {tab==="battle" && <><div className="eyebrow">ISLAND ENCOUNTER</div><h2>Wild Mossling</h2><div className="combat-bars"><div><span>YOU · {playerHp}/100 HP</span><div><i style={{width:playerHp+"%"}}/></div></div><div><span>MOSSLING · {enemyHp}/48 HP</span><div><i style={{width:(enemyHp/48*100)+"%"}}/></div></div></div><p className="battle-log">{battleLog}</p><div className="battle-actions"><button disabled={battleWon||playerHp===0||enemyHp===0} onClick={attack}>⚔ Basic Attack</button>{spellCards.slice(0,3).map(card=><button key={card.id} disabled={battleWon||playerHp===0||enemyHp===0} onClick={()=>castSpell(card)}>✦ {card.name}</button>)}</div><div className="panel-actions"><button className="secondary" onClick={rest}>REST · RESTORE HEALTH</button><button className="secondary" onClick={startBattle}>NEW ENCOUNTER</button></div><small className="fine-print">Turn-based solo encounter. Spell cards must first be discovered.</small></>}
      {tab==="market" && <><div className="eyebrow">WANDERING MERCHANT</div><h2>Island Trading Post</h2><p className="panel-intro">Exchange your earned coins for cards. This is a local solo market, not player-to-player trading yet.</p><div className="market-grid">{marketCards.map(card=>{const cost=card.rarity==="Legendary"?90:card.rarity==="Epic"?65:card.rarity==="Rare"?40:25;return <div className="market-card" key={card.id}><small>{card.type} · {card.rarity}</small><strong>{card.name}</strong><button disabled={save.coins<cost} onClick={()=>buyCard(card)}>BUY · ◈ {cost}</button></div>})}</div></>}
    </section>}
    {tab==="book" && <section className="book-modal"><div className="eyebrow">PERSONAL ARCHIVE</div><h2>Player Book</h2><p className="muted">Your discoveries are saved on this device.</p><div className="book-stats"><div><strong>{collectedCards.length}/100</strong><small>CARDS</small></div><div><strong>{level}</strong><small>LEVEL</small></div><div><strong>{save.xp}</strong><small>XP</small></div><div><strong>{save.coins}</strong><small>COINS</small></div></div><div className="collection-grid">{collectedCards.length===0?<div className="empty-book"><span>?</span><b>NO CARDS DISCOVERED</b><small>Search the island to find your first card.</small></div>:collectedCards.map(card=><div className="collection-card" key={card.id}><small>{card.id} · {card.rarity}</small><strong>{card.name}</strong><span>{card.type}</span></div>)}</div><div className="panel-actions"><button onClick={discoverCard}>✧ SEARCH FOR A CARD</button><button className="secondary" onClick={()=>setTab("quests")}>VIEW QUESTS</button><button className="secondary" onClick={startBattle}>ENTER BATTLE</button></div><small className="fine-print">Your progress is stored in this browser. It is not yet synced across devices.</small></section>}
    <div className="build-tag">PLAYABLE SOLO BUILD · 0.2.0</div>
  </main>;
}
