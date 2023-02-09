const output = {};

Object.entries(input).forEach(([key, value]) => {
  const timeZones = value.reduce((acc, cur) => {
    const [continent, city] = cur.split('/');
acc[continent] = acc[continent] ? acc[continent].concat(city) : [city];
return acc;
}, {});
output[key] = Object.entries(timeZones).map(([k, v]) => `${k}/${v.join('|')}`);
});
