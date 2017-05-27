'use strict';

const fs = require('fs-promise');
const co = require('co');
const path = require('path');

var txt = '';

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            txt = '123';
            setTimeout(() => {
                if (txt !== '123') {
                    console.log('txt should be 123:', txt);
                }
            }, 0);
        }
    }, 0);
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            txt = '456';
            setTimeout(() => {
                if (txt !== '456') {
                    console.log('txt should be 456:', txt);
                }
            }, 0);
        }
    }, 0);
});

Promise.all([p1, p2]).then(values => {
    console.log(values);
});
