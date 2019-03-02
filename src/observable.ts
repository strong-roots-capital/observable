/**
 * observable
 * Observe and react to EventSources
 */

// TODO: provide a Mixin version

namespace debug {
    export const observer = require('debug')('observable')
}

import { EventSource, DEFAULT_EVENT } from '@strong-roots-capital/event-source'

/**
 * Provides a clean-up mechanism.
 */
interface Observer {
    /**
     * Removes callback on event-emitter.
     */
    dispose: () => void
}

/**
 * A stub for uninitialized Observers.
 */
const VoidObservable = { dispose: () => { debug.observer('disposed') } }

/**
 * Encapsulates behavior for an entity capable of listening and
 * reacting to an Event Source.
 */
export default class Observable {

    /**
     * The observer of an Event Source, which is stored in stead of
     * the event source itself.
     */
    protected observer: Observer = VoidObservable

    /**
     * Observe specified EventSource.
     *
     * @param eventSource - EventSource to observe
     * @param callback - Callback to invoke on event from `eventSource`
     * @returns Observer of `eventSource`
     */
    observe(eventSource: EventSource, callback: any): Observer {
        debug.observer('observing')
        eventSource.on(DEFAULT_EVENT, callback)
        return {
            dispose: () => {
                eventSource.removeListener(DEFAULT_EVENT, callback)
                debug.observer('disposed')
            }
        }
    }

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
        this.observer = this.observe(source, this.handleEvent.bind(this))
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
