import { readFile, writeFile } from 'node:fs/promises';

// The README banner reuses the same logo and map artwork as the example site.
const assetRoot = 'apps/demo-ng-openlayers/src/assets';
const inner = (svg) => svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const logo = inner(await readFile(`${assetRoot}/logo.svg`, 'utf8'));
const map = inner(await readFile(`${assetRoot}/map-illustration.svg`, 'utf8'));
await writeFile(
  'docs/assets/ng-openlayers-banner.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title description">
  <title id="title">ng-openlayers — Build maps. The Angular way.</title>
  <desc id="description">Declarative OpenLayers components for Angular, with standalone components, typed APIs and an illustrated vector map.</desc>
  <rect width="1200" height="630" rx="20" fill="#f8faf6"/>
  <g font-family="Arial, Helvetica, sans-serif" fill="#17352c">
    <g transform="translate(64 62) scale(1.6)">${logo}</g>
    <text x="134" y="100" font-size="38" font-weight="700">ng-openlayers</text>
    <text x="64" y="246" font-size="62" font-weight="700" letter-spacing="-2">Build maps.</text>
    <text x="64" y="316" font-size="62" font-weight="700" letter-spacing="-2" fill="#0c6555">The Angular way.</text>
    <text x="64" y="380" font-size="22" fill="#536d62">Declarative OpenLayers components</text>
    <text x="64" y="414" font-size="22" fill="#536d62">for modern Angular applications.</text>
    <g fill="#e8efe6" stroke="#dbe5dc"><rect x="64" y="462" width="134" height="38" rx="8"/><rect x="210" y="462" width="110" height="38" rx="8"/><rect x="332" y="462" width="130" height="38" rx="8"/></g>
    <g font-size="16" fill="#0c6555"><text x="84" y="487">Standalone</text><text x="230" y="487">Zoneless</text><text x="352" y="487">TypeScript</text></g>
    <rect x="672" y="157" width="464" height="396" rx="12" fill="#fff" stroke="#dbe5dc"/>
    <circle cx="695" cy="182" r="4" fill="#0c6555"/>
    <text x="710" y="187" font-size="15" fill="#536d62">A map, composed in Angular</text>
    <svg x="673" y="205" width="462" height="308" viewBox="0 0 540 360">${map}</svg>
    <text x="692" y="539" font-size="15">Layers. Sources. Styles. Interactions.</text>
    <text x="64" y="563" font-size="18" fill="#0c6555">ng-openlayers.furtak.dev</text>
    <text x="64" y="591" font-size="15" fill="#536d62">Open source · MPL-2.0 · Maintained by Kamil Furtak</text>
  </g>
</svg>\n`
);
console.log('Generated shared README banner from the site artwork.');
