import {
  Math as MathUtils,
} from './vendor/three/three.module.js';

function selectAxis() {

  const axisNum = MathUtils.randInt( 0, 2 );
  if ( axisNum === 0 ) return 'x';
  if ( axisNum === 1 ) return 'y';
  return 'z';

}

export default function spinAtRandomIntervals( model, intervalMin, intervalMax ) {

  let spinning = false;
  let axis = selectAxis();

  setTimeout(
    () => { spinning = true; },
    MathUtils.randInt( intervalMin, intervalMax ),
  );

  model.userData.onUpdate = ( delta ) => {

    if ( spinning ) {

      model.rotation[ axis ] += delta * 4;

      if ( model.rotation[ axis ] >= 2 * Math.PI ) {

        model.rotation[ axis ] = 0;
        spinning = false;
        axis = selectAxis();

        setTimeout(
          () => { spinning = true; },
          MathUtils.randInt( intervalMin, intervalMax ),
        );

      }

    }

  };

}
