import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const destinations = [
  { name: "Rome", lat: 41.9028, lng: 12.4964, days: "3 nights" },
  { name: "Florence", lat: 43.7696, lng: 11.2558, days: "2 nights" },
  { name: "Siena", lat: 43.3188, lng: 11.3308, days: "Day trip" },
  { name: "Cinque Terre", lat: 44.1461, lng: 9.6439, days: "1 night" },
  { name: "Portofino", lat: 44.3033, lng: 9.2106, days: "Day trip" },
  { name: "Positano", lat: 40.6280, lng: 14.4850, days: "3 nights" },
  { name: "Capri", lat: 40.5531, lng: 14.2223, days: "Day trip" },
  { name: "Ravello", lat: 40.6493, lng: 14.6115, days: "Day trip" },
];

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  
  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  const points = useMemo(() => {
    return destinations.map((dest) => latLngToVector3(dest.lat, dest.lng, 2.02));
  }, []);

  const routePoints = useMemo(() => {
    const allPoints: THREE.Vector3[] = [];
    for (let i = 0; i < destinations.length - 1; i++) {
      const start = latLngToVector3(destinations[i].lat, destinations[i].lng, 2.03);
      const end = latLngToVector3(destinations[i + 1].lat, destinations[i + 1].lng, 2.03);
      
      for (let t = 0; t <= 1; t += 0.05) {
        const point = new THREE.Vector3().lerpVectors(start, end, t);
        const height = 1 + Math.sin(t * Math.PI) * 0.08;
        point.multiplyScalar(height);
        allPoints.push(point);
      }
    }
    return allPoints;
  }, []);

  return (
    <group>
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#0F766E"
          emissive="#0F766E"
          emissiveIntensity={0.1}
          shininess={30}
          transparent
          opacity={0.9}
        />
      </Sphere>

      <Sphere ref={glowRef} args={[2.1, 32, 32]}>
        <meshBasicMaterial
          color="#0F766E"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {[...Array(12)].map((_, i) => (
        <mesh key={`lat-${i}`} rotation={[0, (i * Math.PI) / 6, 0]}>
          <torusGeometry args={[2.01, 0.003, 8, 64]} />
          <meshBasicMaterial color="#E5B8A7" transparent opacity={0.3} />
        </mesh>
      ))}

      {points.map((point, index) => (
        <group key={index} position={point}>
          <Sphere args={[0.05, 16, 16]}>
            <meshBasicMaterial color="#D97706" />
          </Sphere>
          <Sphere args={[0.08, 16, 16]}>
            <meshBasicMaterial color="#D97706" transparent opacity={0.3} />
          </Sphere>
        </group>
      ))}

      <Line
        points={routePoints}
        color="#D97706"
        lineWidth={2}
        dashed
        dashSize={0.1}
        gapSize={0.05}
      />
    </group>
  );
}

function GlobeLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
    </div>
  );
}

const GlobeVisualization = () => {
  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="font-accent text-base sm:text-lg text-secondary">Your Route</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 mb-3 sm:mb-4">
            Across <span className="gradient-text">Italy</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            From the eternal city to the Mediterranean coast, your journey spans the heart of Italy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* 3D Globe Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden glass order-2 lg:order-1"
          >
            <Suspense fallback={<GlobeLoader />}>
              <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.3} />
                <Globe />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  minDistance={4}
                  maxDistance={10}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </Suspense>

            {/* Mobile instruction */}
            <div className="absolute bottom-4 left-4 right-4 lg:hidden">
              <p className="text-xs text-center text-muted-foreground glass rounded-full px-3 py-2">
                Drag to rotate • Pinch to zoom
              </p>
            </div>
          </motion.div>

          {/* Destination List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-3 sm:space-y-4">
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 group hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base">{dest.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{dest.days}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* Total Distance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 glass rounded-xl sm:rounded-2xl"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-xl sm:text-2xl text-foreground">850</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">km traveled</p>
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl text-foreground">8</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">destinations</p>
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl text-foreground">14</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">days</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobeVisualization;
