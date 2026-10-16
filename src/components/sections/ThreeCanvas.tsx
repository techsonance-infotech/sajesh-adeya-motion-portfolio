import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

// Custom Shader Materials
const BlobShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec3 vNormal;
    varying vec3 vPosition;

    // Simple pseudo-noise based on trigonometric sums
    float wave(vec3 p) {
      float w = sin(p.x * 1.5 + uTime * 0.8) * cos(p.y * 1.5 + uTime * 0.8) * 0.25;
      w += sin(p.y * 3.0 - uTime * 1.2) * 0.12;
      w += cos(p.z * 4.5 + uTime * 1.5) * 0.08;
      // Add mouse coordinate impact
      w += sin(p.x * 2.0 + uMouse.x * 3.0) * cos(p.y * 2.0 + uMouse.y * 3.0) * 0.05;
      return w;
    }

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      
      float displacement = wave(position);
      vec3 newPosition = position + normal * displacement;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // Camera viewing direction in view space (estimated)
      vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
      
      // Calculate fresnel (glow on outer edges)
      float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
      
      // Dynamic blue/sky-blue color palette matching TechSonance brand
      vec3 colorBlue = vec3(0.067, 0.333, 0.80); // #1155CC (TechSonance Royal Blue)
      vec3 colorSky = vec3(0.133, 0.714, 0.965); // #22B6F6 (TechSonance Sky Blue)
      
      // Interpolate colors based on coordinates and time
      float colorShift = sin(vPosition.x * 1.5 + uTime * 0.4) * 0.5 + 0.5;
      vec3 baseColor = mix(colorBlue, colorSky, colorShift);
      
      // Iridescent highlight composition
      vec3 finalColor = mix(baseColor, vec3(0.1, 0.5, 0.95), fresnel * 0.5);
      
      // Add fine transparency structure
      gl_FragColor = vec4(finalColor, 0.35 + fresnel * 0.45);
    }
  `,
};

function BlobMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Create uniforms once
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Smoothly rotate the blob
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = time * 0.1;
      
      // Update shader uniforms
      const material = meshRef.current.material as THREE.ShaderMaterial;
      if (material && material.uniforms) {
        material.uniforms.uTime.value = time;
        // Interpolate mouse coordinates for dampening / smooth parallax
        material.uniforms.uMouse.value.x += (mouseRef.current.x - material.uniforms.uMouse.value.x) * 0.05;
        material.uniforms.uMouse.value.y += (mouseRef.current.y - material.uniforms.uMouse.value.y) * 0.05;
      }
    }
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <icosahedronGeometry args={[1.3, 64]} />
      <shaderMaterial
        vertexShader={BlobShader.vertexShader}
        fragmentShader={BlobShader.fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
}

export default function ThreeCanvas() {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebGLSupported(supported);
    } catch (e) {
      setWebGLSupported(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Performance enhancement: Render simple CSS mesh radial gradient fallback on mobile/touch/no-WebGL
  if (!webGLSupported || isMobile) {
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-background">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full bg-hero-glow opacity-30 blur-3xl animate-glow-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-background">
      {/* Background glow behind 3D Canvas */}
      <div className="absolute inset-0 bg-hero-glow opacity-15 pointer-events-none" />
      
      <div className="w-full h-full pointer-events-auto">
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <BlobMesh />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
    </div>
  );
}
