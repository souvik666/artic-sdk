"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsOccurrenceService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class EventsOccurrenceService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['event-occurrences'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance() {
        if (EventsOccurrenceService.instance)
            return EventsOccurrenceService.instance;
        else {
            EventsOccurrenceService.instance = new EventsOccurrenceService();
            return EventsOccurrenceService.instance;
        }
    }
}
exports.EventsOccurrenceService = EventsOccurrenceService;
EventsOccurrenceService.instance = null;
//# sourceMappingURL=eventOccurence.service.js.map