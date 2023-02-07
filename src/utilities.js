//points for fingers
const fingerjoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

export const drawHand = (predictions, ctx) => {
  if (predictions.length > 0) {
    console.log("draw");
    console.log(predictions);
    predictions.forEach((prediction) => {
      const landmarks = prediction.landmarks;
      //loop through fingers
      for (let j = 0; j < Object.keys(fingerjoints).length; j++) {
        let finger = Object.keys(fingerjoints)[j];
        //loop through pairs of joints
        for (let k = 0; k < fingerjoints[finger].length - 1; k++) {
          //get pairs of joints
          const firstjointIndex = fingerjoints[finger][k];
          const secondjointIndex = fingerjoints[finger][k + 1];
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstjointIndex][0],
            landmarks[firstjointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondjointIndex][0],
            landmarks[secondjointIndex][1]
          );
          ctx.strokeStyle = "plum";
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }
      for (let i = 0; i < landmarks.length; i++) {
        //get x pointelement
        const x = landmarks[i][0];
        console.log(x);

        //get y point
        const y = landmarks[i][1];
        console.log(y);
        //start drawing
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        //set line color
        ctx.fillStyle = "indigo";
        ctx.fill();
      }
    });
  }
};
