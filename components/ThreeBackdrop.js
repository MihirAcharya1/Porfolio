'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackdrop() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 1.1, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const copper = new THREE.Color('#C97A3D');
    const paper = new THREE.Color('#F3EFE6');
    const slate = new THREE.Color('#687183');

    const coreGeometry = new THREE.IcosahedronGeometry(1.55, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: copper,
      wireframe: true,
      transparent: true,
      opacity: 0.42,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.set(2.5, 0.25, 0);
    group.add(core);

    const ringGeometry = new THREE.TorusGeometry(2.15, 0.012, 12, 96);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: paper,
      transparent: true,
      opacity: 0.18,
    });
    const rings = [0, 1, 2].map((index) => {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(core.position);
      ring.rotation.set(index * 0.9, index * 0.7, index * 0.45);
      group.add(ring);
      return ring;
    });

    const grid = new THREE.GridHelper(12, 28, slate, slate);
    grid.position.set(0, -2.2, -1.5);
    grid.rotation.x = 0.25;
    grid.material.transparent = true;
    grid.material.opacity = 0.13;
    group.add(grid);

    const pointGeometry = new THREE.BufferGeometry();
    const pointPositions = [];
    for (let index = 0; index < 90; index += 1) {
      const radius = 3.5 + Math.random() * 3.5;
      const angle = Math.random() * Math.PI * 2;
      pointPositions.push(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 4.5,
        Math.sin(angle) * radius - 1.5
      );
    }
    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointPositions, 3));

    const pointMaterial = new THREE.PointsMaterial({
      color: paper,
      size: 0.026,
      transparent: true,
      opacity: 0.38,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    group.add(points);

    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleResize);

    let frameId;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      const scrollDepth = window.scrollY * 0.0005;

      group.rotation.y += ((pointer.x * 0.12) - group.rotation.y) * 0.035;
      group.rotation.x += ((-pointer.y * 0.08) - group.rotation.x) * 0.035;
      group.position.y = scrollDepth;

      if (!prefersReducedMotion) {
        core.rotation.x = elapsed * 0.18;
        core.rotation.y = elapsed * 0.26;
        rings.forEach((ring, index) => {
          ring.rotation.z = elapsed * (0.08 + index * 0.025);
          ring.rotation.x += 0.002 + index * 0.0008;
        });
        points.rotation.y = elapsed * 0.018;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      pointGeometry.dispose();
      pointMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-90"
    />
  );
}
