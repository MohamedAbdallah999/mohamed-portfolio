# Shared UI Components

The portfolio is a single-page React application. Reusable primitives are defined inline in `src/App.tsx`; there is no separate component library.

## TechObject

- Source: `src/App.tsx`
- Description: Animated metallic cube used by the homepage Three.js scene.
- Props: `position`, `color`

```tsx
function TechObject({ position, color }: { position: [number, number, number]; color: string }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.elapsedTime * 0.35;
    mesh.current.rotation.y = clock.elapsedTime * 0.45;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.65} floatIntensity={1.4}>
      <group position={position}>
        <mesh ref={mesh}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color={color} metalness={0.65} roughness={0.22} />
        </mesh>
      </group>
    </Float>
  );
}
```

## HeroScene

- Source: `src/App.tsx`
- Description: Full-bleed Three.js scene with stars, four metallic cubes, and a wireframe torus knot.
- Props: none

```tsx
function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.8, 8], fov: 48 }} dpr={[1, 1.75]} aria-label="Animated 3D software engineering scene">
      <ambientLight intensity={0.72} />
      <pointLight position={[4, 4, 6]} intensity={1.6} color="#9ee7ff" />
      <pointLight position={[-4, -2, 4]} intensity={1.2} color="#bca7ff" />
      <Stars radius={80} depth={40} count={900} factor={4} saturation={0} fade speed={0.35} />
      <TechObject position={[-3.2, 1.4, 0]} color="#2dd4bf" />
      <TechObject position={[3.1, 1.1, -0.6]} color="#60a5fa" />
      <TechObject position={[-2.1, -1.6, 0.6]} color="#c4b5fd" />
      <TechObject position={[2.2, -1.45, 0.5]} color="#f8fafc" />
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[0, 0, -0.4]}>
          <torusKnotGeometry args={[1.25, 0.28, 160, 18]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.7} roughness={0.18} wireframe />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
    </Canvas>
  );
}
```

## Section

- Source: `src/App.tsx`
- Description: Animated section wrapper with eyebrow and title.
- Props: `id`, `eyebrow`, `title`, `children`

```tsx
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="section"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
```

## DownloadLink

- Source: `src/App.tsx`
- Description: Styled download action with Lucide download icon.
- Props: `href`, `children`, `className`

```tsx
function DownloadLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`download-link ${className}`} href={href} download>
      <Download size={17} aria-hidden="true" />
      {children}
    </a>
  );
}
```
