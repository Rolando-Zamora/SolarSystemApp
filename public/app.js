// Solar System Data
const solarSystemData = {
  sun: {
    name: 'Sun',
    type: 'Star',
    radius: 696340,
    color: 0xFDB813,
    distance: 0,
    rotationSpeed: 0.004,
    orbitSpeed: 0,
    rotationPeriod: 609.12, // hours (25.4 days at equator)
    orbitalSpeed: 0, // km/s (N/A)
    texture: null
  },
  mercury: {
    name: 'Mercury',
    type: 'Planet',
    radius: 2439.7,
    color: 0x8C7853,
    distance: 57.9,
    rotationSpeed: 0.002,
    orbitSpeed: 0.02,
    rotationPeriod: 1407.6, // hours (58.6 days)
    orbitalSpeed: 47.4, // km/s
    texture: null
  },
  venus: {
    name: 'Venus',
    type: 'Planet',
    radius: 6051.8,
    color: 0xFFC649,
    distance: 108.2,
    rotationSpeed: -0.001,
    orbitSpeed: 0.015,
    rotationPeriod: -5832.5, // hours (243 days, retrograde)
    orbitalSpeed: 35.0, // km/s
    texture: null
  },
  earth: {
    name: 'Earth',
    type: 'Planet',
    radius: 6371,
    color: 0x6B93D6,
    distance: 149.6,
    rotationSpeed: 0.01,
    orbitSpeed: 0.01,
    rotationPeriod: 24, // hours
    orbitalSpeed: 29.8, // km/s
    texture: null
  },
  mars: {
    name: 'Mars',
    type: 'Planet',
    radius: 3389.5,
    color: 0xCD5C5C,
    distance: 227.9,
    rotationSpeed: 0.009,
    orbitSpeed: 0.008,
    rotationPeriod: 24.6, // hours
    orbitalSpeed: 24.1, // km/s
    texture: null
  },
  jupiter: {
    name: 'Jupiter',
    type: 'Planet',
    radius: 69911,
    color: 0xD8CA9D,
    distance: 778.5,
    rotationSpeed: 0.02,
    orbitSpeed: 0.005,
    rotationPeriod: 9.9, // hours
    orbitalSpeed: 13.1, // km/s
    texture: null
  },
  saturn: {
    name: 'Saturn',
    type: 'Planet',
    radius: 58232,
    color: 0xFAD5A5,
    distance: 1432,
    rotationSpeed: 0.018,
    orbitSpeed: 0.003,
    rotationPeriod: 10.7, // hours
    orbitalSpeed: 9.7, // km/s
    texture: null,
    hasRings: true
  },
  uranus: {
    name: 'Uranus',
    type: 'Planet',
    radius: 25362,
    color: 0x4FD0E7,
    distance: 2867,
    rotationSpeed: 0.012,
    orbitSpeed: 0.002,
    rotationPeriod: -17.2, // hours (retrograde)
    orbitalSpeed: 6.8, // km/s
    texture: null
  },
  neptune: {
    name: 'Neptune',
    type: 'Planet',
    radius: 24622,
    color: 0x4B70DD,
    distance: 4515,
    rotationSpeed: 0.011,
    orbitSpeed: 0.001,
    rotationPeriod: 16.1, // hours
    orbitalSpeed: 5.4, // km/s
    texture: null
  },
  pluto: {
    name: 'Pluto',
    type: 'Dwarf Planet',
    radius: 1188.3,
    color: 0xA0522D,
    distance: 5906.4,
    rotationSpeed: 0.001,
    orbitSpeed: 0.0008,
    rotationPeriod: 153.3, // hours (6.4 days)
    orbitalSpeed: 4.7, // km/s
    texture: null
  },
  ceres: {
    name: 'Ceres',
    type: 'Dwarf Planet',
    radius: 473,
    color: 0x8C7853,
    distance: 413.7,
    rotationSpeed: 0.003,
    orbitSpeed: 0.006,
    rotationPeriod: 9.1, // hours
    orbitalSpeed: 17.9, // km/s
    texture: null
  },
  eris: {
    name: 'Eris',
    type: 'Dwarf Planet',
    radius: 1163,
    color: 0xD3D3D3,
    distance: 10120,
    rotationSpeed: 0.001,
    orbitSpeed: 0.0005,
    rotationPeriod: 25.9, // hours
    orbitalSpeed: 3.4, // km/s
    texture: null
  },
  haumea: {
    name: 'Haumea',
    type: 'Dwarf Planet',
    radius: 816,
    color: 0xF5F5DC,
    distance: 6484,
    rotationSpeed: 0.003,
    orbitSpeed: 0.0007,
    rotationPeriod: 3.9, // hours (fastest rotating large object!)
    orbitalSpeed: 4.5, // km/s
    texture: null
  },
  makemake: {
    name: 'Makemake',
    type: 'Dwarf Planet',
    radius: 715,
    color: 0x8B4513,
    distance: 6850,
    rotationSpeed: 0.002,
    orbitSpeed: 0.0006,
    rotationPeriod: 22.5, // hours
    orbitalSpeed: 4.4, // km/s
    texture: null
  },
  moon: {
    name: 'Moon',
    type: 'Moon',
    radius: 1737.4,
    color: 0xC0C0C0,
    distance: 149.6,
    orbitDistance: 0.384,
    rotationSpeed: 0.005,
    orbitSpeed: 0.05,
    parent: 'earth',
    texture: null
  },
  europa: {
    name: 'Europa',
    type: 'Moon',
    radius: 1560.8,
    color: 0xE6E6FA,
    distance: 778.5,
    orbitDistance: 0.671,
    rotationSpeed: 0.003,
    orbitSpeed: 0.03,
    parent: 'jupiter',
    texture: null
  },
  titan: {
    name: 'Titan',
    type: 'Moon',
    radius: 2574,
    color: 0xDEB887,
    distance: 1432,
    orbitDistance: 1.222,
    rotationSpeed: 0.002,
    orbitSpeed: 0.02,
    parent: 'saturn',
    texture: null
  },
  ganymede: {
    name: 'Ganymede',
    type: 'Moon',
    radius: 2634.1,
    color: 0x8FBC8F,
    distance: 778.5,
    orbitDistance: 1.070,
    rotationSpeed: 0.002,
    orbitSpeed: 0.025,
    parent: 'jupiter',
    texture: null
  }
};

// Three.js Scene Setup
class SolarSystem {
  constructor() {
    console.log('🔧 Initializing SolarSystem...');
    
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.objects = {};
    this.orbits = {};
    this.selectedObject = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clock = new THREE.Clock();
    
    // Initialize enhanced planet renderer with error handling
    try {
      if (typeof EnhancedPlanetRenderer !== 'undefined') {
        this.planetRenderer = new EnhancedPlanetRenderer();
        console.log('✅ Enhanced planet renderer initialized');
      } else {
        console.warn('⚠️ EnhancedPlanetRenderer not found, will use fallback');
        this.planetRenderer = null;
      }
    } catch (error) {
      console.error('❌ Error initializing enhanced planet renderer:', error);
      this.planetRenderer = null;
    }
    
    // Performance tracking
    this.lastAnimationTime = 0;
    this.animationId = null;
    this.forceRender = true;
    this.animationEnabled = true;
    
    try {
      this.init();
      this.initializeAsync();
    } catch (error) {
      console.error('❌ Error in SolarSystem constructor:', error);
      throw error;
    }
  }

  async initializeAsync() {
    try {
      await this.createSolarSystem();
      this.setupEventListeners();
      this.animate();
      console.log('✅ SolarSystem initialization complete');
    } catch (error) {
      console.error('❌ Error in async SolarSystem initialization:', error);
      throw error;
    }
  }

  init() {
    console.log('🎨 Setting up Three.js scene...');
    
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b0f14);
    console.log('✅ Scene created');

    // Get canvas and check dimensions
    const canvas = document.getElementById('solarCanvas');
    if (!canvas) {
      throw new Error('Canvas element not found!');
    }
    
    const rect = canvas.getBoundingClientRect();
    console.log('📐 Canvas dimensions:', rect.width, 'x', rect.height);
    console.log('📐 Canvas parent dimensions:', canvas.parentElement.getBoundingClientRect());
    
    if (rect.width === 0 || rect.height === 0) {
      console.warn('⚠️ Canvas has zero dimensions, using fallback');
      console.log('🔍 Canvas style:', window.getComputedStyle(canvas));
      console.log('🔍 Container style:', window.getComputedStyle(canvas.parentElement));
    }

    // Camera - Orthographic for consistent scaling
    const width = rect.width || 800;
    const height = rect.height || 600;
    const aspect = width / height;
    
    // Adjust frustum size for mobile/tablet devices
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    let frustumSize = 800; // Default desktop
    if (isMobile) {
      frustumSize = 600; // Zoom in more on mobile
    } else if (isTablet) {
      frustumSize = 700; // Medium zoom for tablets
    }
    
    this.camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      10000
    );
    
    // Adjust camera Y position for mobile to center the model better
    const cameraY = isMobile ? 100 : 0; // Raise camera on mobile to show planets higher on canvas
    this.camera.position.set(1650, cameraY, 5000); // Center on timeline (0 to 3300, center = 1650)
    this.camera.lookAt(1650, cameraY, 0);
    console.log('📷 Camera created', isMobile ? '(mobile positioning)' : '');

    // Renderer - Optimized for performance
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: canvas,
      antialias: false, // Disable for better performance
      alpha: false,     // Disable for better performance
      powerPreference: "high-performance"
    });
    
    // Set size with proper pixel ratio handling
    this.renderer.setSize(width, height, false); // Don't update style
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio
    
    // Performance optimizations
    this.renderer.shadowMap.enabled = false; // Disable shadows for 2D
    this.renderer.sortObjects = false;       // Skip sorting for performance
    this.renderer.autoClear = true;
    
    console.log('🖼️ Renderer created with performance optimizations');
    console.log('📊 Canvas size:', width, 'x', height, 'Pixel ratio:', this.renderer.getPixelRatio());

    // Controls - Modified for timeline navigation (horizontal only)
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableRotate = false; // Disable rotation
    this.controls.enablePan = true;
    this.controls.enableZoom = true;
    this.controls.minZoom = 0.2;
    this.controls.maxZoom = 3;
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: null
    };
    
    // Enable touch controls
    this.controls.touches = {
      ONE: THREE.TOUCH.PAN,
      TWO: THREE.TOUCH.DOLLY_PAN
    };
    
    // Set initial target to center of timeline (use mobile-adjusted Y position)
    const targetY = isMobile ? 100 : 0;
    this.controls.target.set(1650, targetY, 0);
    
    // Store the target Y for restrictions
    this.targetY = targetY;
    
    // Restrict panning to horizontal only
    this.controls.addEventListener('change', () => {
      // Keep Y position fixed for timeline view (use device-specific Y)
      this.controls.target.y = this.targetY;
      // Limit horizontal panning range for simplified timeline (expanded range)
      this.controls.target.x = Math.max(-200, Math.min(3500, this.controls.target.x));
    });
    
    console.log('🎮 Timeline controls created');

    // Lighting - Simpler for 2D view
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);
    console.log('💡 Lighting added');

    // Hide loading indicator
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
    
    console.log('✅ Three.js initialization complete');
  }

  async createSolarSystem() {
    console.log('🌍 Creating solar system objects...');
    console.log('📊 Total objects in solarSystemData:', Object.keys(solarSystemData).length);
    
    // Preload realistic textures (will fallback to procedural if textures not found)
    if (this.planetRenderer) {
      try {
        await this.planetRenderer.preloadTextures();
      } catch (error) {
        console.warn('⚠️ Texture preloading failed, using procedural textures:', error);
      }
    }
    
    // Create objects
    let objectCount = 0;
    let skippedCount = 0;
    Object.entries(solarSystemData).forEach(([key, data]) => {
      console.log(`🔍 Processing object: ${key} (${data.name})`);
      try {
        const result = this.createEnhancedCelestialObject(key, data);
        if (result !== false) {
          objectCount++;
        } else {
          skippedCount++;
        }
      } catch (error) {
        console.error(`❌ Error creating object ${key}:`, error);
      }
    });
    
    console.log(`✅ Created ${objectCount} celestial objects, skipped ${skippedCount} objects`);
    console.log(`🎯 Objects in scene:`, Object.keys(this.objects));

    // Create orbit paths
    this.createOrbitPaths();
    console.log('✅ Created orbit paths');
    
    // Object buttons removed with left panel
    // this.populateObjectButtons();
    console.log('✅ Object buttons skipped (left panel removed)');
  }

  createEnhancedCelestialObject(key, data) {
    console.log(`🌍 Creating enhanced object: ${key}`); // Debug log
    
    // Include main planets and dwarf planets
    const displayObjects = ['sun', 'mercury', 'venus', 'earth', 'mars', 'ceres', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'eris', 'haumea', 'makemake'];
    if (!displayObjects.includes(key)) {
      console.log(`⏭️ Skipping ${key} - not in display list`);
      return false; // Skip moons for simplified view
    }
    
    // Timeline positioning - simplified spacing
    const timelinePositions = {
      sun: 0,
      mercury: 300,
      venus: 500,
      earth: 700,
      mars: 900,
      ceres: 1100,      // Dwarf planet in asteroid belt
      jupiter: 1300,
      saturn: 1700,
      uranus: 2100,
      neptune: 2500,
      pluto: 2900,      // Dwarf planet beyond Neptune
      haumea: 3100,     // Dwarf planet in Kuiper belt
      makemake: 3200,   // Dwarf planet in Kuiper belt
      eris: 3300        // Dwarf planet in scattered disk
    };
    
    // Larger, more prominent sizes
    let radius;
    if (key === 'sun') {
      radius = 80; // Much larger sun
    } else if (key === 'jupiter') {
      radius = 45; // Large Jupiter
    } else if (key === 'saturn') {
      radius = 40; // Large Saturn
    } else if (['uranus', 'neptune'].includes(key)) {
      radius = 25; // Medium ice giants
    } else if (['ceres', 'pluto', 'eris', 'haumea', 'makemake'].includes(key)) {
      radius = 12; // Smaller dwarf planets
    } else {
      radius = 20; // Terrestrial planets
    }
    
    let mesh;
    
    // Try enhanced renderer first, fallback to original if it fails
    try {
      if (this.planetRenderer && typeof this.planetRenderer.createEnhancedCelestialObject === 'function') {
        mesh = this.planetRenderer.createEnhancedCelestialObject(
          key, data, radius, timelinePositions[key]
        );
        console.log(`✅ Created enhanced ${key} with enhanced renderer`);
      } else {
        throw new Error('Enhanced renderer not available');
      }
    } catch (error) {
      console.warn(`⚠️ Enhanced renderer failed for ${key}, using fallback:`, error);
      // Fallback to original method
      mesh = this.createOriginalCelestialObject(key, data, radius, timelinePositions[key]);
      console.log(`✅ Created ${key} with fallback renderer`);
    }
    
    if (mesh) {
      // Add clean object label above
      this.addCleanLabel(mesh, data.name, radius);

      this.objects[key] = mesh;
      this.scene.add(mesh);
      console.log(`🎯 Added ${key} to scene at position ${timelinePositions[key]}`);
      return true;
    } else {
      console.error(`❌ Failed to create mesh for ${key}`);
      return false;
    }
  }

  // Fallback method using original planet creation logic
  createOriginalCelestialObject(key, data, radius, xPosition) {
    // Create circular geometry
    const geometry = new THREE.CircleGeometry(radius, 64);
    
    // Create realistic planet texture with gradients (simplified version)
    const canvas = document.createElement('canvas');
    const size = radius * 4;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    
    // Create radial gradient for 3D sphere effect
    const gradient = context.createRadialGradient(
      size * 0.3, size * 0.3, 0,  // Inner circle (highlight)
      size * 0.5, size * 0.5, size * 0.5  // Outer circle (shadow)
    );
    
    // Planet-specific colors
    const baseColor = `#${data.color.toString(16).padStart(6, '0')}`;
    gradient.addColorStop(0, this.lightenColor(baseColor, 40));
    gradient.addColorStop(0.3, this.lightenColor(baseColor, 20));
    gradient.addColorStop(0.6, baseColor);
    gradient.addColorStop(0.9, this.darkenColor(baseColor, 30));
    gradient.addColorStop(1, this.darkenColor(baseColor, 50));
    
    // Fill the canvas with gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    // Use textured material
    const material = new THREE.MeshBasicMaterial({ 
      map: texture,
      transparent: false,
      opacity: 1.0
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = { key, data, originalColor: data.color };
    mesh.position.set(xPosition, 0, 0);

    return mesh;
  }

  // Utility functions for fallback
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

  createCelestialObject(key, data) {
    // Include main planets and dwarf planets
    const displayObjects = ['sun', 'mercury', 'venus', 'earth', 'mars', 'ceres', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'eris', 'haumea', 'makemake'];
    if (!displayObjects.includes(key)) {
      return; // Skip moons for simplified view
    }
    
    // Timeline positioning - simplified spacing
    const timelinePositions = {
      sun: 0,
      mercury: 300,
      venus: 500,
      earth: 700,
      mars: 900,
      ceres: 1100,      // Dwarf planet in asteroid belt
      jupiter: 1300,
      saturn: 1700,
      uranus: 2100,
      neptune: 2500,
      pluto: 2900,      // Dwarf planet beyond Neptune
      haumea: 3100,     // Dwarf planet in Kuiper belt
      makemake: 3200,   // Dwarf planet in Kuiper belt
      eris: 3300        // Dwarf planet in scattered disk
    };
    
    // Larger, more prominent sizes
    let radius;
    if (key === 'sun') {
      radius = 80; // Much larger sun
    } else if (key === 'jupiter') {
      radius = 45; // Large Jupiter
    } else if (key === 'saturn') {
      radius = 40; // Large Saturn
    } else if (['uranus', 'neptune'].includes(key)) {
      radius = 25; // Medium ice giants
    } else if (['ceres', 'pluto', 'eris', 'haumea', 'makemake'].includes(key)) {
      radius = 12; // Smaller dwarf planets
    } else {
      radius = 20; // Terrestrial planets
    }
    
    // Create circular geometry
    const geometry = new THREE.CircleGeometry(radius, 64);
    
    // Create realistic planet texture with gradients
    const canvas = document.createElement('canvas');
    const size = radius * 4;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    
    // Create radial gradient for 3D sphere effect
    const gradient = context.createRadialGradient(
      size * 0.3, size * 0.3, 0,  // Inner circle (highlight)
      size * 0.5, size * 0.5, size * 0.5  // Outer circle (shadow)
    );
    
    // Planet-specific realistic colors and gradients
    if (key === 'sun') {
      gradient.addColorStop(0, '#ffff99');    // Bright center
      gradient.addColorStop(0.3, '#ffcc00');  // Yellow
      gradient.addColorStop(0.7, '#ff9900');  // Orange
      gradient.addColorStop(1, '#cc6600');    // Dark orange edge
    } else if (key === 'mercury') {
      gradient.addColorStop(0, '#c4c4c4');    // Light gray
      gradient.addColorStop(0.5, '#8c7853');  // Base color
      gradient.addColorStop(1, '#5a4a3a');    // Dark edge
    } else if (key === 'venus') {
      gradient.addColorStop(0, '#ffdd88');    // Light yellow
      gradient.addColorStop(0.5, '#ffc649');  // Base color
      gradient.addColorStop(1, '#cc9933');    // Dark edge
    } else if (key === 'earth') {
      gradient.addColorStop(0, '#87ceeb');    // Light blue
      gradient.addColorStop(0.3, '#6b93d6');  // Base blue
      gradient.addColorStop(0.6, '#4682b4');  // Darker blue
      gradient.addColorStop(1, '#2f4f4f');    // Dark edge
    } else if (key === 'mars') {
      gradient.addColorStop(0, '#ff8c69');    // Light red
      gradient.addColorStop(0.5, '#cd5c5c');  // Base red
      gradient.addColorStop(1, '#8b3a3a');    // Dark red edge
    } else if (key === 'jupiter') {
      gradient.addColorStop(0, '#f4e4bc');    // Light tan
      gradient.addColorStop(0.3, '#d8ca9d');  // Base color
      gradient.addColorStop(0.7, '#b8a082');  // Darker
      gradient.addColorStop(1, '#8b7355');    // Dark edge
    } else if (key === 'saturn') {
      gradient.addColorStop(0, '#fff8dc');    // Light cream
      gradient.addColorStop(0.5, '#fad5a5');  // Base color
      gradient.addColorStop(1, '#daa520');    // Golden edge
    } else if (key === 'uranus') {
      gradient.addColorStop(0, '#87ceeb');    // Light cyan
      gradient.addColorStop(0.5, '#4fd0e7');  // Base cyan
      gradient.addColorStop(1, '#008b8b');    // Dark cyan edge
    } else if (key === 'neptune') {
      gradient.addColorStop(0, '#87cefa');    // Light blue
      gradient.addColorStop(0.5, '#4b70dd');  // Base blue
      gradient.addColorStop(1, '#191970');    // Dark blue edge
    }
    
    // Fill the canvas with gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
    
    // Add planet-specific surface details for realism
    if (key === 'sun') {
      // Add solar flares and surface activity
      context.globalAlpha = 0.3;
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const flareSize = Math.random() * size * 0.05;
        context.fillStyle = '#ffff00';
        context.beginPath();
        context.arc(x, y, flareSize, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    } else if (key === 'earth') {
      // Add continents and oceans
      context.globalAlpha = 0.4;
      // Green landmasses
      context.fillStyle = '#228B22';
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const landSize = Math.random() * size * 0.15;
        context.beginPath();
        context.arc(x, y, landSize, 0, Math.PI * 2);
        context.fill();
      }
      // White clouds
      context.fillStyle = '#ffffff';
      for (let i = 0; i < 12; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const cloudSize = Math.random() * size * 0.08;
        context.beginPath();
        context.arc(x, y, cloudSize, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    } else if (key === 'mars') {
      // Add polar ice caps and surface features
      context.globalAlpha = 0.3;
      // Polar ice caps (white)
      context.fillStyle = '#ffffff';
      context.beginPath();
      context.arc(size * 0.2, size * 0.2, size * 0.1, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.arc(size * 0.8, size * 0.8, size * 0.08, 0, Math.PI * 2);
      context.fill();
      // Dark surface features
      context.fillStyle = '#8B4513';
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const featureSize = Math.random() * size * 0.1;
        context.beginPath();
        context.arc(x, y, featureSize, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    } else if (key === 'jupiter') {
      // Add the Great Red Spot and bands
      context.globalAlpha = 0.4;
      // Great Red Spot
      context.fillStyle = '#DC143C';
      context.beginPath();
      context.ellipse(size * 0.6, size * 0.4, size * 0.08, size * 0.05, 0, 0, Math.PI * 2);
      context.fill();
      // Atmospheric bands
      context.fillStyle = '#DEB887';
      for (let i = 0; i < 5; i++) {
        const y = (i + 1) * size / 6;
        context.fillRect(0, y - 2, size, 4);
      }
      context.globalAlpha = 1;
    } else if (key === 'mercury' || key === 'venus') {
      // Add craters for rocky planets
      context.globalAlpha = 0.2;
      context.fillStyle = '#000000';
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const craterSize = Math.random() * size * 0.08;
        context.beginPath();
        context.arc(x, y, craterSize, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    } else {
      // Generic surface variation for other planets
      context.globalAlpha = 0.15;
      for (let i = 0; i < 12; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const spotSize = Math.random() * size * 0.08;
        context.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)';
        context.beginPath();
        context.arc(x, y, spotSize, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    }
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    // Use textured material
    const material = new THREE.MeshBasicMaterial({ 
      map: texture,
      transparent: false,
      opacity: 1.0
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = { key, data, originalColor: data.color };

    // Position objects on timeline
    const xPosition = timelinePositions[key];
    mesh.position.set(xPosition, 0, 0);

    // Add special effects for the Sun
    if (key === 'sun') {
      // Add outer glow
      const glowGeometry = new THREE.CircleGeometry(radius * 1.3, 32);
      const glowCanvas = document.createElement('canvas');
      glowCanvas.width = radius * 6;
      glowCanvas.height = radius * 6;
      const glowContext = glowCanvas.getContext('2d');
      
      const glowGradient = glowContext.createRadialGradient(
        glowCanvas.width/2, glowCanvas.height/2, 0,
        glowCanvas.width/2, glowCanvas.height/2, glowCanvas.width/2
      );
      glowGradient.addColorStop(0, 'rgba(255, 255, 0, 0.3)');
      glowGradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.2)');
      glowGradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
      
      glowContext.fillStyle = glowGradient;
      glowContext.fillRect(0, 0, glowCanvas.width, glowCanvas.height);
      
      const glowTexture = new THREE.CanvasTexture(glowCanvas);
      const glowMaterial = new THREE.MeshBasicMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.6
      });
      
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.z = -0.1;
      mesh.add(glow);
    }

    // Add rings for Saturn - more prominent and realistic
    if (data.hasRings) {
      const ringGeometry = new THREE.RingGeometry(radius + 5, radius + 15, 64);
      
      // Create ring texture with bands
      const ringCanvas = document.createElement('canvas');
      ringCanvas.width = 100;
      ringCanvas.height = 100;
      const ringContext = ringCanvas.getContext('2d');
      
      // Create concentric ring pattern
      for (let i = 0; i < 10; i++) {
        const ringRadius = (i + 1) * 10;
        ringContext.strokeStyle = i % 2 === 0 ? '#d4af37' : '#b8860b';
        ringContext.lineWidth = 2;
        ringContext.beginPath();
        ringContext.arc(50, 50, ringRadius, 0, Math.PI * 2);
        ringContext.stroke();
      }
      
      const ringTexture = new THREE.CanvasTexture(ringCanvas);
      const ringMaterial = new THREE.MeshBasicMaterial({
        map: ringTexture,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });
      
      const rings = new THREE.Mesh(ringGeometry, ringMaterial);
      rings.position.z = -0.05;
      mesh.add(rings);
    }

    // Add clean object label above
    this.addCleanLabel(mesh, data.name, radius);

    this.objects[key] = mesh;
    this.scene.add(mesh);
  }

  addObjectLabel(mesh, name, radius) {
    // Create text label using canvas texture
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#ffffff';
    context.font = 'bold 20px Arial';
    context.textAlign = 'center';
    context.fillText(name, canvas.width / 2, canvas.height / 2 + 7);
    
    const texture = new THREE.CanvasTexture(canvas);
    const labelMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.8
    });
    
    const labelGeometry = new THREE.PlaneGeometry(radius * 2, radius * 0.5);
    const label = new THREE.Mesh(labelGeometry, labelMaterial);
    label.position.set(0, radius + 15, 0.1);
    label.userData = { isLabel: true };
    
    mesh.add(label);
  }

  addCleanLabel(mesh, name, radius) {
    // Create clean, simple label above the planet
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 50;
    
    // Clean white text on transparent background
    context.fillStyle = '#ffffff';
    context.font = 'bold 18px Arial';
    context.textAlign = 'center';
    context.fillText(name, canvas.width / 2, 30);
    
    const texture = new THREE.CanvasTexture(canvas);
    const labelMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9
    });
    
    const labelGeometry = new THREE.PlaneGeometry(100, 25);
    const label = new THREE.Mesh(labelGeometry, labelMaterial);
    label.position.set(0, radius + 40, 0.1);
    label.userData = { isLabel: true };
    
    mesh.add(label);
  }

  addDistanceMarker(mesh, data, xPosition) {
    // Add distance information below the object
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 40;
    
    context.fillStyle = 'rgba(0, 0, 0, 0.6)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#4cc9f0';
    context.font = 'bold 14px Arial';
    context.textAlign = 'center';
    
    // Format distance from Earth
    let distanceText = '';
    if (data.distanceFromEarth_km) {
      const distance = parseFloat(data.distanceFromEarth_km);
      if (distance > 1000000) {
        distanceText = `${(distance / 1000000).toFixed(1)}M km`;
      } else if (distance > 1000) {
        distanceText = `${(distance / 1000).toFixed(0)}K km`;
      } else {
        distanceText = `${distance} km`;
      }
    } else {
      distanceText = `${data.distance || 0} AU`;
    }
    
    context.fillText(distanceText, canvas.width / 2, 25);
    
    const texture = new THREE.CanvasTexture(canvas);
    const markerMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.7
    });
    
    const markerGeometry = new THREE.PlaneGeometry(100, 20);
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(0, -60, 0.1);
    marker.userData = { isMarker: true };
    
    mesh.add(marker);
  }

  createOrbitPaths() {
    // Create simple, clean timeline - no complex markers
    const timelineGeometry = new THREE.PlaneGeometry(2800, 2);
    const timelineMaterial = new THREE.MeshBasicMaterial({
      color: 0x666666,
      transparent: true,
      opacity: 0.4
    });
    const timeline = new THREE.Mesh(timelineGeometry, timelineMaterial);
    timeline.position.set(1650, -150, -0.3); // Below the planets, centered
    this.scene.add(timeline);
  }

  populateObjectButtons() {
    const container = document.getElementById('objectButtons');
    Object.entries(solarSystemData).forEach(([key, data]) => {
      const button = document.createElement('button');
      button.className = 'object-btn';
      button.textContent = data.name;
      button.setAttribute('data-object', key);
      button.addEventListener('click', () => this.selectObject(key));
      container.appendChild(button);
    });
  }

  setupEventListeners() {
    // Mouse events with drag detection
    let mouseDown = false;
    let mouseMoved = false;
    
    this.renderer.domElement.addEventListener('mousedown', () => {
      mouseDown = true;
      mouseMoved = false;
    });
    
    this.renderer.domElement.addEventListener('mousemove', () => {
      if (mouseDown) {
        mouseMoved = true;
      }
    });
    
    this.renderer.domElement.addEventListener('mouseup', () => {
      mouseDown = false;
    });
    
    this.renderer.domElement.addEventListener('click', (event) => {
      // Only process click if mouse wasn't dragged
      if (!mouseMoved) {
        this.onMouseClick(event);
      }
      mouseMoved = false;
    });
    
    // Touch events for mobile/tablet
    let touchStartTime = 0;
    let touchMoved = false;
    let touchStartPos = { x: 0, y: 0 };
    
    this.renderer.domElement.addEventListener('touchstart', (event) => {
      if (event.touches.length === 1) {
        touchStartTime = Date.now();
        touchMoved = false;
        const touch = event.touches[0];
        touchStartPos = { x: touch.clientX, y: touch.clientY };
      }
    }, { passive: true });
    
    this.renderer.domElement.addEventListener('touchmove', (event) => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const distance = Math.sqrt(
          Math.pow(touch.clientX - touchStartPos.x, 2) +
          Math.pow(touch.clientY - touchStartPos.y, 2)
        );
        // If moved more than 10 pixels, consider it a drag
        if (distance > 10) {
          touchMoved = true;
        }
      }
    }, { passive: true });
    
    this.renderer.domElement.addEventListener('touchend', (event) => {
      const touchDuration = Date.now() - touchStartTime;
      
      // Only treat as tap if:
      // 1. Single touch
      // 2. Touch duration < 300ms
      // 3. Minimal movement (touchMoved = false)
      if (event.changedTouches.length === 1 && touchDuration < 300 && !touchMoved) {
        const touch = event.changedTouches[0];
        // Create a synthetic mouse event for touch
        const syntheticEvent = {
          clientX: touch.clientX,
          clientY: touch.clientY,
          target: event.target
        };
        this.onMouseClick(syntheticEvent);
      }
      
      touchMoved = false;
    }, { passive: true });

    // Keyboard events
    document.addEventListener('keydown', (event) => {
      this.onKeyDown(event);
    });

    // Window resize
    window.addEventListener('resize', () => {
      this.onWindowResize();
    });

    // Panel toggles removed - left panel no longer exists

    document.getElementById('panelClose').addEventListener('click', () => {
      this.deselectObject();
    });

    // Filter checkboxes removed with left panel
    // document.querySelectorAll('input[name="objectType"]').forEach(checkbox => {
    //   checkbox.addEventListener('change', () => {
    //     this.updateObjectVisibility();
    //   });
    // });

    // AI Question functionality
    const questionInput = document.getElementById('questionInput');
    const askButton = document.getElementById('askButton');
    const aiResponse = document.getElementById('aiResponse');
    const loadingResponse = document.getElementById('loadingResponse');
    const responseText = document.getElementById('responseText');

    if (questionInput && askButton) {
      // Handle Enter key in input
      questionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !askButton.disabled) {
          this.askAIQuestion();
        }
      });

      // Handle button click
      askButton.addEventListener('click', () => {
        this.askAIQuestion();
      });
    }
  }

  onMouseClick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Update raycaster for orthographic camera
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // Get all objects but filter out labels and other non-selectable objects
    const selectableObjects = Object.values(this.objects).filter(obj => 
      obj.userData && obj.userData.key && !obj.userData.isLabel
    );
    
    const intersects = this.raycaster.intersectObjects(selectableObjects, true);

    console.log('Mouse click detected, intersects:', intersects.length); // Debug log

    if (intersects.length > 0) {
      let targetObject = intersects[0].object;
      
      // If we hit a child object (like rings), get the parent
      while (targetObject.parent && !targetObject.userData.key) {
        targetObject = targetObject.parent;
      }
      
      if (targetObject.userData && targetObject.userData.key) {
        console.log('Selecting object from click:', targetObject.userData.key); // Debug log
        this.selectObject(targetObject.userData.key);
      }
    } else {
      console.log('No objects intersected, deselecting'); // Debug log
      this.deselectObject();
    }
  }

  onKeyDown(event) {
    // Keyboard navigation for accessibility
    const keys = Object.keys(solarSystemData);
    const currentIndex = keys.indexOf(this.selectedObject);
    
    switch(event.key) {
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % keys.length;
        this.selectObject(keys[nextIndex]);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : keys.length - 1;
        this.selectObject(keys[prevIndex]);
        break;
      case 'Escape':
        this.deselectObject();
        break;
    }
  }

  onWindowResize() {
    // Throttle resize events for performance
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    
    this.resizeTimeout = setTimeout(() => {
      const canvas = this.renderer.domElement;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      console.log('🔄 Resizing canvas to:', width, 'x', height);
      
      // Update orthographic camera
      const aspect = width / height;
      
      // Adjust frustum size for mobile/tablet devices
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      let frustumSize = 800; // Default desktop
      if (isMobile) {
        frustumSize = 600; // Zoom in more on mobile
      } else if (isTablet) {
        frustumSize = 700; // Medium zoom for tablets
      }
      
      this.camera.left = (frustumSize * aspect) / -2;
      this.camera.right = (frustumSize * aspect) / 2;
      this.camera.top = frustumSize / 2;
      this.camera.bottom = frustumSize / -2;
      
      // Update camera Y position for mobile devices
      const newTargetY = isMobile ? 100 : 0;
      if (this.targetY !== newTargetY) {
        this.targetY = newTargetY;
        this.camera.position.y = newTargetY;
        this.controls.target.y = newTargetY;
        this.camera.lookAt(this.controls.target.x, newTargetY, 0);
      }
      
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height, false); // Don't update CSS
      
      // Force a render after resize
      this.forceRender = true;
    }, 100); // Debounce resize events
  }

  selectObject(key) {
    console.log('Selecting object:', key); // Debug log
    
    // Deselect previous object
    if (this.selectedObject && this.objects[this.selectedObject]) {
      const prevMesh = this.objects[this.selectedObject];
      prevMesh.material.color.setHex(prevMesh.userData.originalColor);
      
      // Remove selection ring if it exists
      const selectionRing = prevMesh.getObjectByName('selectionRing');
      if (selectionRing) {
        prevMesh.remove(selectionRing);
      }
    }

    this.selectedObject = key;
    const mesh = this.objects[key];
    const data = solarSystemData[key];

    if (mesh && data) {
      // Highlight selected object with a selection ring
      const radius = mesh.geometry.parameters.radius;
      const ringGeometry = new THREE.RingGeometry(radius + 5, radius + 8, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });
      const selectionRing = new THREE.Mesh(ringGeometry, ringMaterial);
      selectionRing.name = 'selectionRing';
      selectionRing.position.z = 0.1; // Slightly in front
      mesh.add(selectionRing);

      // Center camera on object for timeline view (horizontal only, use device-specific Y)
      this.controls.target.set(mesh.position.x, this.targetY, 0);
      this.controls.update();
      
      // Show object details
      this.showObjectDetails(key, data);
      
      // Update active button
      document.querySelectorAll('.object-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelector(`[data-object="${key}"]`)?.classList.add('active');
    } else {
      console.error('Object not found:', key, 'Available objects:', Object.keys(this.objects));
    }
  }

  deselectObject() {
    if (this.selectedObject && this.objects[this.selectedObject]) {
      const mesh = this.objects[this.selectedObject];
      mesh.material.color.setHex(mesh.userData.originalColor);
      
      // Remove selection ring if it exists
      const selectionRing = mesh.getObjectByName('selectionRing');
      if (selectionRing) {
        mesh.remove(selectionRing);
      }
    }
    
    // Clear inline header elements
    const objectNameInline = document.querySelector('.object-name-inline');
    const objectTypeInline = document.querySelector('.object-type-inline');
    
    if (objectNameInline) objectNameInline.textContent = '';
    if (objectTypeInline) objectTypeInline.textContent = '';
    
    this.selectedObject = null;
    this.showWelcomeMessage();
    
    document.querySelectorAll('.object-btn').forEach(btn => {
      btn.classList.remove('active');
    });
  }

  showWelcomeMessage() {
    const infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = `
      <div class="welcome-message">
        <h3>Welcome to SpaceHopper</h3>
        <p>Click on any celestial object to explore detailed information about it.</p>
        <div class="feature-list">
          <div class="feature-item">
            <span class="feature-icon">🔍</span>
            <span>Zoom and pan to explore</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📊</span>
            <span>Get detailed facts</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🖼️</span>
            <span>Generate AI images</span>
          </div>
        </div>
      </div>
    `;
  }

  async showObjectDetails(key, data) {
    console.log('Showing object details for:', key, data); // Debug log
    
    // Update inline header elements
    const objectNameInline = document.querySelector('.object-name-inline');
    const objectTypeInline = document.querySelector('.object-type-inline');
    
    if (objectNameInline) objectNameInline.textContent = data.name;
    if (objectTypeInline) objectTypeInline.textContent = data.type;
    
    const template = document.getElementById('objectDetailTemplate');
    const clone = template.content.cloneNode(true);
    
    // Replace content first
    const infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = '';
    infoContent.appendChild(clone);
    
    // Now get references to the actual DOM elements
    const distanceEl = infoContent.querySelector('.distance');
    const radiusEl = infoContent.querySelector('.radius');
    const rotationEl = infoContent.querySelector('.rotation');
    const orbitalPeriodEl = infoContent.querySelector('.orbital-period');
    const orbitalSpeedEl = infoContent.querySelector('.orbital-speed');
    const factsList = infoContent.querySelector('.facts-list');
    const generateImageBtn = infoContent.querySelector('#generateImage');
    const moreInfoBtn = infoContent.querySelector('#moreInfo');
    
    // Check cache first
    const cacheKey = `object_${key}`;
    let objectData = this.getFromCache(cacheKey);
    
    if (!objectData) {
      // Show loading state
      distanceEl.textContent = 'Loading...';
      radiusEl.textContent = 'Loading...';
      rotationEl.textContent = 'Loading...';
      orbitalPeriodEl.textContent = 'Loading...';
      orbitalSpeedEl.textContent = 'Loading...';
      
      // Fetch data from API with retry logic
      let retryCount = 0;
      const maxRetries = 2;
      
      while (retryCount <= maxRetries) {
        try {
          console.log(`🔄 Fetching data for ${data.name} (attempt ${retryCount + 1})`);
          
          const response = await fetch('/api/text', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ objectName: data.name })
          });
          
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          
          objectData = await response.json();
          
          // Validate that we got proper data
          if (objectData && objectData.distanceFromEarth_km && objectData.distanceFromEarth_km !== 'Unknown') {
            console.log(`✅ Successfully fetched data for ${data.name}`);
            this.saveToCache(cacheKey, objectData);
            break; // Success, exit retry loop
          } else {
            throw new Error('Received invalid or incomplete data from API');
          }
          
        } catch (error) {
          console.error(`❌ Error fetching object data (attempt ${retryCount + 1}):`, error);
          retryCount++;
          
          if (retryCount <= maxRetries) {
            console.log(`⏳ Retrying in 1 second...`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
          } else {
            console.error(`💥 All retry attempts failed for ${data.name}`);
            // Use default values from solarSystemData as fallback
            let fallbackDistance;
            if (key === 'sun') {
              fallbackDistance = '149600000'; // Sun is ~149.6 million km from Earth
            } else {
              fallbackDistance = data.distance ? (data.distance * 149597870.7).toFixed(0) : 'Unknown'; // Convert AU to km
            }
            
            objectData = {
              name: data.name,
              type: data.type,
              distanceFromEarth_km: fallbackDistance,
              radius_km: data.radius || 'Unknown',
              rotation_period_hours: data.rotationPeriod ? Math.abs(data.rotationPeriod).toFixed(1) : 'Unknown',
              orbital_period_days: data.orbitSpeed ? (365 / data.orbitSpeed).toFixed(0) : 'Unknown',
              orbital_speed_kms: data.orbitalSpeed || 'Unknown',
              interesting_facts: ['Data temporarily unavailable. Click "More Info" to retry.'],
              sources: ['Local database']
            };
          }
        }
      }
    }
    
    // Helper function to format numbers with commas
    const formatNumber = (value) => {
      if (value === 'Unknown' || value === 'N/A' || !value) return value;
      const num = parseFloat(value);
      if (isNaN(num)) return value;
      return num.toLocaleString();
    };

    // Helper function to get fallback value from solarSystemData
    const getFallbackValue = (apiValue, fallbackValue, unit = '') => {
      if (apiValue && apiValue !== 'Unknown' && apiValue !== 'N/A') {
        return `${formatNumber(apiValue)}${unit}`;
      }
      if (fallbackValue && fallbackValue !== 'Unknown') {
        return `${formatNumber(fallbackValue)}${unit}`;
      }
      return 'Unknown';
    };

    // Update with fetched data (with fallback to solarSystemData values)
    // Special handling for the Sun (distance from Earth is ~149.6 million km)
    let distanceValue;
    if (key === 'sun') {
      distanceValue = getFallbackValue(
        objectData.distanceFromEarth_km, 
        '149600000', // Sun is ~149.6 million km from Earth
        ' km'
      );
    } else {
      distanceValue = getFallbackValue(
        objectData.distanceFromEarth_km, 
        data.distance ? (data.distance * 149597870.7).toFixed(0) : null, 
        ' km'
      );
    }
    distanceEl.textContent = distanceValue;
    radiusEl.textContent = getFallbackValue(
      objectData.radius_km, 
      data.radius, 
      ' km'
    );
    rotationEl.textContent = getFallbackValue(
      objectData.rotation_period_hours, 
      data.rotationPeriod ? Math.abs(data.rotationPeriod).toFixed(1) : null, 
      ' hours'
    );
    orbitalPeriodEl.textContent = getFallbackValue(
      objectData.orbital_period_days, 
      data.orbitSpeed ? (365 / data.orbitSpeed).toFixed(0) : null, 
      ' days'
    );
    orbitalSpeedEl.textContent = getFallbackValue(
      objectData.orbital_speed_kms, 
      data.orbitalSpeed ? data.orbitalSpeed.toFixed(1) : null, 
      ' km/s'
    );
    
    // Interesting facts
    factsList.innerHTML = '';
    objectData.interesting_facts.forEach(fact => {
      const li = document.createElement('li');
      li.textContent = fact;
      factsList.appendChild(li);
    });
    
    // Sources section removed - displayed in footer instead
    
    // Button event listeners - remove any existing listeners first
    const newGenerateImageBtn = generateImageBtn.cloneNode(true);
    const newMoreInfoBtn = moreInfoBtn.cloneNode(true);
    
    generateImageBtn.parentNode.replaceChild(newGenerateImageBtn, generateImageBtn);
    moreInfoBtn.parentNode.replaceChild(newMoreInfoBtn, moreInfoBtn);
    
    newGenerateImageBtn.addEventListener('click', () => {
      this.generateImage(data.name, newGenerateImageBtn);
    });
    
    newMoreInfoBtn.addEventListener('click', () => {
      this.getMoreInfo(data.name, newMoreInfoBtn);
    });
  }

  async generateImage(objectName, btnElement = null) {
    const btn = btnElement || document.querySelector('#generateImage');
    const imageContainer = document.querySelector('#generatedImage');
    
    if (!btn) return;
    
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-icon">⏳</span> Generating...';
    
    try {
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ objectName })
      });
      
      const data = await response.json();
      
      if (data.image) {
        const img = imageContainer.querySelector('.ai-image');
        img.src = data.image;
        img.alt = `AI generated visualization of ${objectName}`;
        imageContainer.style.display = 'block';
      }
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<span class="btn-icon">🖼️</span> Generate Image';
    }
  }

  async getMoreInfo(objectName, btnElement = null) {
    const btn = btnElement || document.querySelector('#moreInfo');
    const factsList = document.querySelector('.facts-list');
    
    if (!btn || !factsList) return;
    
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-icon">⏳</span> Generating Facts...';
    
    try {
      const response = await fetch('/api/generate-facts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ objectName })
      });
      
      const data = await response.json();
      
      if (data.success && data.facts) {
        // Clear existing facts and add new ones with animation
        factsList.innerHTML = '';
        
        data.facts.forEach((fact, index) => {
          setTimeout(() => {
            const li = document.createElement('li');
            li.textContent = fact;
            li.style.opacity = '0';
            li.style.transform = 'translateY(10px)';
            factsList.appendChild(li);
            
            // Animate in
            setTimeout(() => {
              li.style.transition = 'all 0.3s ease';
              li.style.opacity = '1';
              li.style.transform = 'translateY(0)';
            }, 50);
          }, index * 100); // Stagger the animations
        });
        
        // Show success feedback
        btn.innerHTML = '<span class="btn-icon">✨</span> New Facts!';
        setTimeout(() => {
          btn.innerHTML = '<span class="btn-icon">🔄</span> New Facts';
        }, 2000);
      } else {
        throw new Error(data.message || 'Failed to generate facts');
      }
    } catch (error) {
      console.error('Error generating new facts:', error);
      btn.innerHTML = '<span class="btn-icon">❌</span> Try Again';
      setTimeout(() => {
        btn.innerHTML = '<span class="btn-icon">🔄</span> New Facts';
      }, 3000);
    } finally {
      btn.disabled = false;
    }
  }

  updateObjectVisibility() {
    const checkedTypes = Array.from(document.querySelectorAll('input[name="objectType"]:checked'))
      .map(cb => cb.value);
    
    Object.entries(this.objects).forEach(([key, mesh]) => {
      const data = solarSystemData[key];
      const type = data.type.toLowerCase();
      
      let shouldShow = false;
      if (type.includes('planet') && checkedTypes.includes('planet')) shouldShow = true;
      if (type.includes('dwarf') && checkedTypes.includes('dwarf')) shouldShow = true;
      if (type.includes('moon') && checkedTypes.includes('moon')) shouldShow = true;
      if (type.includes('comet') && checkedTypes.includes('comet')) shouldShow = true;
      if (type.includes('asteroid') && checkedTypes.includes('asteroid')) shouldShow = true;
      if (type.includes('star')) shouldShow = true; // Always show the sun
      
      mesh.visible = shouldShow;
    });
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    // Performance: Only render if something changed
    let needsRender = false;
    const currentTime = Date.now();
    
    // Throttle animations to 30fps for better performance
    if (currentTime - this.lastAnimationTime < 33) { // ~30fps
      this.controls.update();
      if (this.controls.enableDamping && this.controls.dampingFactor > 0) {
        this.renderer.render(this.scene, this.camera);
      }
      return;
    }
    this.lastAnimationTime = currentTime;
    
    // Simple rotation animation for visual interest (only if animation is enabled)
    if (this.animationEnabled !== false) {
      Object.entries(this.objects).forEach(([key, mesh]) => {
        const data = solarSystemData[key];
        
        // Gentle rotation for visual interest - much slower
        if (data.rotationSpeed && key === 'sun') {
          mesh.rotation.z += data.rotationSpeed * 0.1; // Very slow sun rotation
          needsRender = true;
        }
      });
    }
    
    // Update controls
    this.controls.update();
    
    // Only render if something changed
    if (needsRender || this.forceRender) {
      this.renderer.render(this.scene, this.camera);
      this.forceRender = false;
    }
  }

  // AI Question functionality
  async askAIQuestion() {
    const questionInput = document.getElementById('questionInput');
    const askButton = document.getElementById('askButton');
    const aiResponse = document.getElementById('aiResponse');
    const loadingResponse = document.getElementById('loadingResponse');
    const responseText = document.getElementById('responseText');
    const aiPlaceholder = document.getElementById('aiPlaceholder');

    const question = questionInput.value.trim();
    if (!question) {
      questionInput.focus();
      return;
    }

    // Show loading state
    askButton.disabled = true;
    askButton.textContent = 'Asking...';
    aiResponse.style.display = 'none';
    aiPlaceholder.style.display = 'none';
    loadingResponse.style.display = 'flex';

    try {
      const response = await fetch('/api/ask-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question })
      });

      const data = await response.json();

      if (data.success) {
        responseText.textContent = data.answer;
        aiResponse.style.display = 'block';
      } else {
        responseText.textContent = 'Sorry, I encountered an error while processing your question. Please try again.';
        aiResponse.style.display = 'block';
      }
    } catch (error) {
      console.error('Error asking AI question:', error);
      responseText.textContent = 'Sorry, I\'m having trouble connecting right now. Please check your internet connection and try again.';
      aiResponse.style.display = 'block';
    } finally {
      // Reset UI state
      loadingResponse.style.display = 'none';
      askButton.disabled = false;
      askButton.textContent = 'Ask AI';
      questionInput.value = '';
    }
  }

  // Performance controls
  pauseAnimation() {
    this.animationEnabled = false;
    console.log('🔄 Animation paused for performance');
  }
  
  resumeAnimation() {
    this.animationEnabled = true;
    this.forceRender = true;
    console.log('▶️ Animation resumed');
  }
  
  toggleAnimation() {
    this.animationEnabled = !this.animationEnabled;
    if (this.animationEnabled) {
      this.forceRender = true;
    }
    console.log('🔄 Animation', this.animationEnabled ? 'enabled' : 'disabled');
  }
  
  // Performance monitoring
  getPerformanceStats() {
    return {
      pixelRatio: this.renderer.getPixelRatio(),
      canvasSize: {
        width: this.renderer.domElement.width,
        height: this.renderer.domElement.height,
        displayWidth: this.renderer.domElement.clientWidth,
        displayHeight: this.renderer.domElement.clientHeight
      },
      objectCount: Object.keys(this.objects).length,
      animationEnabled: this.animationEnabled,
      memoryUsage: this.renderer.info.memory,
      renderCalls: this.renderer.info.render
    };
  }

  // Cache management
  saveToCache(key, data) {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save to cache:', error);
    }
  }

  getFromCache(key) {
    try {
      const cached = sessionStorage.getItem(key);
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      console.warn('Failed to get from cache:', error);
      return null;
    }
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  console.log('🌌 Starting SpaceHopper initialization...');
  
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.error('❌ THREE.js not loaded!');
    return;
  }
  console.log('✅ THREE.js loaded successfully');
  
  // Check if OrbitControls is loaded, if not create a fallback
  if (typeof THREE.OrbitControls === 'undefined') {
    console.warn('⚠️ OrbitControls not loaded, creating fallback...');
    // Create a simple fallback controls system
    THREE.OrbitControls = class SimpleControls {
      constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;
        this.target = new THREE.Vector3(0, 0, 0);
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.enableRotate = false;
        this.enablePan = true;
        this.enableZoom = true;
        this.minZoom = 0.1;
        this.maxZoom = 5;
        this.mouseButtons = {};
        
        this.isPanning = false;
        this.previousMousePosition = { x: 0, y: 0 };
        this.panSpeed = 2;
        this.zoomSpeed = 0.1;
        
        this.setupEventListeners();
      }
      
      setupEventListeners() {
        this.domElement.addEventListener('mousedown', (e) => {
          if (e.button === 0) { // Left mouse button
            this.isPanning = true;
            this.previousMousePosition = { x: e.clientX, y: e.clientY };
          }
        });
        
        this.domElement.addEventListener('mousemove', (e) => {
          if (this.isPanning) {
            const deltaX = e.clientX - this.previousMousePosition.x;
            
            // Only allow horizontal movement for timeline
            this.camera.position.x -= deltaX * this.panSpeed;
            this.target.x -= deltaX * this.panSpeed;
            
            // Limit horizontal range for simplified timeline
            this.target.x = Math.max(-200, Math.min(3500, this.target.x));
            this.camera.position.x = this.target.x;
            
            this.previousMousePosition = { x: e.clientX, y: e.clientY };
          }
        });
        
        document.addEventListener('mouseup', () => {
          this.isPanning = false;
        });
        
        this.domElement.addEventListener('wheel', (e) => {
          e.preventDefault();
          const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
          this.camera.zoom *= zoomFactor;
          this.camera.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.camera.zoom));
          this.camera.updateProjectionMatrix();
        });
      }
      
      update() {
        // Simple update method
      }
    };
  }
  console.log('✅ Controls system ready');
  
  try {
    const solarSystem = new SolarSystem();
    
    // Make it globally accessible for debugging
    window.solarSystem = solarSystem;
    
    // Add performance monitoring to console
    window.getPerformanceStats = () => {
      const stats = solarSystem.getPerformanceStats();
      console.table(stats);
      return stats;
    };
    
    window.toggleAnimation = () => solarSystem.toggleAnimation();
    window.pauseAnimation = () => solarSystem.pauseAnimation();
    window.resumeAnimation = () => solarSystem.resumeAnimation();
    
    console.log('🚀 SpaceHopper initialized successfully!');
    console.log('📊 Performance stats:', solarSystem.getPerformanceStats());
    
    // Force a resize after initialization to ensure proper canvas dimensions
    setTimeout(() => {
      console.log('🔄 Forcing canvas resize after initialization...');
      solarSystem.onWindowResize();
    }, 100);
    
    console.log('💡 Performance commands available:');
    console.log('   - getPerformanceStats() - Show performance metrics');
    console.log('   - toggleAnimation() - Toggle orbital animations');
    console.log('   - pauseAnimation() - Pause animations for better performance');
    console.log('   - resumeAnimation() - Resume animations');
    
    setTimeout(() => {
      console.log('📊 Initial Performance Stats:');
      getPerformanceStats();
    }, 1000);
    
  } catch (error) {
    console.error('❌ Error initializing SpaceHopper:', error);
  }
});

// Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  // About Modal
  const aboutLink = document.querySelector('a[href="#about"]');
  const aboutModal = document.getElementById('aboutModal');
  const modalClose = document.getElementById('modalClose');

  // Objects Modal
  const objectsLink = document.querySelector('a[href="#objects"]');
  const objectsModal = document.getElementById('objectsModal');
  const objectsModalClose = document.getElementById('objectsModalClose');

  // Open About modal
  if (aboutLink) {
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
      aboutModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  // Open Objects modal
  if (objectsLink) {
    objectsLink.addEventListener('click', function(e) {
      e.preventDefault();
      populateObjectsModal();
      objectsModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  // Close About modal
  if (modalClose) {
    modalClose.addEventListener('click', function() {
      aboutModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  // Close Objects modal
  if (objectsModalClose) {
    objectsModalClose.addEventListener('click', function() {
      objectsModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  // Close modals when clicking outside
  if (aboutModal) {
    aboutModal.addEventListener('click', function(e) {
      if (e.target === aboutModal) {
        aboutModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  if (objectsModal) {
    objectsModal.addEventListener('click', function(e) {
      if (e.target === objectsModal) {
        objectsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (aboutModal.style.display === 'flex') {
        aboutModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
      if (objectsModal.style.display === 'flex') {
        objectsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  });

  // Populate Objects Modal with data
  function populateObjectsModal() {
    const objectsGrid = document.getElementById('objectsGrid');
    objectsGrid.innerHTML = '';

    // Filter to only show the 14 main objects
    const displayObjects = ['sun', 'mercury', 'venus', 'earth', 'mars', 'ceres', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'eris', 'haumea', 'makemake'];
    
    displayObjects.forEach(key => {
      const data = solarSystemData[key];
      if (!data) return;

      const objectCard = document.createElement('div');
      objectCard.className = 'object-card';
      objectCard.setAttribute('data-object', key);
      
      // Format distance (convert AU to million km for display)
      const distanceDisplay = key === 'sun' ? '149.6' : data.distance ? (data.distance * 149.6).toFixed(1) : 'Unknown';
      
      // Format radius (convert to thousands of km for readability)
      const radiusDisplay = data.radius ? (data.radius > 10000 ? `${(data.radius / 1000).toFixed(0)}k` : data.radius.toLocaleString()) : 'Unknown';
      
      objectCard.innerHTML = `
        <div class="object-card-header">
          <div class="object-color-indicator" style="background-color: #${data.color.toString(16).padStart(6, '0')};"></div>
          <h3 class="object-name">${data.name}</h3>
          <span class="object-type">${data.type}</span>
        </div>
        <div class="object-stats">
          <div class="stat-row">
            <span class="stat-label">Distance:</span>
            <span class="stat-value">${distanceDisplay}M km</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Radius:</span>
            <span class="stat-value">${radiusDisplay} km</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Rotation:</span>
            <span class="stat-value">${data.rotationPeriod ? `${Math.abs(data.rotationPeriod).toFixed(1)} hrs${data.rotationPeriod < 0 ? ' ↻' : ''}` : 'Unknown'}</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Orbit Speed:</span>
            <span class="stat-value">${data.orbitalSpeed ? `${data.orbitalSpeed.toFixed(1)} km/s` : 'N/A'}</span>
          </div>
        </div>
      `;

      // Add click handler to select object and close modal
      objectCard.addEventListener('click', function() {
        objectsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // If SolarSystem instance exists, select the object
        if (window.solarSystem && typeof window.solarSystem.selectObject === 'function') {
          window.solarSystem.selectObject(key);
        }
      });

      objectsGrid.appendChild(objectCard);
    });
  }
});
