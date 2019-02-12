import {
  DoubleSide,
  LineBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {
    basic: new LineBasicMaterial( {
      side: DoubleSide,
    } ),
  };

}
