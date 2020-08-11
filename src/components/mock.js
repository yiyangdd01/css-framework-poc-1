export default function getMockData (number) {
  const data = [];
  const max = number || 3000;
  for (let i = 0; i < max; i++) {
    data.push({
      id: new Date().getTime() + i,
      title: `${i + 1}周報社論 - 華府封殺科網升級　中美漩渦港難自處1`,
      image: 'https://cdn.hk01.com/di/media/images/dw/20200807/368483363113275392.jpeg/jx0IinJgSvCX5nf--JPnyz03tBPBEGSR30WL199Fi9c?v=w1280r16_9'
    })
  }
  return data;
}