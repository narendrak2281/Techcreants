import Images from "../styles/images";

export const isValidImageUrl = (url: string | undefined) => {
    if (!url || typeof url !== 'string') return false;
    return /\.(jpeg|jpg|gif|png|svg|webp|bmp|tiff|ico)$/i.test(url);
  }
  
export const getAvatarSource = (avatar: any, gender: any) => {
    if (avatar && isValidImageUrl(avatar)) {
      return { uri: avatar };
    }
    return gender === "male"
      ? Images.male
      : gender === "female"
      ? Images.female
      : Images.notFound;
  };