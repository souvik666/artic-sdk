"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhibitionsService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class ExhibitionsService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.exhibitions });
    }
    /**
     ** ExhibitionsService INSTANCE
     */
    static get getInstance() {
        if (ExhibitionsService.instance)
            return ExhibitionsService.instance;
        else {
            ExhibitionsService.instance = new ExhibitionsService();
            return ExhibitionsService.instance;
        }
    }
}
exports.ExhibitionsService = ExhibitionsService;
ExhibitionsService.instance = null;
//# sourceMappingURL=exhibition.service.js.map