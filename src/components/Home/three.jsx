import { useEffect } from 'react';
// import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from './SceneInit';
// import { withTheme } from '@emotion/react';

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);
    // let loadedModel;
    // loadedModel = boxMesh;

    let loadedModel;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./voxelMe.gltf', function (gltfScene) {

      gltfScene.scene.rotation.x = Math.PI / 8;
      gltfScene.scene.scale.set(1.3, 1.3, 1.3);
      // gltfScene.scene.position.x = 15;

      test.scene.add(gltfScene.scene);
      loadedModel = gltfScene.scene;
      // test.scene.add(loadedModel);
    });

    let frame = 30;
    const animate = () => {

      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 102){
        var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
        if (loadedModel) {
          loadedModel.rotation.x += 0.00;
          loadedModel.rotation.y += 0.005 + rotSpeed;
          loadedModel.rotation.z += 0.00;
        }
      }else{
        loadedModel.rotation.y += 0.005;
      }
      requestAnimationFrame(animate);
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





    // let loadedModel;
    // var mtlLoader = new MTLLoader();
    // mtlLoader.load('./voxelMe.mtl', function (materials) {

    //     materials.preload();

    //     var objLoader = new OBJLoader();
    //     objLoader.setMaterials(materials);
    //     objLoader.load('./voxelMe.obj', function (object) {

    //         test.scene.add(object);
    //         object.position.z = 0;
    //         object.position.y = 0;
    //         object.position.x = 0;
    //         loadedModel = object;
    //     });
    // });