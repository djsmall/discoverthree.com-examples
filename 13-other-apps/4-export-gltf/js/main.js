function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 3, 2, 15 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.torusKnot );

  const clips = initAnimation( meshes.torusKnot );

  setupExportControl( meshes.torusKnot, clips );

  app.start();

}

initScene();
