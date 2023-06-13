import { useEffect, useRef } from 'react';
import * as Three from 'three';

import * as sCanvas from './Sky.styles';

const Sky = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let requestAnimationFrameIdRef = useRef<number>(0);

    useEffect(() => {
        if (canvasRef.current == null) {
            throw new Error('Canvas is not found');
        }

        const { offsetWidth: width, offsetHeight: height } = canvasRef.current;

        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(75, width / height, 1, 900);

        camera.position.z = 500;
        camera.position.y = 0;
        camera.position.x = 0;

        const renderer = new Three.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(width, height);

        const starsAmount = 30000;
        const starsBufferLength = starsAmount * 3;

        const stars = {
            buffer: new Three.BufferGeometry(),
            material: new Three.PointsMaterial(),
            position: new Float32Array(starsBufferLength),
        };

        const vector = new Three.Vector3();

        const getRandomNumber = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        for (let i = 0; i < starsAmount; i++) {
            const x = (Math.random() * width) / 1.1;
            const y = Math.random() * height;

            const distance = Math.sqrt(Math.pow(x - 0, 2) + Math.pow(y - -height, 2));
            const angle = (Math.atan2(y, x) * 180) / Math.PI;

            vector.x = distance * Math.cos(angle);
            vector.y = distance * Math.sin(angle);
            vector.z = getRandomNumber(2, 350);

            vector.toArray(stars.position, i * 3);
        }

        stars.buffer.setAttribute('position', new Three.BufferAttribute(stars.position, 3));

        const starsMesh = new Three.Points(stars.buffer, stars.material);

        scene.add(starsMesh);

        const quaternion = new Three.Quaternion();

        let radians = 0;
        starsMesh.position.y = -height * 2;

        let lastTime = 0;

        function animate() {
            const currentTime = performance.now();
            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;

            if (!starsMesh.quaternion.equals(quaternion)) {
                const stepAmount = 0.000002;
                const step = stepAmount * deltaTime;
                starsMesh.quaternion.rotateTowards(quaternion, step);
            } else {
                radians += 1;
                quaternion.setFromAxisAngle(new Three.Vector3(0, 0, 1), (radians * 180) / Math.PI);
            }
            renderer.render(scene, camera);
            lastTime = currentTime;
            requestAnimationFrameIdRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            renderer.dispose();
            stars.buffer.dispose();
            stars.material.dispose();
            window.cancelAnimationFrame(requestAnimationFrameIdRef.current);
        };
    }, []);

    return <sCanvas.Canvas ref={canvasRef} />;
};

export default Sky;
