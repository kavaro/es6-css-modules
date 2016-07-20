import {app} from './app';
import json from './index.json';
import styles from './index.css';
import rlogo from 'responsive?name=imgs/[hash:6]-[width].,sizes[]=100,sizes[]=200!./logo.jpg';
import nlogo from 'file?name=imgs/[hash:6].[ext]!img!./logo.jpg'

console.log('Hello', app);
console.log(styles);
console.log(json);
console.log(rlogo);
console.log(nlogo);

export const ret = app;