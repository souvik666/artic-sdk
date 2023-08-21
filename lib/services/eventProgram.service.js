"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProgramService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class EventProgramService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['event-programs'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance() {
        if (EventProgramService.instance)
            return EventProgramService.instance;
        else {
            EventProgramService.instance = new EventProgramService();
            return EventProgramService.instance;
        }
    }
}
exports.EventProgramService = EventProgramService;
EventProgramService.instance = null;
//# sourceMappingURL=eventProgram.service.js.map