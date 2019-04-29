

class Scene {

	constructor(width, height, canvasHolder) {
		this.width = width;
		this.height = height;
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.orbitControls = new THREE.OrbitControls(this.camera, canvasHolder);

		this._initialize(canvasHolder);
	}

	_initialize(canvasHolder) {

		// Set up Canvas:
		canvasHolder.style.width = this.width;
		canvasHolder.style.height = this.height;

		// Adjust Camera:
		this.camera.position.z = 4;
		
		// Adjust Renderer:
		this.renderer.setClearColor("#FDFDFD");
		this.renderer.setSize(this.width, this.height);
		
		// Append to canvas:
		canvasHolder.appendChild(this.renderer.domElement);
	}
}