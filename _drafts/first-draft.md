---
layout: post
title: My First Post [Draft]
---


Hey! This is just a first draft of a sample post here....these will get better! :)

Trying out embedding Three.JS (credit to [Long Qian's post](http://longqian.me/2017/02/06/jekyll-threejs/))


<style> 
	.highlight-left {margin-left: 0}
	canvas {position: relative; top: 0;}
</style>

<div id='canvas-holder' style="position:relative; width: 100%;">
	<div id='dat-gui-holder' style='position: absolute; top: 0em; right: 0em; z-index: 1;'></div>
</div>

<!--Load three.js-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.min.js"></script>
<script> 

	// Set up Canvas:
	const canvasHolder = document.getElementById('canvas-holder');
	let width = canvasHolder.clientWidth;
	let height = 0.5*width; 
	canvasHolder.clientHeight = height;
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
	camera.position.z = 4;
	const renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor("#FDFDFD");
	renderer.setSize(width, height);
	canvasHolder.appendChild(renderer.domElement);


	// Set up Scene:
	const geometry = new THREE.BoxGeometry(1,1,1);
	const material = new THREE.MeshNormalMaterial(); 
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	let render = function() {
		requestAnimationFrame( render ); 

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render(scene, camera);
	}

	render(); 

</script>	


<span> - Vinay </span>