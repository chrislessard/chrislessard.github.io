
/*
		<script src="http://brangerbriz.net/labs/threejs_playGnd/js/three.min.js"></script>
		<script src="http://brangerbriz.net/labs/threejs_playGnd/js/Detector.js"></script>
		<script>

            var canvas = document.getElementById('canvas');
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

                renderer = new THREE.WebGLRenderer({canvas: canvas});
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                renderer.setViewport(0, 0, canvas.clientWidth, canvas.clientHeight);

                var camera = new THREE.PerspectiveCamera(75, canvas.clientWidth/canvas.clientHeight, 0.1, 1000);
                camera.position.z = 3;

				scene = new THREE.Scene();

				geometry = new THREE.IcosahedronGeometry(70, 0);
                material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 2});
                mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);
			}

			function draw() {

				requestAnimationFrame( draw );

				mesh.rotation.x = Date.now() * 0.001;

				renderer.render( scene, camera );

			}

			setup();
			draw();

		</script>
*/

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
   <script>
     function onResize(element, callback) {
       var height = element.clientHeight;
       var width  = element.clientWidth;

       return setInterval(function() {
           if (element.clientHeight != height || element.clientWidth != width) {
             height = element.clientHeight;
             width  = element.clientWidth;
             callback();
           }
       }, 500);
     }
   </script>
   <script>
     var canvas = document.getElementById('canvas');

     var renderer = new THREE.WebGLRenderer({canvas: canvas});
     canvas.width  = canvas.clientWidth;
     canvas.height = canvas.clientHeight;
     renderer.setViewport(0, 0, canvas.clientWidth, canvas.clientHeight);

     var scene = new THREE.Scene();

     var camera = new THREE.PerspectiveCamera(250, canvas.clientWidth/canvas.clientHeight, 0.50, 1000);
     camera.position.z = 3;
     var geometry = new THREE.IcosahedronGeometry(30, 0);
     var material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 2});
     var mesh = new THREE.Mesh(geometry, material);
     scene.add(mesh);
     var light = new THREE.DirectionalLight(0xffffff, 0.55);
     light.position.set(0, 0, 1);
     scene.add(light);

     onResize(canvas, function () {
         canvas.width  = canvas.clientWidth;
         canvas.height = canvas.clientHeight;
         renderer.setViewport(0, 0, canvas.clientWidth, canvas.clientHeight);
         camera.aspect = canvas.clientWidth / canvas.clientHeight;
         camera.updateProjectionMatrix();
     });
     var render = function () {
       requestAnimationFrame( render );
       geometry.rotation.x += 0.5;
       geometry.rotation.y += 0.01;
       renderer.render(scene, camera);
     };
     render();
   </script>
