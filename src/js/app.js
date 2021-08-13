import * as PIXI from 'pixi.js'

export const app = new PIXI.Application({
    width: 720,
    height: 1280,
    backgroundColor: 0x1099bb,
    view: document.querySelector('#scene'),
    resolution: window.devicePixelRatio || 1
});