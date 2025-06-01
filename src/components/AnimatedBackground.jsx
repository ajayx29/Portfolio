import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom cybersecurity symbols for the background
const CyberSecuritySymbols = (props) => {
  const ref = useRef();
  
  // Create textures for different cybersecurity symbols
  const symbolTextures = useMemo(() => {
    return createCyberSecurityTextures();
  }, []);
  
  // Define cybersecurity symbols as custom geometries
  const symbols = useMemo(() => {
    // Create an array of cybersecurity-related symbols/shapes
    const symbolsCount = 150; // Increased count for more symbols
    const positions = new Float32Array(symbolsCount * 3);
    const colors = new Float32Array(symbolsCount * 3);
    const sizes = new Float32Array(symbolsCount);
    const velocities = new Float32Array(symbolsCount * 3); // Add velocities for movement
    
    const color1 = new THREE.Color('#32d17a'); // Green
    const color2 = new THREE.Color('#5CE1E6'); // Cyan
    const color3 = new THREE.Color('#ff3333'); // Red for alert symbols
    const color4 = new THREE.Color('#ffcc00'); // Yellow for some tech logos
    
    // Symbol types (0-15 representing different cybersecurity and tech symbols)
    const symbolTypes = new Float32Array(symbolsCount);
    
    for (let i = 0; i < symbolsCount; i++) {
      // Position symbols in a sphere
      const i3 = i * 3;
      const radius = Math.random() * 4.5 + 0.5; // Increased radius for more spread
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Add random velocities for movement
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
      
      // Assign a random symbol type (0-15)
      symbolTypes[i] = Math.floor(Math.random() * 16);
      
      // Vary sizes based on symbol type
      sizes[i] = Math.random() * 0.15 + 0.1; // Increased size for better visibility
      
      // Color based on symbol type
      let mixedColor;
      if (symbolTypes[i] < 4) {
        // Lock, shield, key symbols in green
        mixedColor = color1.clone();
      } else if (symbolTypes[i] < 8) {
        // Code, server, network symbols in cyan
        mixedColor = color2.clone();
      } else if (symbolTypes[i] < 12) {
        // Alert symbols in red
        mixedColor = color3.clone();
      } else {
        // Tech logos in yellow
        mixedColor = color4.clone();
      }
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    
    return { positions, colors, sizes, symbolTypes, velocities };
  }, []);
  
  // Single Points component with all symbols
  const pointsRef = useRef();
  
  useFrame((state) => {
    const { clock } = state;
    const elapsedTime = clock.getElapsedTime();
    
    if (pointsRef.current) {
      // Rotate the entire symbol field
      pointsRef.current.rotation.x = elapsedTime * 0.03;
      pointsRef.current.rotation.y = elapsedTime * 0.05;
      
      // Add movement to individual symbols
      const positions = pointsRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const i3 = i;
        
        // Apply velocity-based movement
        positions[i3] += symbols.velocities[i3] * Math.sin(elapsedTime * 0.5);
        positions[i3 + 1] += symbols.velocities[i3 + 1] * Math.cos(elapsedTime * 0.3);
        positions[i3 + 2] += symbols.velocities[i3 + 2] * Math.sin(elapsedTime * 0.4);
        
        // Add boundary check to keep symbols within a certain range
        const maxDistance = 6;
        const distance = Math.sqrt(
          positions[i3] * positions[i3] + 
          positions[i3 + 1] * positions[i3 + 1] + 
          positions[i3 + 2] * positions[i3 + 2]
        );
        
        if (distance > maxDistance) {
          const scale = maxDistance / distance;
          positions[i3] *= scale;
          positions[i3 + 1] *= scale;
          positions[i3 + 2] *= scale;
          
          // Reverse velocity when hitting boundary
          symbols.velocities[i3] *= -1;
          symbols.velocities[i3 + 1] *= -1;
          symbols.velocities[i3 + 2] *= -1;
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  // Create a single Points component with all symbols
  return (
    <Points
      ref={pointsRef}
      positions={symbols.positions}
      colors={symbols.colors}
      sizes={symbols.sizes}
    >
      <PointMaterial
        transparent={true}
        vertexColors={true}
        size={0.5} // Increased size for better visibility
        sizeAttenuation={true}
        depthWrite={false}
        alphaTest={0.01}
        blending={THREE.AdditiveBlending}
        map={symbolTextures[0]} // Use the first texture as default
      />
    </Points>
  );
};

// Create multiple cybersecurity symbol textures
const createCyberSecurityTextures = () => {
  const textures = [];
  const symbolDrawFunctions = [
    drawLockSymbol,
    drawShieldSymbol,
    drawKeySymbol,
    drawCodeSymbol,
    drawServerSymbol,
    drawAlertSymbol,
    drawNetworkSymbol,
    drawFingerprint,
    // Additional tech logos
    drawAWSLogo,
    drawLinuxLogo,
    drawGolangLogo,
    drawCLogo,
    drawCppLogo,
    drawPythonLogo,
    drawTerminalLogo,
    drawKaliLogo,
    drawWifiSymbol,
    drawHashcatLogo,
    drawBurpSuiteLogo,
    drawMetasploitLogo,
    drawJackTheRipperLogo,
    drawAircrackLogo,
    drawDockerLogo,
    drawKubernetesLogo
  ];
  
  for (const drawSymbol of symbolDrawFunctions) {
    const canvas = document.createElement('canvas');
    canvas.width = 128; // Increased size for better detail
    canvas.height = 128;
    const context = canvas.getContext('2d');
    
    // Fill with transparent background
    context.fillStyle = 'rgba(0, 0, 0, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the specific symbol
    drawSymbol(context, canvas.width, canvas.height);
    
    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    textures.push(texture);
  }
  
  return textures;
};

// Original symbol drawing functions
const drawLockSymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 3;
  
  // Draw lock body
  ctx.beginPath();
  ctx.roundRect(width/4, height/2, width/2, height/3, 3);
  ctx.fill();
  
  // Draw lock shackle
  ctx.beginPath();
  ctx.arc(width/2, height/2, width/6, Math.PI, 0, true);
  ctx.stroke();
};

const drawShieldSymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw shield
  ctx.beginPath();
  ctx.moveTo(width/2, height/6);
  ctx.lineTo(width*3/4, height/4);
  ctx.lineTo(width*3/4, height/2);
  ctx.quadraticCurveTo(width/2, height*5/6, width/4, height/2);
  ctx.lineTo(width/4, height/4);
  ctx.closePath();
  ctx.fill();
};

const drawKeySymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw key head
  ctx.beginPath();
  ctx.arc(width/3, height/3, width/8, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw key shaft
  ctx.beginPath();
  ctx.moveTo(width/3, height/3);
  ctx.lineTo(width*2/3, height*2/3);
  ctx.lineTo(width*3/4, height*2/3);
  ctx.stroke();
  
  // Draw key teeth
  ctx.beginPath();
  ctx.moveTo(width*2/3, height*2/3);
  ctx.lineTo(width*2/3, height*3/4);
  ctx.stroke();
};

const drawCodeSymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw < >
  ctx.beginPath();
  ctx.moveTo(width/4, height/2);
  ctx.lineTo(width/3, height/3);
  ctx.lineTo(width/4, height/6);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width*3/4, height/2);
  ctx.lineTo(width*2/3, height/3);
  ctx.lineTo(width*3/4, height/6);
  ctx.stroke();
  
  // Draw /
  ctx.beginPath();
  ctx.moveTo(width/3, height*2/3);
  ctx.lineTo(width*2/3, height/3);
  ctx.stroke();
};

const drawServerSymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw server rack
  ctx.beginPath();
  ctx.rect(width/4, height/4, width/2, height/2);
  ctx.stroke();
  
  // Draw server lines
  ctx.beginPath();
  ctx.moveTo(width/4, height*3/8);
  ctx.lineTo(width*3/4, height*3/8);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width/4, height*5/8);
  ctx.lineTo(width*3/4, height*5/8);
  ctx.stroke();
};

const drawAlertSymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw triangle
  ctx.beginPath();
  ctx.moveTo(width/2, height/6);
  ctx.lineTo(width*5/6, height*5/6);
  ctx.lineTo(width/6, height*5/6);
  ctx.closePath();
  ctx.stroke();
  
  // Draw exclamation mark
  ctx.beginPath();
  ctx.arc(width/2, height*2/3, width/16, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.rect(width/2 - width/32, height/3, width/16, height/4);
  ctx.fill();
};

const drawNetworkSymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw nodes
  ctx.beginPath();
  ctx.arc(width/2, height/4, width/12, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(width/4, height*2/3, width/12, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(width*3/4, height*2/3, width/12, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw connections
  ctx.beginPath();
  ctx.moveTo(width/2, height/4);
  ctx.lineTo(width/4, height*2/3);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width/2, height/4);
  ctx.lineTo(width*3/4, height*2/3);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width/4, height*2/3);
  ctx.lineTo(width*3/4, height*2/3);
  ctx.stroke();
};

const drawFingerprint = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw fingerprint arcs
  const centerX = width/2;
  const centerY = height/2;
  
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, width/10 * i, Math.PI * 0.8, Math.PI * 2.2);
    ctx.stroke();
  }
};

// New tech logo drawing functions
const drawAWSLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw AWS smile arrow
  ctx.beginPath();
  ctx.moveTo(width/6, height/2);
  ctx.lineTo(width/3, height*2/3);
  ctx.lineTo(width*2/3, height*2/3);
  ctx.lineTo(width*5/6, height/2);
  ctx.stroke();
  
  // Draw AWS text
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('AWS', width/2, height/3);
};

const drawLinuxLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Tux (simplified)
  // Head
  ctx.beginPath();
  ctx.arc(width/2, height/3, width/6, 0, Math.PI * 2);
  ctx.fill();
  
  // Body
  ctx.beginPath();
  ctx.ellipse(width/2, height*2/3, width/5, height/4, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Eyes
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(width*2/5, height/3, width/20, 0, Math.PI * 2);
  ctx.arc(width*3/5, height/3, width/20, 0, Math.PI * 2);
  ctx.fill();
};

const drawGolangLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Go gopher (simplified)
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('GO', width/2, height/2);
  
  // Draw ears
  ctx.beginPath();
  ctx.arc(width/3, height/3, width/10, 0, Math.PI * 2);
  ctx.arc(width*2/3, height/3, width/10, 0, Math.PI * 2);
  ctx.fill();
};

const drawCLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 3;
  
  // Draw C
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C', width/2, height/2);
};

const drawCppLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 3;
  
  // Draw C++
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C++', width/2, height/2);
};

const drawPythonLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Python (simplified snake)
  ctx.beginPath();
  ctx.moveTo(width/6, height/2);
  ctx.lineTo(width/3, height/3);
  ctx.lineTo(width*2/3, height/3);
  ctx.lineTo(width*5/6, height/2);
  ctx.lineTo(width*2/3, height*2/3);
  ctx.lineTo(width/3, height*2/3);
  ctx.closePath();
  ctx.fill();
  
  // Eye
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(width/4, height/2, width/20, 0, Math.PI * 2);
  ctx.fill();
};

const drawTerminalLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw terminal window
  ctx.beginPath();
  ctx.rect(width/6, height/4, width*2/3, height/2);
  ctx.stroke();
  
  // Draw prompt
  ctx.beginPath();
  ctx.moveTo(width/4, height*2/5);
  ctx.lineTo(width/3, height/2);
  ctx.lineTo(width/4, height*3/5);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width*2/5, height*3/5);
  ctx.lineTo(width*3/5, height*3/5);
  ctx.stroke();
};

const drawKaliLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Kali dragon (simplified)
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('KALI', width/2, height/2);
  
  // Draw dragon tail
  ctx.beginPath();
  ctx.moveTo(width/3, height*2/3);
  ctx.quadraticCurveTo(width/2, height*5/6, width*2/3, height*2/3);
  ctx.stroke();
};

const drawWifiSymbol = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw WiFi arcs
  const centerX = width/2;
  const centerY = height*2/3;
  
  for (let i = 1; i <= 3; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, width/5 * i/2, Math.PI, 0);
    ctx.stroke();
  }
  
  // Draw dot
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(centerX, centerY, width/20, 0, Math.PI * 2);
  ctx.fill();
};

const drawHashcatLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw hashcat text
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('HASHCAT', width/2, height/2);
  
  // Draw hash symbol
  ctx.beginPath();
  ctx.moveTo(width/3, height/3);
  ctx.lineTo(width*2/3, height/3);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width/3, height*2/3);
  ctx.lineTo(width*2/3, height*2/3);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width*2/5, height/4);
  ctx.lineTo(width*2/5, height*3/4);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width*3/5, height/4);
  ctx.lineTo(width*3/5, height*3/4);
  ctx.stroke();
};

const drawBurpSuiteLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Burp Suite (simplified)
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('BURP', width/2, height/2);
  
  // Draw spider
  ctx.beginPath();
  ctx.arc(width/2, height/3, width/10, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw legs
  for (let i = 0; i < 4; i++) {
    const angle = Math.PI / 4 + i * Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(width/2, height/3);
    ctx.lineTo(
      width/2 + Math.cos(angle) * width/4,
      height/3 + Math.sin(angle) * height/4
    );
    ctx.stroke();
  }
};

const drawMetasploitLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Metasploit M
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('M', width/2, height/2);
  
  // Draw frame
  ctx.beginPath();
  ctx.rect(width/4, height/4, width/2, height/2);
  ctx.stroke();
};

const drawJackTheRipperLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw JTR
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('JTR', width/2, height/2);
  
  // Draw key
  ctx.beginPath();
  ctx.arc(width/2, height/4, width/12, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width/2, height/4 + width/12);
  ctx.lineTo(width/2, height*2/3);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width/2, height*2/3);
  ctx.lineTo(width*2/3, height*2/3);
  ctx.stroke();
};

const drawAircrackLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Aircrack text
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('AIRCRACK', width/2, height*2/3);
  
  // Draw WiFi symbol
  const centerX = width/2;
  const centerY = height/3;
  
  for (let i = 1; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, width/6 * i/2, Math.PI, 0);
    ctx.stroke();
  }
  
  // Draw broken line
  ctx.beginPath();
  ctx.moveTo(width/3, height/2);
  ctx.lineTo(width/2, height/3);
  ctx.lineTo(width*2/3, height/2);
  ctx.stroke();
};

const drawDockerLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Docker whale (simplified)
  // Body
  ctx.beginPath();
  ctx.rect(width/4, height/3, width/2, height/3);
  ctx.fill();
  
  // Containers
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      if (i === 2 && j === 1) continue; // Skip one box
      ctx.beginPath();
      ctx.rect(
        width/4 + i * width/6,
        height/3 - j * height/6,
        width/8,
        height/8
      );
      ctx.stroke();
    }
  }
};

const drawKubernetesLogo = (ctx, width, height) => {
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 2;
  
  // Draw Kubernetes wheel (simplified)
  ctx.beginPath();
  ctx.arc(width/2, height/2, width/4, 0, Math.PI * 2);
  ctx.stroke();
  
  // Draw spokes
  for (let i = 0; i < 7; i++) {
    const angle = i * Math.PI / 3.5;
    ctx.beginPath();
    ctx.moveTo(width/2, height/2);
    ctx.lineTo(
      width/2 + Math.cos(angle) * width/4,
      height/2 + Math.sin(angle) * width/4
    );
    ctx.stroke();
  }
};

// Main component
const Stars = (props) => {
  const ref = useRef();
  
  // Generate random stars
  const [positions, colors] = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Position stars in a sphere
      const radius = Math.random() * 4 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // All white dots
      colors[i3] = 1;     // R
      colors[i3 + 1] = 1; // G
      colors[i3 + 2] = 1; // B
    }
    
    return [positions, colors];
  }, []);
  
  useFrame((state) => {
    const { clock } = state;
    const elapsedTime = clock.getElapsedTime();
    
    // Rotate the entire star field
    ref.current.rotation.x = elapsedTime * 0.05;
    ref.current.rotation.y = elapsedTime * 0.03;
    
    // Add subtle movement to individual stars
    const positions = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const i3 = i;
      // Add subtle sine wave movement
      positions[i3 + 1] += Math.sin(elapsedTime + i) * 0.0005;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const AnimatedBackground = () => {
  return (
    <>
      <color attach="background" args={['#050816']} />
      <ambientLight intensity={0.5} />
      <Stars />
      <fog attach="fog" args={['#050816', 3.5, 7]} />
    </>
  );
};

export default AnimatedBackground;