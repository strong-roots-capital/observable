/**
 * observable
 * Observe and react to EventSources
 */

// TODO: provide a Mixin version

namespace debug {
    export const observer = require('debug')('observable')
}

import { EventSource } from '@strong-roots-capital/event-source'
import observe, { Observer } from '@strong-roots-capital/observe'

/**
 * A stub for uninitialized Observers.
 */
const VoidObserver = { dispose: () => { debug.observer('disposed') } }

/**
 * Encapsulates behavior for an entity capable of listening and
 * reacting to an Event Source.
 */
export default class Observable {

    /**
     * The observer of an Event Source, which is stored in stead of
     * the event source itself.
     */
    protected observer: Observer = VoidObserver

    /**
     * Observe a new EventSource.
     *
     * @remarks
     * Dispatches the old Observer. Thus, to stop observing any events
     * set source to a new EventSource as follows
     *
     * ```ts
     * myObservable.source = new EventSource()
     * ```
     *
     * @param source - New EventSource to observe.
     */
    set source(source: EventSource) {
        this.observer.dispose()
        this.observer = observe(source, this.handleEvent.bind(this))
    }

    /**
     * Event-handler to be invoked when observed EventSource emits an
     * event. Override this function in a sub-class for custom
     * behavior.
     *
     * @param event - Event emitted by observed EventSource
     * @param args -  Arguments emitted by observed EventSource
     */
    handleEvent(event: string | symbol, ...args: any[]) {
        debug.observer('Unhandled event', event, args)
    }
}

//  LocalWords:  myObservable
