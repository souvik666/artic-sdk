"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class EventsService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.events });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsService` class.
     */
    static get getInstance() {
        if (EventsService.instance)
            return EventsService.instance;
        else {
            EventsService.instance = new EventsService();
            return EventsService.instance;
        }
    }
}
exports.EventsService = EventsService;
EventsService.instance = null;
//# sourceMappingURL=event.service.js.map