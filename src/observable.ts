/**
 * observable
 * Observe and react to EventSources
 */

namespace debug {
    export const observer = require('debug')('observable')
}

import { EventSource, DEFAULT_EVENT } from '@strong-roots-capital/event-source'

/**
 * DOCUMENT
 */
interface Observer {
    dispose: () => void
}

/**
 * DOCUMENT
 */
const VoidObservable = { dispose: () => {debug.observer('disposed')} }

// TODO: provide a Mixin version
/**
 * DOCUMENT
 */
export default class Observable {

    protected observer: Observer = VoidObservable

    /**
     * DOCUMENT
     */
    observe(ee: EventSource, callback: any): Observer {
        debug.observer('observing')
        ee.on(DEFAULT_EVENT, callback)
        return {
            dispose: () => {
                ee.removeListener(DEFAULT_EVENT, callback)
                debug.observer('disposed')
            }
        }
    }

    /**
     * DOCUMENT
     */
    set source(source: EventSource) {
        this.observer.dispose()
        this.observer = this.observe(source, this.handleEvent.bind(this))
    }

    /**
     * DOCUMENT
     */
    handleEvent(event: string | symbol, ...args: any[]) {
        debug.observer('Unhandled event', event, args)
    }
}
