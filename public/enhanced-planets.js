// Enhanced Planet Creation with Realistic Textures
// This file contains improved planet creation functions that support both
// procedural textures (current system) and realistic planet images

class EnhancedPlanetRenderer {
  constructor() {
    this.textureLoader = new THREE.TextureLoader();
    this.loadedTextures = new Map();
    this.useRealisticTextures = true; // Set to false to use procedural textures
  }

  // Enhanced planet texture URLs - replace with your actual texture files
  getPlanetTextureUrls() {
    return {
      sun: 'textures/sun.jpg',
      mercury: 'textures/mercury.jpg',
      venus: 'textures/venus.jpg',
      earth: 'textures/earth.jpg',
      mars: 'textures/mars.jpg',
      jupiter: 'textures/jupiter.jpg',
      saturn: 'textures/saturn.jpg',
      uranus: 'textures/uranus.jpg',
      neptune: 'textures/neptune.jpg',
      pluto: 'textures/pluto.jpg'
    };
  }

  // Preload all planet textures
  async preloadTextures() {
    const textureUrls = this.getPlanetTextureUrls();
    const loadPromises = [];

    for (const [planet, url] of Object.entries(textureUrls)) {
      const promise = new Promise((resolve, reject) => {
        this.textureLoader.load(
          url,
          (texture) => {
            // Configure texture for better quality
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.minFilter = THREE.LinearMipmapLinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = true;
            
            this.loadedTextures.set(planet, texture);
            console.log(`✅ Loaded texture for ${planet}`);
            resolve(texture);
          },
          (progress) => {
            console.log(`Loading ${planet} texture: ${(progress.loaded / progress.total * 100)}%`);
          },
          (error) => {
            console.warn(`⚠️ Failed to load texture for ${planet}:`, error);
            // Don't reject - we'll fall back to procedural textures
            resolve(null);
          }
        );
      });
      loadPromises.push(promise);
    }

    await Promise.all(loadPromises);
    console.log(`🎨 Texture loading complete. Loaded ${this.loadedTextures.size} textures.`);
  }

  // Create enhanced celestial object with realistic textures
  createEnhancedCelestialObject(key, data, radius, xPosition) {
    // Create geometry
    const geometry = new THREE.CircleGeometry(radius, 64);
    let material;

    // Try to use realistic texture first
    const realisticTexture = this.loadedTextures.get(key);
    
    if (this.useRealisticTextures && realisticTexture) {
      // Use realistic planet texture
      material = new THREE.MeshBasicMaterial({
        map: realisticTexture,
        transparent: false,
        opacity: 1.0
      });
      console.log(`🌍 Using realistic texture for ${key}`);
    } else {
      // Fall back to enhanced procedural texture
      material = new THREE.MeshBasicMaterial({
        map: this.createEnhancedProceduralTexture(key, data, radius),
        transparent: false,
        opacity: 1.0
      });
      console.log(`🎨 Using enhanced procedural texture for ${key}`);
    }

    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = { key, data, originalColor: data.color };
    mesh.position.set(xPosition, 0, 0);

    // Add special effects
    this.addSpecialEffects(mesh, key, data, radius);

    return mesh;
  }

  // Enhanced procedural texture creation with better quality
  createEnhancedProceduralTexture(key, data, radius) {
    const canvas = document.createElement('canvas');
    const size = Math.max(512, radius * 8); // Higher resolution
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');

    // Enable high-quality rendering
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    // Create more sophisticated gradients
    const gradient = this.createAdvancedGradient(context, size, key);
    
    // Fill base
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    // Add planet-specific enhanced details
    this.addEnhancedPlanetDetails(context, size, key);

    // Create and return texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    return texture;
  }

  // Create more sophisticated gradients
  createAdvancedGradient(context, size, key) {
    // Multiple gradient layers for more realism
    const gradient1 = context.createRadialGradient(
      size * 0.3, size * 0.3, 0,
      size * 0.5, size * 0.5, size * 0.6
    );

    // Planet-specific enhanced colors
    switch (key) {
      case 'sun':
        gradient1.addColorStop(0, '#ffffff');
        gradient1.addColorStop(0.1, '#ffff99');
        gradient1.addColorStop(0.3, '#ffcc00');
        gradient1.addColorStop(0.6, '#ff9900');
        gradient1.addColorStop(0.8, '#ff6600');
        gradient1.addColorStop(1, '#cc3300');
        break;
      
      case 'earth':
        gradient1.addColorStop(0, '#b3d9ff');
        gradient1.addColorStop(0.2, '#87ceeb');
        gradient1.addColorStop(0.4, '#6b93d6');
        gradient1.addColorStop(0.7, '#4682b4');
        gradient1.addColorStop(0.9, '#2f4f4f');
        gradient1.addColorStop(1, '#1a1a2e');
        break;
      
      case 'mars':
        gradient1.addColorStop(0, '#ffb3b3');
        gradient1.addColorStop(0.2, '#ff8c69');
        gradient1.addColorStop(0.5, '#cd5c5c');
        gradient1.addColorStop(0.8, '#8b3a3a');
        gradient1.addColorStop(1, '#4d1f1f');
        break;
      
      case 'jupiter':
        gradient1.addColorStop(0, '#fff2d9');
        gradient1.addColorStop(0.2, '#f4e4bc');
        gradient1.addColorStop(0.4, '#d8ca9d');
        gradient1.addColorStop(0.7, '#b8a082');
        gradient1.addColorStop(1, '#8b7355');
        break;
      
      default:
        // Enhanced default gradient
        const baseColor = `#${data.color.toString(16).padStart(6, '0')}`;
        gradient1.addColorStop(0, this.lightenColor(baseColor, 40));
        gradient1.addColorStop(0.3, this.lightenColor(baseColor, 20));
        gradient1.addColorStop(0.6, baseColor);
        gradient1.addColorStop(0.9, this.darkenColor(baseColor, 30));
        gradient1.addColorStop(1, this.darkenColor(baseColor, 50));
    }

    return gradient1;
  }

  // Add enhanced planet-specific details
  addEnhancedPlanetDetails(context, size, key) {
    switch (key) {
      case 'sun':
        this.addSolarFlares(context, size);
        this.addSolarGranulation(context, size);
        break;
      
      case 'earth':
        this.addContinents(context, size);
        this.addClouds(context, size);
        this.addCityLights(context, size);
        break;
      
      case 'mars':
        this.addPolarIceCaps(context, size);
        this.addMartianCanyons(context, size);
        break;
      
      case 'jupiter':
        this.addJupiterBands(context, size);
        this.addGreatRedSpot(context, size);
        break;
      
      case 'saturn':
        this.addSaturnBands(context, size);
        break;
      
      default:
        this.addGenericSurfaceFeatures(context, size);
    }
  }

  // Enhanced solar flares
  addSolarFlares(context, size) {
    context.globalAlpha = 0.4;
    for (let i = 0; i < 25; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const flareSize = Math.random() * size * 0.08;
      
      const flareGradient = context.createRadialGradient(x, y, 0, x, y, flareSize);
      flareGradient.addColorStop(0, '#ffffff');
      flareGradient.addColorStop(0.5, '#ffff00');
      flareGradient.addColorStop(1, 'rgba(255, 255, 0, 0)');
      
      context.fillStyle = flareGradient;
      context.beginPath();
      context.arc(x, y, flareSize, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  }

  // Add solar granulation pattern
  addSolarGranulation(context, size) {
    context.globalAlpha = 0.2;
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const granuleSize = Math.random() * size * 0.02;
      
      context.fillStyle = Math.random() > 0.5 ? '#ffcc00' : '#ff9900';
      context.beginPath();
      context.arc(x, y, granuleSize, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  }

  // Enhanced Earth continents
  addContinents(context, size) {
    context.globalAlpha = 0.6;
    
    // More realistic continent shapes
    const continents = [
      { x: size * 0.2, y: size * 0.3, w: size * 0.15, h: size * 0.2 }, // North America
      { x: size * 0.4, y: size * 0.25, w: size * 0.12, h: size * 0.25 }, // Europe/Africa
      { x: size * 0.6, y: size * 0.4, w: size * 0.18, h: size * 0.15 }, // Asia
      { x: size * 0.75, y: size * 0.7, w: size * 0.1, h: size * 0.08 }, // Australia
    ];

    context.fillStyle = '#228B22';
    continents.forEach(continent => {
      context.beginPath();
      context.ellipse(continent.x, continent.y, continent.w, continent.h, 0, 0, Math.PI * 2);
      context.fill();
    });
    
    context.globalAlpha = 1;
  }

  // Enhanced cloud patterns
  addClouds(context, size) {
    context.globalAlpha = 0.4;
    
    // Swirling cloud patterns
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const cloudSize = Math.random() * size * 0.12;
      
      const cloudGradient = context.createRadialGradient(x, y, 0, x, y, cloudSize);
      cloudGradient.addColorStop(0, '#ffffff');
      cloudGradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
      cloudGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      context.fillStyle = cloudGradient;
      context.beginPath();
      context.arc(x, y, cloudSize, 0, Math.PI * 2);
      context.fill();
    }
    
    context.globalAlpha = 1;
  }

  // Add city lights (night side effect)
  addCityLights(context, size) {
    context.globalAlpha = 0.3;
    context.fillStyle = '#ffff99';
    
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const lightSize = Math.random() * 2 + 1;
      
      context.beginPath();
      context.arc(x, y, lightSize, 0, Math.PI * 2);
      context.fill();
    }
    
    context.globalAlpha = 1;
  }

  // Enhanced Jupiter bands
  addJupiterBands(context, size) {
    context.globalAlpha = 0.5;
    
    const bandColors = ['#DEB887', '#CD853F', '#D2B48C', '#F4A460'];
    
    for (let i = 0; i < 8; i++) {
      const y = (i + 1) * size / 9;
      const bandHeight = size * 0.08;
      
      context.fillStyle = bandColors[i % bandColors.length];
      context.fillRect(0, y - bandHeight/2, size, bandHeight);
    }
    
    context.globalAlpha = 1;
  }

  // Enhanced Great Red Spot
  addGreatRedSpot(context, size) {
    context.globalAlpha = 0.7;
    
    const spotGradient = context.createRadialGradient(
      size * 0.6, size * 0.4, 0,
      size * 0.6, size * 0.4, size * 0.1
    );
    spotGradient.addColorStop(0, '#DC143C');
    spotGradient.addColorStop(0.5, '#B22222');
    spotGradient.addColorStop(1, 'rgba(178, 34, 34, 0)');
    
    context.fillStyle = spotGradient;
    context.beginPath();
    context.ellipse(size * 0.6, size * 0.4, size * 0.1, size * 0.06, 0, 0, Math.PI * 2);
    context.fill();
    
    context.globalAlpha = 1;
  }

  // Add special effects (rings, glow, etc.)
  addSpecialEffects(mesh, key, data, radius) {
    // Enhanced sun glow
    if (key === 'sun') {
      this.addEnhancedSunGlow(mesh, radius);
    }

    // Enhanced Saturn rings
    if (data.hasRings) {
      this.addEnhancedRings(mesh, radius);
    }
  }

  // Enhanced sun glow effect
  addEnhancedSunGlow(mesh, radius) {
    // Multiple glow layers for more realism
    const glowLayers = [
      { size: 1.5, opacity: 0.3, color: '#ffff99' },
      { size: 2.0, opacity: 0.2, color: '#ffcc00' },
      { size: 2.5, opacity: 0.1, color: '#ff9900' }
    ];

    glowLayers.forEach((layer, index) => {
      const glowGeometry = new THREE.CircleGeometry(radius * layer.size, 32);
      const glowCanvas = document.createElement('canvas');
      const glowSize = radius * layer.size * 4;
      glowCanvas.width = glowSize;
      glowCanvas.height = glowSize;
      const glowContext = glowCanvas.getContext('2d');
      
      const glowGradient = glowContext.createRadialGradient(
        glowSize/2, glowSize/2, 0,
        glowSize/2, glowSize/2, glowSize/2
      );
      glowGradient.addColorStop(0, layer.color);
      glowGradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
      
      glowContext.fillStyle = glowGradient;
      glowContext.fillRect(0, 0, glowSize, glowSize);
      
      const glowTexture = new THREE.CanvasTexture(glowCanvas);
      const glowMaterial = new THREE.MeshBasicMaterial({
        map: glowTexture,
        transparent: true,
        opacity: layer.opacity
      });
      
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.z = -0.1 - (index * 0.01);
      mesh.add(glow);
    });
  }

  // Enhanced Saturn rings
  addEnhancedRings(mesh, radius) {
    // Multiple ring segments for more detail
    const ringSegments = [
      { inner: radius + 5, outer: radius + 8, opacity: 0.9, color: '#d4af37' },
      { inner: radius + 10, outer: radius + 12, opacity: 0.7, color: '#b8860b' },
      { inner: radius + 14, outer: radius + 16, opacity: 0.8, color: '#daa520' }
    ];

    ringSegments.forEach((segment, index) => {
      const ringGeometry = new THREE.RingGeometry(segment.inner, segment.outer, 64);
      
      // Create detailed ring texture
      const ringCanvas = document.createElement('canvas');
      ringCanvas.width = 200;
      ringCanvas.height = 200;
      const ringContext = ringCanvas.getContext('2d');
      
      // Create ring pattern with gaps and variations
      for (let i = 0; i < 20; i++) {
        const ringRadius = (i + 1) * 10;
        const alpha = 0.3 + (Math.random() * 0.4);
        ringContext.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
        ringContext.lineWidth = Math.random() * 3 + 1;
        ringContext.beginPath();
        ringContext.arc(100, 100, ringRadius, 0, Math.PI * 2);
        ringContext.stroke();
      }
      
      const ringTexture = new THREE.CanvasTexture(ringCanvas);
      const ringMaterial = new THREE.MeshBasicMaterial({
        map: ringTexture,
        transparent: true,
        opacity: segment.opacity,
        side: THREE.DoubleSide
      });
      
      const rings = new THREE.Mesh(ringGeometry, ringMaterial);
      rings.position.z = -0.05 - (index * 0.01);
      mesh.add(rings);
    });
  }

  // Utility functions for color manipulation
  lightenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  }

  darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R > 255 ? 255 : R < 0 ? 0 : R) * 0x10000 +
      (G > 255 ? 255 : G < 0 ? 0 : G) * 0x100 +
      (B > 255 ? 255 : B < 0 ? 0 : B)).toString(16).slice(1);
  }

  // Generic surface features for other planets
  addGenericSurfaceFeatures(context, size) {
    context.globalAlpha = 0.2;
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const featureSize = Math.random() * size * 0.1;
      context.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)';
      context.beginPath();
      context.arc(x, y, featureSize, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  }

  // Additional methods for Mars, Saturn, etc.
  addPolarIceCaps(context, size) {
    context.globalAlpha = 0.4;
    context.fillStyle = '#ffffff';
    
    // North pole
    context.beginPath();
    context.arc(size * 0.2, size * 0.2, size * 0.12, 0, Math.PI * 2);
    context.fill();
    
    // South pole
    context.beginPath();
    context.arc(size * 0.8, size * 0.8, size * 0.1, 0, Math.PI * 2);
    context.fill();
    
    context.globalAlpha = 1;
  }

  addMartianCanyons(context, size) {
    context.globalAlpha = 0.3;
    context.strokeStyle = '#8B4513';
    context.lineWidth = size * 0.01;
    
    // Valles Marineris-like canyon
    context.beginPath();
    context.moveTo(size * 0.3, size * 0.5);
    context.quadraticCurveTo(size * 0.5, size * 0.4, size * 0.7, size * 0.5);
    context.stroke();
    
    context.globalAlpha = 1;
  }

  addSaturnBands(context, size) {
    context.globalAlpha = 0.3;
    
    const bandColors = ['#FAD5A5', '#F5DEB3', '#DEB887'];
    
    for (let i = 0; i < 6; i++) {
      const y = (i + 1) * size / 7;
      context.fillStyle = bandColors[i % bandColors.length];
      context.fillRect(0, y - 3, size, 6);
    }
    
    context.globalAlpha = 1;
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EnhancedPlanetRenderer;
} else {
  window.EnhancedPlanetRenderer = EnhancedPlanetRenderer;
}
