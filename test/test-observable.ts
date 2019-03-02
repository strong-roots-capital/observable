import test from 'ava'
import { EventSource } from '@strong-roots-capital/event-source'

/**
 * Library under test
 */

import Observable from '../src/observable'


test.cb('overridden handleEvent method should be invoked on observed event', t => {
    class MyObservable extends Observable {
        handleEvent(event: string | symbol, ...args: any[]) {
            t.end()
        }
    }
    const es = new EventSource()
    const myobservable = new MyObservable()
    myobservable.source = es
    es.emit('some-event')
})

test.cb('default handleEvent method should be invoked on observed event', t => {
    class MyObservable extends Observable {
    }
    const es = new EventSource()
    const myobservable = new MyObservable()
    myobservable.source = es
    es.emit('some-event')
    t.end()
})

test.cb('handleEvent should be forwarded the name of the emitted-event as first argument', t => {
    const eventName = 'my-event-name'
    class MyObservable extends Observable {
        handleEvent(event: string | symbol, ...args: any[]) {
            t.is(eventName, event)
            t.end()
        }
    }
    const es = new EventSource()
    const myobservable = new MyObservable()
    myobservable.source = es
    es.emit(eventName)
})

test.cb('handleEvent should be forwarded the arguments of the emitted-event as rest arguments', t => {
    const eventName = 'my-event-name'
    const eventArgs = [1, 2, 3, 4, 5, [6, 7, 8]]
    class MyObservable extends Observable {
        handleEvent(event: string | symbol, ...args: any[]) {
            t.deepEqual(eventArgs, args)
            t.end()
        }
    }
    const es = new EventSource()
    const myobservable = new MyObservable()
    myobservable.source = es
    es.emit(eventName, ...eventArgs)
})

test.cb('setting source should start observing the new event-source', t => {
    t.plan(1)
    class MyObservable extends Observable {
        handleEvent(event: string | symbol, ...args: any[]) {
            t.pass()
        }
    }
    const es1 = new EventSource()
    const es2 = new EventSource()
    const myobservable = new MyObservable()
    myobservable.source = es1
    es1.emit('some-event')

    myobservable.source = es2
    es1.emit('some-event')
    t.end()
})

test.cb('overwriting source should dispose the old observer', t => {
    t.plan(2)
    class MyObservable extends Observable {
        handleEvent(event: string | symbol, ...args: any[]) {
            t.pass()
        }
    }
    const es1 = new EventSource()
    const es2 = new EventSource()
    const myobservable = new MyObservable()
    myobservable.source = es1
    es1.emit('some-event')

    myobservable.source = es2
    es2.emit('some-event')
    t.end()
})
