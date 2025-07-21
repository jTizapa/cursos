"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRANS_SEED = void 0;
const uuid_1 = require("uuid");
exports.BRANS_SEED = [
    {
        id: (0, uuid_1.v7)(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id: (0, uuid_1.v7)(),
        name: 'Chevrolet',
        createdAt: new Date().getTime(),
    },
    {
        id: (0, uuid_1.v7)(),
        name: 'Hyundai',
        createdAt: new Date().getTime(),
    },
];
//# sourceMappingURL=brans.seed.js.map