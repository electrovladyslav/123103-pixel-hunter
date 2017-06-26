/**
 * Adjusted size of image to frame size
 * @param {Object} frame object with width and height of frame
 * @param {Object} image object with width and height of image
 * @return {Object} result adjusted image
 */
export default (frame, image) => {
  const frameRatio = frame.width / frame.height;
  const imageRatio = image.width / image.height;

  // by default frameRatio == imageRatio
  const result = {
    width: frame.width,
    height: frame.height
  };

  if (frameRatio > imageRatio) {
    // frame wider than image
    result.height = frame.height;
    const shrinkRatio = image.height / frame.height;
    result.width = Math.floor(image.width / shrinkRatio);
  }
  if (frameRatio < imageRatio) {
    // frame narrower than image
    result.width = frame.width;
    const shrinkRatio = image.width / frame.width;
    result.height = Math.floor(image.height / shrinkRatio);
  }
  return result;
};
