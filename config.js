'use strict';

// Release gate: replace nulls with independently verified Shenzhen URLs.
// Never fall back to another course's form, map, or location.
window.COURSE_LINKS = Object.freeze({
  survey: 'https://fcntz0gsnz8y.feishu.cn/share/base/form/shrcnh0z5AeRukf8LrL9CZU8iFb',
  venueNavigation: 'https://uri.amap.com/navigation?to=113.927476,22.550902,%E5%94%90%E5%95%86%E7%A7%91%E6%8A%80%E5%A4%A7%E5%8E%A6A%E6%A0%8B&mode=car&policy=0&src=yixinhui&callnative=0',
  venueDetail: 'https://ditu.amap.com/ssr/search/poi_detail?id=B0LR0OOZNV',
  venueApp: 'https://uri.amap.com/navigation?to=113.927476,22.550902,%E5%94%90%E5%95%86%E7%A7%91%E6%8A%80%E5%A4%A7%E5%8E%A6A%E6%A0%8B&mode=car&policy=0&src=yixinhui&callnative=1',
  hotelNavigation: 'https://uri.amap.com/navigation?to=113.926429,22.550971,%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%B1%B1%E7%A7%91%E6%8A%80%E5%9B%AD%E5%8D%97%E5%A4%B4%E5%8F%A4%E5%9F%8E%E5%94%90%E5%AE%8B%E9%85%92%E5%BA%97&mode=car&policy=0&src=yixinhui&callnative=0',
  hotelDetail: 'https://ditu.amap.com/ssr/search/poi_detail?id=B0L3AOY7JL',
});
