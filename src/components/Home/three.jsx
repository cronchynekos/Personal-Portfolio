import { useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SceneInit from './SceneInit';
// import { withTheme } from '@emotion/react';


function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 200;   
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    test.scene.add(boxMesh);
    let loadedModel;
    loadedModel = boxMesh;

    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // let loadedModel;
    // const objLoader = new OBJLoader();
    //     objLoader.load('../../../public/voxelMe.obj', (objScene) => {
    //       loadedModel = objScene;
    //       console.log(loadedModel);

    //   objScene.rotation.y = Math.PI / 8;
    //   objScene.position.y = 3;
    //   objScene.scale.set(10, 10, 10);
    //   test.scene.add(objScene);
    // });

    // const obj = 'http://localhost:3000/voxelMe.obj';
    // const mtl = 'http://localhost:3000/voxelMe.mtl';

    var mtlLoader = new MTLLoader();
    // mtlLoader.setTexturePath('/public/');
    // mtlLoader.setPath('/public/');
    mtlLoader.load('../../../public/voxelMe.mtl', function (materials) {

        materials.preload();

        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        // objLoader.setPath('/public/');
        objLoader.load('../../../public/voxelMe.obj', function (object) {

            test.scene.add(object);
            object.position.y -= 60;

        });

    });

    const animate = () => {
      if (loadedModel) {
        loadedModel.rotation.x += 0.01;
        loadedModel.rotation.y += 0.01;
        loadedModel.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
      controls.update();
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

// #myThreeJsCanvas {

// }

export default App;

//   objScene.scene.rotation.y = Math.PI / 8;
    //   objScene.scene.position.y = 3;
    //   objScene.scene.scale.set(10, 10, 10);
    //   test.scene.add(objScene.scene);
    // });

    // const animate = () => {
    //   if (loadedModel) {
    //     loadedModel.scene.rotation.x += 0.01;
    //     loadedModel.scene.rotation.y += 0.01;
    //     loadedModel.scene.rotation.z += 0.01;
    //   }