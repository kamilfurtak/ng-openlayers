export enum ProjectionCode {
  PseudoMercator = 'EPSG:3857',
  Pl2000zone5 = 'EPSG:2176',
  Pl2000zone6 = 'EPSG:2177',
  Pl2000zone7 = 'EPSG:2178',
  Pl2000zone8 = 'EPSG:2179',
}

export enum ProjectionCodeDefinition {
  Pl2000zone5 = '+proj=tmerc +lat_0=0 +lon_0=15 +k=0.999923 +x_0=5500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
  Pl2000zone6 = '+proj=tmerc +lat_0=0 +lon_0=18 +k=0.999923 +x_0=6500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
  Pl2000zone7 = '+proj=tmerc +lat_0=0 +lon_0=21 +k=0.999923 +x_0=7500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
  Pl2000zone8 = '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.999923 +x_0=8500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
}
