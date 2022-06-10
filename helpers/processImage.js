const sharp = require("sharp");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const processImage = async (imageBuffer) => {
  const sharpImage = sharp(imageBuffer);
  const imageMetadata = await sharpImage.metadata();

  if (imageMetadata.width > 800) {
    sharpImage.resize(800);
  }

  const imageName = `${uuidv4()}.${imageMetadata.format}`;

  const imagePath = path.join(__dirname, "../", "uploads", imageName);

  await sharpImage.toFile(imagePath);

  return imageName;
};

module.exports = processImage;
