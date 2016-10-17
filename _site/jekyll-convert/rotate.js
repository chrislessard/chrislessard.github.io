	<script src="http://brangerbriz.net/labs/threejs_playGnd/js/three.min.js"></script>
		<script src="http://brangerbriz.net/labs/threejs_playGnd/js/Detector.js"></script>
		<script>

			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
				camera.position.z = 500;

				scene = new THREE.Scene();


				geometry = new THREE.IcosahedronGeometry(70, 0);
material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 2});
mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);



			}

			function draw() {

				requestAnimationFrame( draw );

				mesh.rotation.x = Date.now() * 0.001;
				mesh.rotation.y = Date.now() * 0.001;
				mesh.rotation.z = Date.now() * 0.001;

				renderer.render( scene, camera );

			}

			setup();
			draw();

		</script>
