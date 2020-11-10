const findPrimaryImgUrl = (imgId: string, imgList: Array<any>): string => {
    const existImg = imgList.filter(imgItem => imgItem.id === imgId);
    if (existImg.length) {
        return existImg[0].url;
    }
    return 'Image not found';
}

export {
    findPrimaryImgUrl
}